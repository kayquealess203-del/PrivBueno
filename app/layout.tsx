import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PrivBueno — by Clara Bueno",
  description: "Meu lado privado começa aqui. Conteúdo exclusivo e momentos reservados com Clara Bueno.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="antialiased">{children}</body>
    </html>
  );
}
