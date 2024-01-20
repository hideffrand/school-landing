import Logo from "@/components/Logo";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="w-full h-screen flex flex-col justify-start pt-20 items-center bg-gray-200">
      <Logo />
      <h1 className="text-2xl py-8 font-bold text-center">Login Admin</h1>
      <form
        action=""
        className="w-80 h-auto border flex flex-col justify-between bg-white shadow-xl p-4 rounded-xl"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            className="border p-2 focus:outline-dark-green"
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            id="password"
            className="border p-2 focus:outline-dark-green"
            required
          />
          <Link href="" className="text-gray-400 underline text-end">Lupa password?</Link>
        </div>
        <button
          type="submit"
          className="mt-8 px-4 py-2 bg-dark-green text-white rounded-lg"
        >
          Login
        </button>
      </form>
    </div>
  );
}
