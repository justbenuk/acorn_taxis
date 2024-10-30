import type { Metadata } from "next";
import { Lprops } from "@/types";
import Providers from "@/utils/provider";
import GlobalTopbar from "@/components/global-topbar";
import GlobalHeader from "@/components/global-header";
export const metadata: Metadata = {
  title: "Acorn Taxis | 01827 63333",
  description:
    "Tamworths largest transport provider. Book by phone, online or via our app",
};

export default function RootLayout({ children }: Lprops) {
  return (
    <Providers>
      <main className="min-screen flex flex-col justify-between">
        <div>
          <GlobalTopbar />
          <GlobalHeader />
        </div>
        <div>{children}</div>
        <div></div>
      </main>
    </Providers>
  );
}
