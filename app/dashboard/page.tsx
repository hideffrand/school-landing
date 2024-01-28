import { redirect } from "next/navigation";
import Image from "next/image";
import Layout from "./components/Layout";

export default function Dashboard() {
  return (
    <Layout>
      <div className="h-full w-full bg-white rounded-xl px-6 py-4 border flex items-center justify-center">
        <Image
          src="/vectors/Usability-testing-bro.png"
          width={400}
          height={400}
          alt="Hero Image"
        />
      </div>
    </Layout>
  );
}
