"use client";

import { Mail, Globe } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { locale } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-[#a78bfa] mb-4">
              Inspecheck
            </h3>
            <p className="text-gray-400">
              {locale === "es"
                ? "Transformando la inspección de viviendas con inteligencia artificial"
                : "Transforming home inspections with artificial intelligence"}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">
              {locale === "es" ? "Enlaces" : "Links"}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#features"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {locale === "es" ? "Características" : "Features"}
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {locale === "es" ? "Cómo Funciona" : "How It Works"}
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {locale === "es" ? "Testimonios" : "Testimonials"}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">
              {locale === "es" ? "Contacto" : "Contact"}
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:info@inspecheck.com"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
                info@inspecheck.com
              </a>
              <div className="flex items-center gap-2 text-gray-400">
                <Globe className="h-5 w-5" />
                {locale === "es" ? "Global" : "Worldwide"}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            © {year} Inspecheck.{" "}
            {locale === "es"
              ? "Todos los derechos reservados."
              : "All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
}
