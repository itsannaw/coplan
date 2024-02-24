import type { Metadata } from "next";
import "./globals.css";
import { work_sans } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${work_sans.className} antialiased`}>{children}</body>
    </html>
  );
}
