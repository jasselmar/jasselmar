import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jorge Martínez - Software Engineer",
  description: "Mobile & Web Development",
  icons: {
    icon: "/jassel-favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` bg-bone`}>{children}</body>
    </html>
  );
}
