"use client";
import { ClipboardCheck, Eye, Layout, Shield, Zap, Users } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const features = [
  {
    icon: ClipboardCheck,
    titleKey: "feature_forms_title",
    descKey: "feature_forms_desc",
  },
  {
    icon: Eye,
    titleKey: "feature_ai_title",
    descKey: "feature_ai_desc",
  },
  {
    icon: Layout,
    titleKey: "feature_workflows_title",
    descKey: "feature_workflows_desc",
  },
  {
    icon: Shield,
    titleKey: "feature_quality_title",
    descKey: "feature_quality_desc",
  },
  {
    icon: Zap,
    titleKey: "feature_time_title",
    descKey: "feature_time_desc",
  },
  {
    icon: Users,
    titleKey: "feature_permissions_title",
    descKey: "feature_permissions_desc",
  },
];

export function FeaturesSection() {
  const { t } = useI18n();
  return (
    <section className="py-18 bg-gradient-to-b from-white to-purple-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            {t("features_title")}{" "}
            <span className="text-[#a78bfa]">Inspecheck</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {t("features_subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#a78bfa]/30 group"
              >
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#a78bfa] transition-colors duration-300">
                  <Icon className="h-7 w-7 text-[#a78bfa] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(feature.descKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
