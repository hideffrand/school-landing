import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/logo.png"
        width={400}
        height={400}
        alt="Logo TK Agape"
        className="aspect-square w-24"
      />
    </Link>
  );
}
