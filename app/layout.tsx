import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { seoKeywords } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://berlo.fr"),
  title: "Berlo — Consultant IoT, Cloud & Industrie 4.0 dans les Hauts-de-France",
  description:
    "Conseil IoT, Digital Twin, dashboards, capteurs et cloud pour améliorer la visibilité terrain, la performance et le pilotage des PME industrielles.",
  keywords: seoKeywords,
  openGraph: {
    title: "Berlo — Consultant IoT, Cloud & Industrie 4.0",
    description:
      "Diagnostic IoT, POC connecté, supervision industrielle et trajectoire Industrie 4.0 pour PME, énergie et bâtiments techniques.",
    url: "https://berlo.fr",
    siteName: "Berlo",
    locale: "fr_FR",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="fr">
      <body>
        <a
          href="#contenu-principal"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-blue-700 focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Aller au contenu
        </a>
        {children}
      </body>
    </html>
  );
}
