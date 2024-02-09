import { supabase } from "./init";

export interface UserProps {
  email: string;
  password: string;
  tier: string;
}

export const getUser = async (email: string) => {
  try {
    const res = await supabase.from("users").select().eq("email", email);
    return res.data;
  } catch (error) {
    console.log("Error getting user: ", error);
  }
};

export const insertUser = async (data: UserProps) => {
  try {
    await supabase.from("users").insert({
      email: data.email,
      password: data.password,
      tier: data.tier,
    });
    alert("User inserted successfully!");
  } catch (error) {
    console.log("Error inserting user: ", error);
  }
};
