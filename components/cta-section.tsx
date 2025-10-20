"use client";

import { Button } from "@/components/ui/button";
import { useContactModal } from "@/components/ui/contact-modal";
import { useI18n } from "@/lib/i18n";
import { ArrowRight, Calendar } from "lucide-react";

export function CTASection() {
  const contact = useContactModal();
  const { t } = useI18n();

  return (
    <section className="py-24 bg-gradient-to-b from-purple-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#a78bfa] to-purple-600 rounded-3xl p-8 md:p-16 shadow-2xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              {t("cta_title")}
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              {t("cta_sub")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <Button
                size="lg"
                className="bg-white text-[#a78bfa] hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                onClick={() => contact.open()}
              >
                {t("cta_primary")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-200"
                onClick={() => contact.open()}
              >
                <Calendar className="mr-2 h-5 w-5" />
                {t("cta_secondary")}
              </Button>
            </div>
            <p className="text-sm text-white/70">{t("cta_note")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
