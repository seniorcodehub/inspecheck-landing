"use client";

import { useI18n } from "@/lib/i18n";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const testimonials = [
  {
    quote:
      "La detección automática de defectos con IA de Inspecheck ha transformado nuestro control de calidad en la línea de producción. La precisión y velocidad en la identificación de defectos nos permite mantener los más altos estándares.",
    name: "Ford",
    designation: "Automotive Manufacturing - En negociación",
    src: "https://www.ford.mx/content/ford/mx/es_mx/home/blog/legado/historia-logotipo-ovalo-emblema-abr2021/jcr:content/par/common_box_1334742855/generalParsys/splitter/splitter1/image/image.imgs.480.high.jpg/1618412054951.jpg",
  },
  {
    quote:
      "Buscamos soluciones innovadoras que optimicen nuestros procesos de inspección y garanticen la máxima calidad. La capacidad de Inspecheck para adaptarse a nuestros flujos de trabajo específicos es impresionante.",
    name: "SEAT",
    designation: "Automotive Industry - En negociación",
    src: "https://www.brandemia.org/wp-content/uploads/2012/10/logo_principal_seat.jpg",
  },
  {
    quote:
      "Inspecheck ha digitalizado nuestros procesos de control de calidad en la fabricación de productos concentrados profesionales. Los flujos de trabajo personalizables nos permiten mantener los más altos estándares en cada lote de producción.",
    name: "DUMOX PRO",
    designation: "Productos Concentrados Profesionales - Sector Hotelero",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6SR7L6sWmj_r4L7IalbbJCJAS7X6o35bksAlUpt1Vxnpyt_EmnufnRimkJQx6FlBFGZk&usqp=CAU",
  },
];

export function TestimonialsSection() {
  const { t } = useI18n();
  return (
    <section className="pt-24 bg-gradient-to-b from-white to-purple-50/30">
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
