import Link from "next/link";

export default function ContactButton() {
  return (
    <button className="bg-white border border-dark-green text-dark-green py-2 px-4 rounded-full">
      <Link href="https://wa.me/6281234329249" target="_blank">Hubungi Kami</Link>
    </button>
  );
}
