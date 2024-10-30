import type { Metadata } from "next";
import "./globals.css";
import { Lprops } from "@/types";
export const metadata: Metadata = {
  title: "Acorn Taxis | 01827 63333",
  description:
    "Tamworths largest transport provider. Book by phone, online or via our app",
};

export default function RootLayout({ children }: Lprops) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
