import { SubmitButton } from "./submit-button";
import { login } from "@/libs/supabase/auth";
import { supabase } from "@/libs/supabase/init";
import { redirect } from "next/navigation";
import Logo from "@/components/Logo";

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  // const logIn = async (formData: FormData) => {
  //   const email = formData.get("email") as string;
  //   const password = formData.get("password") as string;

  //   const { error } = await supabase.auth.signInWithPassword({
  //     email,
  //     password,
  //   });

  //   if (error) {
  //     console.log(error);
  //     return redirect("/login?message=Username or password invalid");
  //   }

  //   return redirect("/dashboard");
  // };

  return (
    <div className="flex flex-col w-full h-screen px-8 mt-12 items-center gap-12">
      <Logo />
      <form action={login} className="flex flex-col">
        <label className="text-md" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="email"
          placeholder="you@example.com"
          required
        />
        <label className="text-md" htmlFor="password">
          Password
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <SubmitButton
          formAction={login}
          className="bg-dark-green rounded-md px-4 py-2 text-white mb-2 hover:bg-super-dark-green"
          pendingText="Signing In..."
        >
          Login
        </SubmitButton>
        {searchParams?.message && (
          <p className="mt-4 p-4 bg-foreground/10 text-red-500 text-center">
            {searchParams.message}
          </p>
        )}
      </form>
    </div>
  );
}
