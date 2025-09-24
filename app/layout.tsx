import type { Metadata } from "next";
import { Poppins, Faster_One } from "next/font/google";
import "./globals.css";
import Providers from "./provider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600"], // normal + semi-bold
});

const fasterOne = Faster_One({
  variable: "--font-faster-one",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Lion Cubs Fitness",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "shortcut icon", url: "/favicon.ico" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${fasterOne.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
