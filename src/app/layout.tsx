import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://previsios.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "PREVISIOS - Gestão Inteligente de Saneamento",
    template: "%s | PREVISIOS",
  },
  description:
    "Sistema de gestão de dados e gerenciamento para empresas de saneamento com Machine Learning. Preveja gastos, monitore reservatórios e otimize operações.",
  keywords: [
    "saneamento",
    "gestão de água",
    "machine learning",
    "previsão",
    "bombas de água",
    "reservatório",
    "gestão hídrica",
    "inteligência artificial",
    "monitoramento de reservatórios",
  ],
  authors: [{ name: "PREVISIOS" }],
  creator: "PREVISIOS",
  publisher: "PREVISIOS",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PREVISIOS - Gestão Inteligente de Saneamento",
    description:
      "Sistema de gestão de dados e gerenciamento para empresas de saneamento com Machine Learning. Preveja gastos, monitore reservatórios e otimize operações.",
    url: SITE_URL,
    siteName: "PREVISIOS",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PREVISIOS - Gestão Inteligente de Saneamento",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PREVISIOS - Gestão Inteligente de Saneamento",
    description:
      "Sistema de gestão de dados e gerenciamento para empresas de saneamento com Machine Learning.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
