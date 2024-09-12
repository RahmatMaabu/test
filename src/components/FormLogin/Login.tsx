"use client"
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { FormEvent, useState } from 'react'

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Collecting form data using FormData
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username")?.toString() ?? '';
    const password = formData.get("password")?.toString() ?? '';

    // Check for empty input fields
    if (!username || !password) {
      setError("Both fields are required");
      setTimeout(() => setError(""), 1500);
      return;
    }

    try {
      // Perform sign-in using NextAuth's credentials provider
      const response = await signIn("credentials", {
        username,  // Pass username instead of email
        password,
        redirect: false, // Prevent automatic redirects
      });

      if (response?.ok) {
        router.push("/admin/dashboard"); // Redirect to the dashboard on success
        router.refresh();
      } else {
        // Handle login failure
        setError("Invalid username or password");
        setTimeout(() => setError(""), 1500);
      }
    } catch (error) {
      console.log("Error during sign-in:", error);
      setError("Server Error");
      setTimeout(() => setError(""), 1500);
    }
  };

  return (
    <div className="bg-white shadow-2xl rounded-xl flex flex-col items-center justify-center gap-4 lg:w-1/3 sm:w-1/2 w-full sm:h-auto h-80 py-4 px-5">
      <div className="flex flex-col items-center gap-2">
        <Image src={"/image/LogoUmum.png"} alt="logo" width={80} height={80}/>
        <h2 className="font-medium">SMA NEGERI 1 GORONTALO</h2>
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>} {/* Display error message */}
      <form onSubmit={handleSubmit} method="post" className="flex flex-col items-center gap-4 w-full h-full">
        <div className="flex flex-col gap-2 w-full h-full">
          <input 
            type="text" 
            name="username" 
            id="username" 
            placeholder='Masukkan Username' 
            className="px-4 text-sm text-neutral-600 py-2 border-2 rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-2 w-full h-full">
          <input 
            type="password" 
            name="password" 
            id="password" 
            placeholder='Masukkan Password' 
            className="px-4 text-neutral-600 text-sm py-2 border-2 rounded-lg"
          />
        </div>
        <button 
          type="submit" 
          className="bg-blue-600 text-white text-sm font-semibold px-4 py-3 rounded-lg w-full"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login;
