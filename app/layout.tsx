import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ContactModalProvider } from "@/components/ui/contact-modal";
import { I18nProvider } from "@/lib/i18n";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Inspecheck - Plataforma de IA para Inspección Inteligente",
  description:
    "Plataforma de Inteligencia Artificial diseñada para revolucionar la gestión de calidad. Digitalizamos inspecciones físicas con IA, automatizando la detección de defectos para automoción, industria, construcción y más.",
  keywords: [
    "IA",
    "inspección",
    "calidad",
    "automoción",
    "industrial",
    "detección de defectos",
    "visión artificial",
    "formularios digitales",
  ],
  openGraph: {
    title: "Inspecheck - Plataforma de IA para Inspección Inteligente",
    description:
      "Revoluciona la gestión de calidad con IA. Inspecciones digitales inteligentes para cualquier sector.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${manrope.variable} antialiased`}>
        <I18nProvider>
          <ContactModalProvider>{children}</ContactModalProvider>
        </I18nProvider>
      </body>
    </html>
  );
}

