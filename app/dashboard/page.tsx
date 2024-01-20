import { redirect } from "next/navigation";
import Sidebar from "./Sidebar";

export default function Dashboard() {
  const isAdmin: boolean = true;

  if (!isAdmin) {
    redirect("/login");
  }
  return (
    <div>
      <Sidebar />
    </div>
  );
}
