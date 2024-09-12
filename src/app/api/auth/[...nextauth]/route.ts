import Users from "@/models/Users"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from 'bcrypt'

export const authOptions = {
    pages: {
        signIn: '/',
    },
    session: {
        strategy: 'jwt' as const,  // Ensure 'jwt' is treated as a constant literal
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

            async authorize(credentials) {
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
                } catch (error: any) {
                    console.error(error);
                    return null;  // Ensure null is returned on failure
                }
            }
            
        })
    ],
    callbacks: {
        async jwt({ token, user }: any) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }: any) {
            session.user = token;
            return session;
        }
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }
