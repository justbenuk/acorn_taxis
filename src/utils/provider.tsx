"use client";
import { NextUIProvider } from "@nextui-org/react";
import { Lprops } from "@/types";
export default function Providers({ children }: Lprops) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
