"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { MobileMenu } from "./MobileMenu";

export const navigationItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Project",
    href: "/project",
  },
  // {
  //   name: "Message",
  //   href: "/message",
  // },
];

export default function Navbar({ page }) {
  return (
    <>
      <div className="justify-center hidden col-span-2 mt-0.5 sm:flex h-14">
        <ul className="items-center justify-center hidden bg-[#f2f2f21a] rounded-full sm:flex px-2 py-1 ">
          {navigationItems.map((item) => {
            const isSelected = page == item.href;
            return (
              <motion.li key={item.name} className="relative">
                {isSelected && (
                  <>
                    <motion.div
                      className="absolute left-1/4 w-1/2 mx-auto border-t-[3px] rounded-full shadow-[0_20px_100px_8px_#fff]"
                      layoutId="selected"
                    ></motion.div>
                    <motion.div
                      className="absolute top-0.5 bottom-0.5 w-full bg-[#f2f2f20d] rounded-full"
                      layoutId="selecteddiv"
                    ></motion.div>
                  </>
                )}
                <Link href={item.href}>
                  <motion.div
                    whileHover={{
                      backgroundColor: "#f2f2f20d",
                    }}
                    className={`px-4 py-3 rounded-full ${item.name != "Home" && item.name != "Blog" && item.name != "About" ? "tracking-tight" : "tracking-widest"} font-bold text-sm`}
                  >
                    {item.name}
                  </motion.div>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </div>

      <div className="flex items-center justify-center sm:hidden">
        <MobileMenu />
      </div>
    </>
  );
}
