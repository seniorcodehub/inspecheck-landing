"use client";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Button } from "@/components/ui/button";
import { useContactModal } from "@/components/ui/contact-modal";
import { useI18n } from "@/lib/i18n";

export function HeroSection() {
  const contact = useContactModal();
  const { t } = useI18n();
  return (
    <section className="bg-white pt-16">
      <ContainerScroll
        titleComponent={
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              {t("hero_title_1")} <br />
              <span className="text-[#a78bfa]">{t("hero_title_2")}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              {t("hero_desc")}
            </p>
            <div className="flex justify-center items-center pt-4">
              <Button
                size="lg"
                className="bg-[#a78bfa] hover:bg-[#8b5cf6] text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                onClick={() => contact.open()}
              >
                {t("hero_cta_primary")}
              </Button>
            </div>
          </div>
        }
      >
        <div className="relative w-full h-full flex items-center justify-center bg-black">
          <iframe
            className="absolute inset-0 w-full h-full border-0"
            src="https://streamable.com/e/24t7sr"
            title="Inspecheck Demo Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ objectFit: "cover" }}
          />
        </div>
      </ContainerScroll>
    </section>
  );
}
