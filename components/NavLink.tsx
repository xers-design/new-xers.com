import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { twMerge as twm } from "tailwind-merge";
import { motion } from "framer-motion";

const xersIn = { type: "spring", bounce: 0.2, duration: 0.4 };
const xersOut = { type: "spring", bounce: 0, duration: 0.4 };

type NavLinkProps = {
  path: { label: string; to: string };
  handleClick: () => void;
};

const parentVariants = {
  hoverIn: { color: "#3e8dff" },
  hoverOut: { color: "#ffffff" },
};

const bgVariants = {
  hoverIn: { width: "100%", transition: xersIn },
  hoverOut: { width: "0%", transition: xersOut },
};

export default function NavLink({ handleClick, path }: NavLinkProps) {
  const [isHover, setIsHover] = useState(false);
  const pathname = usePathname();

  return (
    <Link onClick={handleClick} href={path.to}>
      <motion.div
        className={twm(
          "menu_link relative pt-1 sm:pt-[0.63rem] pb-[0.63rem] sm:pb-4 sm:pl-10 pl-6 origin-left",
          pathname === path.to ? "text-xers-blue" : "text-white",
        )}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        variants={parentVariants}
        initial={pathname === path.to ? "hoverIn" : "hoverOut"}
        animate={isHover || pathname === path.to ? "hoverIn" : "hoverOut"}
      >
        <motion.div
          className="absolute inset-0 w-full h-full bg-white sm:rounded-tr-[0.25rem] sm:rounded-br-[0.25rem]"
          variants={bgVariants}
        />
        <div className="origin-top-left relative text-[3.75rem] sm:text-[4.8rem] font-medium leading-[1.1] -tracking-[0.15rem] sm:-tracking-[0.23rem]">
          {path.label}
        </div>
      </motion.div>
    </Link>
  );
}
