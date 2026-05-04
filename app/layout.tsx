import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PetraNova Energy",
  description: "Immersive 3D scroll experience for next-gen oil infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
