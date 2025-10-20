"use client";
import { Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const footerLinks = {
  product: [
    { name: "Features", nameEs: "Características", href: "#features" },
    { name: "How It Works", nameEs: "Cómo funciona", href: "#how-it-works" },
    { name: "Pricing", nameEs: "Precios", href: "#pricing" },
    { name: "FAQ", nameEs: "FAQ", href: "#faq" },
  ],
  company: [
    { name: "About Us", nameEs: "Nosotros", href: "#about" },
    { name: "Careers", nameEs: "Carreras", href: "#careers" },
    { name: "Blog", nameEs: "Blog", href: "#blog" },
    { name: "Contact", nameEs: "Contacto", href: "#contact" },
  ],
  legal: [
    {
      name: "Privacy Policy",
      nameEs: "Política de Privacidad",
      href: "#privacy",
    },
    {
      name: "Terms of Service",
      nameEs: "Términos de Servicio",
      href: "#terms",
    },
    { name: "Cookie Policy", nameEs: "Política de Cookies", href: "#cookies" },
    { name: "Security", nameEs: "Seguridad", href: "#security" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export function Footer() {
  const { t, locale } = useI18n();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-[#a78bfa] rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">I</span>
              </div>
              <span className="ml-3 text-white text-2xl font-bold">
                Inspecheck
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {t("footer_tagline")}
            </p>
            <div className="flex items-center text-gray-400">
              <Mail className="h-5 w-5 mr-2 text-[#a78bfa]" />
              <a
                href="mailto:info@inspecheck.com"
                className="hover:text-[#a78bfa] transition-colors"
              >
                info@inspecheck.com
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              {locale === "es" ? "Producto" : "Product"}
            </h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#a78bfa] transition-colors"
                  >
                    {locale === "es" ? link.nameEs : link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              {locale === "es" ? "Empresa" : "Company"}
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#a78bfa] transition-colors"
                    onClick={(e) => {
                      if (
                        link.name === "Contact" ||
                        link.nameEs === "Contacto"
                      ) {
                        e.preventDefault();
                        import("@/components/ui/contact-modal").then((m) =>
                          m.useContactModal().open()
                        );
                      }
                    }}
                  >
                    {locale === "es" ? link.nameEs : link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              {locale === "es" ? "Legal" : "Legal"}
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#a78bfa] transition-colors"
                  >
                    {locale === "es" ? link.nameEs : link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Inspecheck.{" "}
              {locale === "es"
                ? "Todos los derechos reservados."
                : "All rights reserved."}
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#a78bfa] transition-colors group"
                  >
                    <Icon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
