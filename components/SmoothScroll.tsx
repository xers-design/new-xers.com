"use client";

import React, { createContext, useContext, useRef, useCallback } from "react";
import { ReactLenis } from "lenis/react";

type SmoothScrollContextType = {
  startScroll: () => void;
  stopScroll: () => void;
};

const SmoothScrollContext = createContext<SmoothScrollContextType | null>(null);

export const useSmoothScroll = () => {
  const context = useContext(SmoothScrollContext);
  if (!context) {
    throw new Error(
      "useSmoothScroll must be used within a SmoothScrollProvider",
    );
  }
  return context;
};

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<any>(null);

  const startScroll = useCallback(() => {
    lenisRef.current?.lenis?.start();
  }, []);

  const stopScroll = useCallback(() => {
    lenisRef.current?.lenis?.stop();
  }, []);

  return (
    <SmoothScrollContext.Provider value={{ startScroll, stopScroll }}>
      <ReactLenis ref={lenisRef} root options={{ duration: 0.8 }}>
        {children}
      </ReactLenis>
    </SmoothScrollContext.Provider>
  );
}
