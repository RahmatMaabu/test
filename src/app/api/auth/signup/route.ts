import Users from "@/models/Users";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("Request body received: ", body);

    const { name, username, email, password, confirmPassword } = body;

    // Cek apakah password dan confirmPassword cocok
    if (password !== confirmPassword) {
      return new Response(JSON.stringify({ error: "Passwords do not match" }), {
        status: 400,
      });
    }

    // Cek apakah username sudah ada
    console.log("Checking if username exists...");
    const existingUsername = await Users.findOne({
      where: {
        username,
      },
    });

    if (existingUsername) {
      return new Response(JSON.stringify({ error: "Username already exists" }), {
        status: 400,
      });
    }

    // Cek apakah email sudah ada
    console.log("Checking if email exists...");
    const existingEmail = await Users.findOne({
      where: {
        email,
      },
    });

    if (existingEmail) {
      return new Response(JSON.stringify({ error: "Email already exists" }), {
        status: 400,
      });
    }

    // Hash password
    console.log("Hashing password...");
    const hashPass = await bcrypt.hash(password, 10);

    // Simpan pengguna baru ke database
    console.log("Creating new user...");
    const newUser = await Users.create({
      name,
      username,
      email,
      password: hashPass,
    });

    console.log("User created successfully: ", newUser);

    return new Response(JSON.stringify(newUser), {
      status: 200,
    });

  } catch (error: any) {
    // Tampilkan error yang lebih spesifik
    console.error("Error in signup route:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error", details: error.message }), {
      status: 500,
    });
  }
}
