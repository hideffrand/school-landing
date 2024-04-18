"use client";

import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function BackButton() {
  return (
    <Link href="/dashboard" className="flex items-center justify-center">
      <IoMdArrowRoundBack />
    </Link>
  );
}
