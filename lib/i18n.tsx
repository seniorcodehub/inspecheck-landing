"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type Locale = "es" | "en";

type Dictionary = Record<string, string>;

const dictionaries: Record<Locale, Dictionary> = {
  es: {
    nav_features: "Características",
    nav_how: "Cómo funciona",
    nav_testimonials: "Testimonios",
    nav_get_started: "Empezar",

    hero_title_1: "Plataforma de IA para la",
    hero_title_2: "Inspección Inteligente",
    hero_desc:
      "Revoluciona la gestión de calidad en automoción, industria y construcción. Digitaliza inspecciones, detecta defectos automáticamente con IA y automatiza tus flujos de trabajo.",
    hero_cta_primary: "Empezar",
    hero_cta_secondary: "Ver demo",

    features_title: "Características",
    features_subtitle:
      "Potencia tus inspecciones con inteligencia artificial",

    feature_forms_title: "Formularios Digitales Inteligentes",
    feature_forms_desc:
      "Transforma inspecciones en papel en checklists digitales inteligentes y personalizables para cualquier tipo de trabajo.",

    feature_ai_title: "Detección de Defectos con IA",
    feature_ai_desc:
      "Identificación automática de defectos mediante visión artificial. Detecta arañazos, abolladuras, corrosión y más.",

    feature_workflows_title: "Flujos de Trabajo Configurables",
    feature_workflows_desc:
      "Adaptable a cualquier sector: automoción, industria, construcción, logística y más. Totalmente personalizable.",

    feature_quality_title: "Garantía de Calidad",
    feature_quality_desc:
      "Asegura estándares de calidad consistentes en todas tus inspecciones. Registros objetivos e inmutables.",

    feature_time_title: "90% Reducción de Tiempo",
    feature_time_desc:
      "Los procesos automatizados eliminan el papeleo manual y reducen el tiempo de inspección drásticamente.",

    feature_permissions_title: "Permisos Granulares",
    feature_permissions_desc:
      "Control de acceso por site, cliente y tipo de trabajo. Mantén tus datos seguros y accesibles solo para personal autorizado.",

    how_title: "Cómo funciona",
    how_subtitle: "Tres simples pasos para transformar tus inspecciones",

    how_step1_title: "Configurar",
    how_step1_desc:
      "Configura formularios de inspección personalizados según tus necesidades específicas.",

    how_step2_title: "Inspeccionar",
    how_step2_desc:
      "Realiza inspecciones con asistencia de IA y checklists inteligentes en tu dispositivo móvil.",

    how_step3_title: "Reportar",
    how_step3_desc:
      "Documentación automática y reportes de calidad generados instantáneamente.",

    stats_title: "Resultados Reales,",
    stats_title_highlight: "Impacto Real",
    stats_subtitle: "Descubre cómo Inspecheck transforma inspecciones",

    stat1_value: "90%",
    stat1_label: "Reducción de Tiempo",
    stat1_desc: "En procesos de inspección",

    stat2_value: "100%",
    stat2_label: "Transformación Digital",
    stat2_desc: "De inspecciones físicas",

    stat3_value: "Todos",
    stat3_label: "Los Sectores",
    stat3_desc: "Automoción, industria, construcción...",

    testimonial_placeholder:
      "Tu testimonio aparecerá aquí una vez empieces a usar Inspecheck.",
    testimonial_author: "Responsable de Calidad",
    testimonial_company: "Empresa Industrial",

    testimonials_title: "Lo que dicen nuestros clientes",
    testimonials_sub:
      "Únete a empresas que transforman sus inspecciones con Inspecheck",

    cta_title: "¿Listo para transformar tus inspecciones?",
    cta_sub:
      "Únete al futuro de la gestión de calidad. Empieza a automatizar hoy y experimenta el poder de las inspecciones inteligentes con IA.",
    cta_primary: "Empieza gratis",
    cta_secondary: "Agenda una demo",
    cta_note: "Sin tarjeta • Prueba gratis 14 días • Cancela cuando quieras",

    footer_tagline:
      "Revolucionando la gestión de calidad con inspecciones inteligentes impulsadas por IA. Automatiza, digitaliza y optimiza tus procesos de inspección.",
  },
  en: {
    nav_features: "Features",
    nav_how: "How It Works",
    nav_testimonials: "Testimonials",
    nav_get_started: "Get Started",

    hero_title_1: "AI Platform for",
    hero_title_2: "Intelligent Inspection",
    hero_desc:
      "Revolutionize quality management in automotive, industrial and construction sectors. Digitize inspections, automatically detect defects with AI and automate your workflows.",
    hero_cta_primary: "Get Started",
    hero_cta_secondary: "Watch Demo",

    features_title: "Features",
    features_subtitle:
      "Power your inspections with artificial intelligence",

    feature_forms_title: "Smart Digital Forms",
    feature_forms_desc:
      "Transform paper inspections into intelligent, customizable digital checklists for any type of work.",

    feature_ai_title: "AI-Powered Defect Detection",
    feature_ai_desc:
      "Automatic defect identification with computer vision. Detect scratches, dents, corrosion and more.",

    feature_workflows_title: "Configurable Workflows",
    feature_workflows_desc:
      "Adaptable to any sector: automotive, industrial, construction, logistics and more. Fully customizable.",

    feature_quality_title: "Quality Assurance",
    feature_quality_desc:
      "Ensure consistent quality standards across all your inspections. Objective and immutable records.",

    feature_time_title: "90% Time Reduction",
    feature_time_desc:
      "Automated processes eliminate manual paperwork and drastically reduce inspection time.",

    feature_permissions_title: "Granular Permissions",
    feature_permissions_desc:
      "Access control by site, client and work type. Keep your data secure and accessible only to authorized personnel.",

    how_title: "How It Works",
    how_subtitle: "Three simple steps to transform your inspections",

    how_step1_title: "Configure",
    how_step1_desc:
      "Set up custom inspection forms according to your specific needs.",

    how_step2_title: "Inspect",
    how_step2_desc:
      "Perform inspections with AI assistance and smart checklists on your mobile device.",

    how_step3_title: "Report",
    how_step3_desc:
      "Automatic documentation and quality reports generated instantly.",

    stats_title: "Real Results,",
    stats_title_highlight: "Real Impact",
    stats_subtitle: "See how Inspecheck transforms inspections",

    stat1_value: "90%",
    stat1_label: "Time Reduction",
    stat1_desc: "In inspection processes",

    stat2_value: "100%",
    stat2_label: "Digital Transformation",
    stat2_desc: "Of physical inspections",

    stat3_value: "All",
    stat3_label: "Industries",
    stat3_desc: "Automotive, industrial, construction...",

    testimonial_placeholder:
      "Your testimonial will appear here once you start using Inspecheck.",
    testimonial_author: "Quality Manager",
    testimonial_company: "Industrial Company",

    testimonials_title: "What Our Clients Say",
    testimonials_sub:
      "Join companies transforming their inspections with Inspecheck",

    cta_title: "Ready to Transform Your Inspections?",
    cta_sub:
      "Join the future of quality management. Start automating today and experience the power of AI-driven intelligent inspections.",
    cta_primary: "Get Started Free",
    cta_secondary: "Schedule a Demo",
    cta_note: "No credit card required • Free 14-day trial • Cancel anytime",

    footer_tagline:
      "Revolutionizing quality management with AI-powered intelligent inspections. Automate, digitize and optimize your inspection processes.",
  },
};

type I18nContextValue = {
  locale: Locale;
  t: (key: string) => string;
  toggle: () => void;
  setLocale: (l: Locale) => void;
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("es");

  const t = useCallback(
    (key: string) => {
      const dict = dictionaries[locale];
      return dict[key] ?? key;
    },
    [locale]
  );

  const toggle = useCallback(() => {
    setLocale((l) => (l === "es" ? "en" : "es"));
  }, []);

  const value = useMemo(
    () => ({ locale, t, toggle, setLocale }),
    [locale, t, toggle]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

