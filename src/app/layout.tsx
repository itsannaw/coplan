import type { Metadata } from "next";
import "./globals.css";
import { work_sans } from "../ui/fonts";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Coplan",
  description: "A simple, free, and open-source task manager.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className={`${work_sans.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}