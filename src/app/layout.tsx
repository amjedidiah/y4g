import { inter, montserrat } from "@/lib/fonts";
import "@/globals.css";
import { PropsWithChildren } from "react";
import Header from "@/components/layout/header";

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} font-inter`}
    >
      <body>
        <Header />
        <main className="mt-20">{children}</main>
      </body>
    </html>
  );
}
