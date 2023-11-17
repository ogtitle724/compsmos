export const metadata = {
  metadataBase: new URL(process.env.URL),
  title: {
    template: `%s | ${process.env.TITLE}`,
    default: process.env.TITLE,
  },
  description: process.env.DESCRIPTION,
  alternates: {
    canonical: "/",
    languages: {
      "ko-KR": "/ko-KR",
      "en-US": "/en-US",
    },
  },
  openGraph: {
    title: process.env.TITLE,
    description: process.env.DESCRIPTION,
    url: "/",
    siteName: process.env.SITENAME,
    images: [
      {
        url: process.env.LOGO_URL,
        width: 800,
        height: 600,
        alt: `${process.env.TITLE} logo image`,
      },
      {
        url: process.env.LOGO_URL,
        width: 1800,
        height: 1600,
        alt: `${process.env.TITLE} logo image`,
      },
    ],
    locale: ["en-US", "ko-KR"],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: process.env.TITLE,
    description: process.env.DESCRIPTION,
    images: [process.env.LOGO_URL],
  },
  generator: "Next.js",
  applicationName: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: ["Next.js", "React", "JavaScript"],
  authors: [{ name: "WJ.J" }],
  creator: "Wonje Jang",
  publisher: "Wonje Jang",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};