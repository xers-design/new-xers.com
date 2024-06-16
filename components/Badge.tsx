"use client";

import { motion } from "framer-motion";

export default function Badge({ image }: { image: string }) {
  return (
    <div className="relative w-full h-full">
      <motion.img
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
        src={image}
        alt="Xers Product Design Agency Badge"
        className="w-full h-full"
      />
      <img
        src="/images/badge-xers.svg"
        alt="Xers"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] aspect-[4.13/1]"
      />
    </div>
  );
}
