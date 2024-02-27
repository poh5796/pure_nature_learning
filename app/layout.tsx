import { Quicksand } from "next/font/google";
import "./globals.css";

import Footer from "./_components/footer";
import Navbar from "./_components/navbar";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata = {
  title: "朴乐自然学习 | Pure Nature Learning",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
      </head>
      <body className={`${quicksand.className} bg-neutral-100 antialiased`}>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}

//can add global components here e.g. navbar and footer
