"use client";

import { useI18n } from "@/lib/i18n";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const testimonials = [
  {
    quote:
      "Inspecheck ha transformado completamente nuestro proceso de inspección de calidad. La detección automática de defectos nos ahorra horas cada día.",
    name: "María González",
    designation: "Responsable de Calidad - Automotive Industries",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=300&h=300&auto=format&fit=crop",
  },
  {
    quote:
      "La capacidad de configurar flujos de trabajo personalizados para cada tipo de inspección ha sido un cambio radical para nuestra empresa. Altamente recomendable.",
    name: "Carlos Rodríguez",
    designation: "Director de Operaciones - Industrial Manufacturing",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300&h=300&auto=format&fit=crop",
  },
  {
    quote:
      "Con Inspecheck, hemos digitalizado todas nuestras inspecciones de construcción. Los reportes automáticos y la trazabilidad completa nos dan una ventaja competitiva enorme.",
    name: "Ana Martínez",
    designation: "Gerente de Proyectos - Construction Group",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&h=300&auto=format&fit=crop",
  },
];

export function TestimonialsSection() {
  const { t } = useI18n();
  return (
    <section className="py-24 bg-gradient-to-b from-white to-purple-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            {t("testimonials_title")}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {t("testimonials_sub")}
          </p>
        </div>

        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
    </section>
  );
}
