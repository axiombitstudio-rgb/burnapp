import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Burn — Say what you could never say",
  description:
    "Type it. A stranger reads it for ten seconds. Then it's gone forever.",
  openGraph: {
    title: "Burn",
    description:
      "Say what you could never say. A stranger holds it for ten seconds. Then it's gone.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-bg">{children}</body>
    </html>
  );
}
