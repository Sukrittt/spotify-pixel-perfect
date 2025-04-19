"use client";
import Link from "next/link";
import Image from "next/image";
import { Search } from "./search";
import { Bell } from "lucide-react";

export const Navbar = () => {
  return (
    <div className="relative flex items-center justify-between py-2 pr-2 pl-[19px]">
      <Image src="/logo.png" alt="logo" width={50} height={50} />

      <div className="absolute left-[32%] flex items-center gap-x-2">
        <Link
          href="/"
          className="flex h-12 w-14 items-center justify-center rounded-full bg-[#202020] transition hover:scale-105"
        >
          <Image src="/home2-new.png" alt="home" width={26} height={26} />
        </Link>

        <Search />
      </div>

      <div className="flex items-center gap-x-10">
        <div className="flex cursor-pointer items-center gap-x-2 transition duration-100 hover:scale-105">
          <Image
            src="/down-arrow.png"
            alt="home"
            width={19}
            height={19}
            className="rounded-full"
          />

          <span className="text-sm font-medium text-[#B3B3B3]">
            Install App
          </span>
        </div>

        <div className="flex items-center gap-x-6">
          <Bell className="h-4.5 w-4.5 text-[#B3B3B3]" />

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#202020]">
            <Image
              src="/personal.png"
              alt="personal"
              height={30}
              width={30}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
