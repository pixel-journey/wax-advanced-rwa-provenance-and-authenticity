import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'The last name, or not',
  description: 'bob matches a list that ends in bob. alice does not. History is not walked.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
