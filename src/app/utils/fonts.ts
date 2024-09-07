import { Lato } from "next/font/google";
import localFont from "next/font/local";

export const lato = Lato({
    subsets: ["latin"],
    weight: "400"
  })
  
  export const circularBlack = localFont({
    src: "../../../public/fonts/circular-std-black.ttf",
    variable: "--font-circular-black",
    weight: "900",
  });
  
  export const circularBold = localFont({
    src: "../../../public/fonts/circular-std-bold.ttf",
    variable: "--font-circular-bold",
    weight: "700",
  });
  
  export const circular = localFont({
    src: "../../../public/fonts/circular-std-medium.ttf",
    variable: "--font-circular",
    weight: "500",
  });