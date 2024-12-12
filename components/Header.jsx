"use client";

import { usePathname } from "next/navigation";
import Avatar from "./Avatar";
import Navbar from "./Navbar";
import SignInAndOut from "./SignIn";
import GithubIcon from "@/public/icons/GithubIcon";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();
  const page = pathname.split("/").slice(0, 2).join("/");

  return (
    <header className="grid w-full grid-flow-col grid-cols-3 sm:grid-cols-4">
      <Avatar page={page} />

      {/* 传递完整路由参数，区分不同的子路由 */}
      <Navbar page={pathname} />

      <div className="flex items-center justify-end gap-2">
        <Link
          href="https://github.com/Ctianyang"
          target="_blank"
          className="opacity-80 hover:opacity-100"
        >
          <GithubIcon />
        </Link>
        {/* <SignInAndOut pathname={pathname} /> */}
      </div>
    </header>
  );
}
