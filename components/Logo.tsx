import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/logo.png"
        width={100}
        height={100}
        alt="Logo TK Agape"
        className="aspect-square w-16 md:w-24"
      />
    </Link>
  );
}
