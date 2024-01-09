import Header from "@comp/header/header";
import Footer from "@comp/footer/footer";
import { Anton } from "@next/font/google";
import { metadata as meta } from "@/config/metadata";
import "./globals.css";

export const metadata = meta;

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={anton.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
