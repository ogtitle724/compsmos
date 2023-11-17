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
        <main>{children}</main>
        <Footer />
        <Script
          type="module"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
        />
        <Script
          nomodule
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
        />
      </body>
    </html>
  );
}
