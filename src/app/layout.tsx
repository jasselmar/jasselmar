import type { Metadata } from "next";
import "./globals.css";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Jorge Martínez - Software Engineer | Mobile & Web Development",
    description: "Jorge Martínez is a software engineer specializing in mobile and web development.",
    openGraph: {
      title: "Jorge Martínez - Software Engineer | Mobile & Web Development",
      description: "Jorge Martínez is a software engineer specializing in mobile and web development. ",
      url: "https://jorgemar.me",
      siteName: "Jorge Martínez",
      locale: "en_US",
      type: "website",
    },
    icons: {
      icon: "/jassel-favicon.png",
    },
  };
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
