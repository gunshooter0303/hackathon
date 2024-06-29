"use client";

import Image from "next/image";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import ThemeToggle from "./ThemeToggle";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="z-50 flex items-center justify-around p-2 h-auto border-b border-border w-full top-0 sticky bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center gap-x-7">
        <Link href={"/"} className="flex items-center">
          <Image
            src="/logo.svg"
            alt="logo"
            className="dark:invert h-7 rotate-180"
            width={100}
            height={24}
            priority
          />
          <p className="-m-6 font-bold pr-3">SWPF</p>
        </Link>
        <div className="flex gap-x-2 text-gray-400  ">
          <Link
            href={"/"}
            className={cn("", { "text-white": pathname === "/" })}
          >
            Home
          </Link>
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Home</Link>
        </div>
      </div>
      <div className="flex gap-x-2">
        <Input placeholder="Search...?" />
        <Avatar>
          <AvatarImage src="/ulogo.png" />
          <AvatarFallback>SK</AvatarFallback>
        </Avatar>
        <ThemeToggle />
      </div>
    </nav>
  );
}
