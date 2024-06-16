import { stagger } from "framer-motion";
import type { AnimationSequence, Segment } from "framer-motion";
import { SPRING_IN, SPRING_OUT } from "@/lib/animations/constants";

const getOpenState = (selector: string, options: any): Segment => {
  return [selector, { scale: 1, opacity: 1 }, { ...SPRING_IN, ...options }];
};
const getCloseState = (selector: string): Segment => {
  return [selector, { scale: 0.5, opacity: 0 }, { ...SPRING_OUT, at: "<" }];
};

export const openSequence: AnimationSequence = [
  [".menu", { opacity: 1, pointerEvents: "all" }, { ...SPRING_IN }],
  getOpenState(".menu_close-icon", { at: "<" }),
  getCloseState(".menu_open-icon"),
  getOpenState(".menu_container", { at: "<" }),
  getOpenState(".menu_logo", { at: "-0.2" }),
  getOpenState(".menu_link", { delay: stagger(0.05), at: "<" }),
  getOpenState(".menu_image", { at: "<" }),
  getOpenState(".menu_image-description", { at: "<" }),
  getOpenState(".social-icon", { delay: stagger(0.05), at: "-0.2" }),
];
export const closeSequence: AnimationSequence = [
  getCloseState(".menu_container"),
  getCloseState(".menu_logo"),
  getCloseState(".menu_link"),
  getCloseState(".menu_image"),
  getCloseState(".menu_image-description"),
  getCloseState(".social-icon"),
  getCloseState(".menu_close-icon"),
  getOpenState(".menu_open-icon", { at: "<" }),
  [".menu", { opacity: 0, pointerEvents: "none" }, { ...SPRING_OUT, at: "<" }],
];
