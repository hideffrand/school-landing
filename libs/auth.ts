"use server";

import { supabase } from "@/libs/supabase/init";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@/constant";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const login = async (formData: FormData): Promise<void> => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password)
    return redirect("/login?message=Email or password invalid");

  const {
    data: { user },
  } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (!user) return redirect("/login?message=Email or password invalid");

  const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "1h" });
  const expires = new Date(Date.now() + 12 * 60 * 60 * 1000); // now + 12 hours in milisecond

  cookies().set("token", token, {
    expires,
    httpOnly: true,
    sameSite: "none",
    secure: true,
  });

  return redirect("/dashboard");
};

export const logout = async (): Promise<void> => {
  cookies().delete("token");

  return redirect("/login");
};
