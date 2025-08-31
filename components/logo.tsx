"use client";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm text-black px-2 py-1 relative z-20"
    >
      <Image
        src="/logo.png"
        alt="logo"
        width={150}
        height={75}
        className="h-6 w-auto md:h-8 dark:invert dark:brightness-200"
      />
    </Link>
  );
};
