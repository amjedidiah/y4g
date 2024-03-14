import { inter } from "@/lib/fonts";
import "@/globals.css";
import { PropsWithChildren } from "react";

// TODO
// export const metadata: Metadata = {
//   title: "",
//   description: "",
// };

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en" className={`${inter.variable} font-inter`}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
