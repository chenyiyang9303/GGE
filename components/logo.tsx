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
        width={40}
        height={40}
        className="md:w-[50px] md:h-[50px]"
      />
      <span className="font-medium text-black dark:text-white text-sm md:text-base whitespace-nowrap">
        Omven Strategy
      </span>
    </Link>
  );
};
