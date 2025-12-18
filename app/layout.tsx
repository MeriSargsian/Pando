import type { Metadata } from "next";
import "../style.css";

export const metadata: Metadata = {
  title: "Pando Populus | Community Resilience Platform",
  description: "Environmental & social resilience intelligence for resilient neighborhoods.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
