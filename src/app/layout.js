import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata = {
  title: "Samir Meglaoui",
  description: "Building solutions one line of code at a time. Passionate about tech, innovation, and continuous learning.",
  openGraph: {
    title: 'Samir Meglaoui',
    description: "Building solutions one line of code at a time. Passionate about tech, innovation, and continuous learning.",
    url: 'https://megsamir.vercel.app/',
    siteName: 'Samir Meglaoui',
    images: [
      {
        url: 'https://megsamir.vercel.app/public/samirlogo.jpg',
  width: 800,
        height: 600,
      },
      {
        url: 'https://megsamir.vercel.app/public/samirlogo.jpg',
        width: 1800,
        height: 1600,
        alt: 'Samir Meglaoui',
      },
    ],
    locale: 'en_EN',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 text-white antialiased font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
