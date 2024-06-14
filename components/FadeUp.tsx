'use client';

import React, { useRef } from 'react';
import { motion, useInView, cubicBezier } from 'framer-motion';

const ease = cubicBezier(0.645, 0.045, 0.355, 1);
const duration = 1;

const fadeUpVariants = {
  in: { opacity: 1, y: '0%', transition: { ease, duration } },
  out: { opacity: 0, y: '2rem', transition: { ease, duration } },
};

export default function FadeUp({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '0px 0px -100px 0px', once: true });

  return (
    <motion.div ref={ref} variants={fadeUpVariants} initial="out" animate={isInView ? 'in' : 'out'}>
      {children}
    </motion.div>
  );
}
