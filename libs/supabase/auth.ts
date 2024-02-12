import { supabase } from "./init";
import bcrypt from "bcrypt";

export const signIn = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .single();

    if (error) {
      console.log(error);
      return false;
    }

    if (data.password == password && data.tier == "admin") {
      alert("Signed in!");
      document.cookie = `email=${email}; expires=Mon, 1 Jan 2030 00:00:00 UTC; path=/dashboard/path:*;`;
      return data.email;
    }

    return { error: "Invalid email or password" };
  } catch (error) {
    console.log("Error signing in user: ", error);
    return { error };
  }
};

export const signOut = async () => {
  try {
    await supabase.auth.signOut();
  } catch (error) {
    console.log("Error sign out user: ", error);
  }
};

export const getCurrentUser = async () => {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    return user;
  } catch (error) {
    console.log("Error getting current user: ", error);
  }
};
