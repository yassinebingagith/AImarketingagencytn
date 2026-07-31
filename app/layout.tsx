import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Marketing Tunisia — Publicités & contenu créés avec l’IA",
  description:
    "Agence créative à Nabeul. Publicités, UGC et contenu social produits avec l’IA, pensés pour attirer, convaincre et convertir.",
  icons: {
    icon: "/brand/instagram-logo.jpg",
    shortcut: "/brand/instagram-logo.jpg",
  },
  openGraph: {
    title: "AI Marketing Tunisia — Des idées qui arrêtent le scroll",
    description:
      "Publicités IA, UGC et contenu social ancrés dans la culture tunisienne.",
    type: "website",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "AI Marketing Tunisia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Marketing Tunisia — Des pubs IA qui ne ressemblent pas à de l’IA",
    description: "UGC, product ads et contenu localisé depuis Nabeul.",
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
