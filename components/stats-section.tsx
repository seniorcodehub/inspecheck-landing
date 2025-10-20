"use client";
import { Clock, CheckCircle2, Building2, Quote } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const stats = [
  {
    icon: Clock,
    valueKey: "stat1_value",
    labelKey: "stat1_label",
    descKey: "stat1_desc",
  },
  {
    icon: CheckCircle2,
    valueKey: "stat2_value",
    labelKey: "stat2_label",
    descKey: "stat2_desc",
  },
  {
    icon: Building2,
    valueKey: "stat3_value",
    labelKey: "stat3_label",
    descKey: "stat3_desc",
  },
];

export function StatsSection() {
  const { t } = useI18n();
  return (
    <section className="py-24 bg-gradient-to-b from-purple-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              {t("stats_title")}{" "}
              <span className="text-[#a78bfa]">
                {t("stats_title_highlight")}
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              {t("stats_subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-purple-100 text-center group hover:border-[#a78bfa]"
                >
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#a78bfa] transition-colors duration-300">
                    <Icon className="h-8 w-8 text-[#a78bfa] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="text-5xl md:text-6xl font-bold text-[#a78bfa] mb-2">
                    {t(stat.valueKey)}
                  </div>
                  <div className="text-xl font-bold text-gray-900 mb-2">
                    {t(stat.labelKey)}
                  </div>
                  <p className="text-gray-600">{t(stat.descKey)}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Testimonials Placeholder */}
        <div className="bg-gradient-to-br from-[#a78bfa] to-purple-600 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="max-w-3xl mx-auto text-center">
            <Quote className="h-12 w-12 text-white/80 mx-auto mb-6" />
            <blockquote className="text-xl md:text-2xl text-white font-medium mb-6 leading-relaxed">
              &ldquo;{t("testimonial_placeholder")}&rdquo;
            </blockquote>
            <div className="text-white/90">
              <div className="font-bold text-lg">{t("testimonial_author")}</div>
              <div className="text-white/70">{t("testimonial_company")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
