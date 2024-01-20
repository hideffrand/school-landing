import Link from "next/link";

export default function CTAButton() {
  return (
    <Link
      href="/pendaftaran"
      className="bg-dark-green text-white py-2 px-4 rounded-full"
    >
      Daftar Sekarang
    </Link>
  );
}
