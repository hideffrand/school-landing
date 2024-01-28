import { ReactNode } from "react";
import Sidebar from "./Sidebar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-gray-100 w-full h-screen flex relative">
      <Sidebar />
      <section className="w-full h-full p-4 flex flex-col gap-4 text-dark-green">
        {children}
      </section>
    </div>
  );
}
