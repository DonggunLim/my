import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DarkModeProvider from "@/context/DarkModeContext";
import { Header } from "@/components";
import SWRConfigContext from "@/context/SWRConfigContext";
import styles from "./page.module.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[color:var(--color-bg)]">
      <DarkModeProvider>
        <body className={inter.className}>
          <SWRConfigContext>
            <main className="max-w-5xl mx-auto">{children}</main>
          </SWRConfigContext>
          <div id="portal" />
        </body>
      </DarkModeProvider>
    </html>
  );
}
