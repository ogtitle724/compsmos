import Header from "@comp/header/header";
import Footer from "@comp/footer/footer";
import Script from "next/script";
import { metadata as meta } from "@/config/metadata";
import "./globals.css";

export const metadata = meta;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <Script src="/scripts/scrollsmoother.js" />
      </body>
    </html>
  );
}
