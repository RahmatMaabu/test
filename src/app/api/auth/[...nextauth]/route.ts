import Users from "@/models/Users";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt';
import { JWT } from "next-auth/jwt";
import { Session } from "next-auth";

const handler = NextAuth({
  pages: {
    signIn: '/',
  },
  session: {
    strategy: 'jwt' as const,
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      type: 'credentials',
      name: 'credentials',

      credentials: {
        username: { label: "username", type: "text", placeholder: "Enter your username" },
        password: { label: "Password", type: "password", placeholder: "Enter your password" }
      },

      async authorize(credentials: { username?: string, password?: string } | undefined) {
        try {
          const response = await Users.findOne({
            where: {
              username: credentials?.username
            }
          });

          if (!response) {
            return null;
          }

          const passwordMatch = await bcrypt.compare(credentials?.password ?? '', response.password);

          if (!passwordMatch) {
            return null;
          }

          const user = {
            id: response.id.toString(),
            name: response.name,
            username: response.username,
            email: response.email
          };

          return user;  // Return user object on success
        } catch (error: unknown) {
          console.error(error);
          return null;  // Ensure null is returned on failure
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }: { token: JWT, user?: { id: string } }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }: { session: Session, token: JWT }) {
      session.user = token;
      return session;
    }
  }
});

export { handler as GET, handler as POST };
