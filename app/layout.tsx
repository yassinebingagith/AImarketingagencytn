import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Marketing Tunisia — Publicités vidéo & statiques pensées pour convertir",
  description: "Agence de performance creative en Tunisie. Vidéos publicitaires, UGC en Derja, contenus tendance et static ads créés à partir de votre produit.",
  icons: {
    icon: "/brand/instagram-logo.jpg",
    shortcut: "/brand/instagram-logo.jpg",
  },
  openGraph: {
    title: "AI Marketing Tunisia — Vous envoyez le produit. Nous imaginons la pub.",
    description: "Performance video ads, UGC tunisien et static creatives pour commerces, services et marques e-commerce.",
    type: "website",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "AI Marketing Tunisia performance creative agency" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Marketing Tunisia — Ads that stop the scroll",
    description: "Video and static ad creative built for Tunisian brands.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
