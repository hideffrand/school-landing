"use client";

import Logo from "@/components/Logo";
import Link from "next/link";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "@/libs/supabase/auth";

export default function LoginPage() {
  const router = useRouter();
  const emailRef: any = useRef(null);
  const passwordRef: any = useRef(null);

  async function handleSubmit(e: any) {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    e.preventDefault();
    try {
      await signIn(email, password);
      router.push("/dashboard");
    } catch (error) {
      console.log("Error login: ", error);
    }
  }

  return (
    <div className="w-full h-screen flex flex-col justify-start pt-20 items-center bg-gray-200">
      <Logo />
      <h1 className="text-2xl py-8 font-bold text-center">Login Admin</h1>
      <form
        onSubmit={handleSubmit}
        className="w-80 h-auto border flex flex-col justify-between bg-white shadow-xl p-4 rounded-xl"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="username">Email :</label>
          <input
            ref={emailRef}
            type="text"
            id="email"
            className="border p-2 focus:outline-dark-green"
            required
          />
          <label htmlFor="password">Password :</label>
          <input
            ref={passwordRef}
            type="password"
            id="password"
            className="border p-2 focus:outline-dark-green"
            required
          />
          <Link href="" className="text-gray-400 underline text-end">
            Lupa password?
          </Link>
        </div>
        <button
          onClick={handleSubmit}
          className="mt-8 px-4 py-2 bg-dark-green text-white rounded-lg"
        >
          Login
        </button>
      </form>
    </div>
  );
}
