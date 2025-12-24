import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import "./globals.scss";

// BelyDisplay for main hero headings
const belyDisplay = localFont({
  src: [
    {
      path: "../../public/assets/fonts/BelyDisplay.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--tp-ff-bely",
});

// NexaBold for all headings
const nexaBold = localFont({
  src: [
    {
      path: "../../public/assets/fonts/NexaBold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--tp-ff-heading",
});

// NexaLight for body text, paragraphs, lists
const nexaLight = localFont({
  src: [
    {
      path: "../../public/assets/fonts/NexaLight.otf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--tp-ff-body",
});

// Keep gallery font if you're using it somewhere
const gallery = localFont({
  src: [
    {
      path: "../../public/assets/fonts/BelyDisplay.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--tp-ff-gallery",
});

export const metadata: Metadata = {
  title: "Glazed Designs",
  description: "Professional Web Design and Development Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        id="body"
        suppressHydrationWarning={true}
        className={`${belyDisplay.variable} ${nexaBold.variable} ${nexaLight.variable} ${gallery.variable}`}
      >
        <ThemeProvider defaultTheme="light">{children}</ThemeProvider>
      </body>
    </html>
  );
}