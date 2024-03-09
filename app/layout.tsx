import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Bubbly Baker",
  description: "My amazing recipe app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let header = (
    <header className="top-0 -mb-3 py-5 w-full mx-auto px-4 md:px-10 flex gap-10 justify-between items-center">
      <Link href={"/"}>
        <h1>The blog</h1>
      </Link>
    </header>
  );

  let footer = (
    <footer className="px-10 border-t border-t-zinc-500 py-10 dark:border-zinc-700/40 flex items-center justify-between">
      <p>Some information or copyright 2024 &copy;</p>
    </footer>
  );
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* {header}
        <div className="flex w-full overflow-hidden">{children}</div>

        {footer} */}
        <>
          <div className="fixed flex justify-center sm:px-8">
            <div className="flex w-full max-w-7xl">
              <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
            </div>
          </div>
          <div className="relative flex w-full flex-col max-w-7xl mx-auto">
            {header}
            {children}
            {footer}
          </div>
        </>
      </body>
    </html>
  );
}
