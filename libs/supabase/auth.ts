import { supabase } from "./init";

export const signIn = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error == null && data) {
      document.cookie = `cookie-secret=${process.env.NEXT_PUBLIC_COOKIE_SECRET}; path=/`;
    }
    return error ? error : data;
  } catch (error) {
    console.log("Error sign in user: ", error);
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
