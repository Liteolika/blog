import { Inter } from "next/font/google";
import "./globals.css";
import SiteData from "@/sitedata";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: SiteData.title,
  description: SiteData.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
          <div className="flex flex-col h-screen justify-between">
            <Header />
            <div className="mb-auto container flex flex-col justify-between mx-auto py-4 px-8">{children}</div>
            <Footer />
          </div>
        </>
      </body>
    </html>
  );
}
