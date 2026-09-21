"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Cpu,
  Gauge,
  Menu,
  Network,
  RadioTower,
  ShieldCheck,
  X,
} from "lucide-react";
import Logo from "@/components/Logo";
import { contactDetails, partnerTechnologies, services, technologies, useCases } from "@/data/site";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Digital Twin", href: "#digital-twin" },
  { label: "Références", href: "#experience" },
  { label: "Cas d'usage", href: "#cas-usage" },
  { label: "Partenaires", href: "#partenaires" },
  { label: "Contact", href: "#contact" }
];

const proofPoints = [
  { label: "Équipements, usages, énergie et flux rendus lisibles", value: "visibilité terrain" },
  { label: "Indicateurs fiables pour décider et prioriser", value: "pilotage data" },
  { label: "POC court avant budget d'industrialisation", value: "valeur mesurée" },
  { label: "Feuille de route réaliste et partenaires au besoin", value: "à votre échelle" }
];

const heroOutcomes = [
  "Identifier les cas d'usage IoT à plus forte valeur",
  "Mesurer les gains potentiels sur un périmètre réduit",
  "Structurer une trajectoire Industrie 4.0 progressive"
];

const conceptCards = [
  {
    title: "Plateforme IoT",
    text: "Elle collecte, structure et historise les données issues des capteurs, automates, gateways, API et systèmes existants.",
    icon: RadioTower
  },
  {
    title: "Digital Twin",
    text: "Il relie les données aux actifs, usages, flux et contextes métier pour donner une lecture commune du terrain.",
    icon: Network
  },
  {
    title: "Industrie 4.0",
    text: "C'est la trajectoire de transformation : mieux mesurer, mieux piloter, automatiser progressivement et passer à l'échelle.",
    icon: Cpu
  }
];

const digitalTwinSteps = [
  {
    title: "Cadrer",
    text: "Identifier les usages métier, les gains attendus, les données disponibles et les priorités de transformation.",
    icon: RadioTower
  },
  {
    title: "Connecter",
    text: "Relier un premier périmètre d'équipements, de capteurs ou de systèmes existants avec une architecture sobre.",
    icon: Network
  },
  {
    title: "Visualiser",
    text: "Transformer les données en indicateurs, tableaux de bord et vues Digital Twin lisibles pour les équipes.",
    icon: BarChart3
  },
  {
    title: "Étendre",
    text: "Mesurer la valeur, sécuriser les choix techniques et préparer un passage à l'échelle avec les bons partenaires.",
    icon: ShieldCheck
  }
];

const stakesItems = [
  {
    title: "Visibilité opérationnelle",
    text: "L'IoT donne une lecture continue des équipements, consommations, usages et flux, au lieu de dépendre de relevés ponctuels ou de fichiers dispersés.",
    icon: RadioTower
  },
  {
    title: "Performance & énergie",
    text: "Les données permettent de comparer des sites, suivre les usages, prioriser les actions et objectiver les gains énergétiques ou opérationnels.",
    icon: Gauge
  },
  {
    title: "Décisions data-driven",
    text: "Les équipes passent d'une intuition à des indicateurs partagés : priorités, investissements, maintenance, énergie et qualité de service.",
    icon: BarChart3
  },
  {
    title: "Transformation progressive",
    text: "Un premier cas d'usage bien cadré devient une base pour standardiser les données, automatiser certains flux et construire une feuille de route Industrie 4.0.",
    icon: ShieldCheck
  }
];

const generatedSlides = [
  {
    title: "Digital Twin terrain",
    description: "Une représentation claire des équipements, usages, flux et données clés.",
    image: "/industry/digital-twin-hero.png",
    alt: "Technicien utilisant une tablette avec une visualisation Digital Twin dans un site industriel"
  },
  {
    title: "Bâtiments techniques",
    description: "CVC, GTB, comptages et locaux techniques rendus plus lisibles par la donnée.",
    image: "/industry/building-technical.jpg",
    alt: "Local technique industriel avec équipements connectés"
  },
  {
    title: "Industrie manufacturière",
    description: "Production, cadence, consommation et indicateurs terrain pour mieux piloter.",
    image: "/industry/industry-manufacturing.jpg",
    alt: "Ligne de production industrielle avec bras robotisé"
  },
  {
    title: "Énergie & photovoltaïque",
    description: "Monitoring énergétique, reporting et comparaison des performances.",
    image: "/industry/energy-photovoltaic.jpg",
    alt: "Installation photovoltaïque et équipements électriques supervisés"
  }
];

const experienceItems = [
  {
    label: "Ressources",
    detail: "Collecte et traitement de données IoT"
  },
  {
    label: "Automobile connectée",
    detail: "Cockpit, Android Auto, agent IA embarqué"
  },
  {
    label: "Aéronautique",
    detail: "Algorithmes, optimisation et données industrielles"
  },
  {
    label: "Énergie & microgrids",
    detail: "Cas d'usage énergie, analyse et cadrage solution"
  },
  {
    label: "Data centers",
    detail: "Innovation, optimisation énergétique et digitalisation"
  },
  {
    label: "Cloud & environnements techniques",
    detail: "Architecture cloud, outillage projet et environnements de test"
  }
];

const methodSteps = [
  "Inventaire des équipements et protocoles",
  "Choix des cas d'usage prioritaires",
  "Connexion d'un premier périmètre",
  "Tableaux de bord et indicateurs métier",
  "Mesure de la valeur et feuille de route"
];

export default function PremiumHome() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f7faff] text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/88 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Logo />

          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-slate-950">
                {item.label}
              </a>
            ))}
          </div>

          <a
            href={contactDetails.calendlyDiagnostic} target="_blank" rel="noopener noreferrer"
            className="hidden rounded-md bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 lg:inline-flex"
          >
            Réserver un diagnostic 30 min
          </a>

          <button
            type="button"
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((value) => !value)}
            className="grid h-11 w-11 place-items-center rounded-md border border-slate-200 bg-white text-slate-900 lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {mobileOpen ? (
          <div className="border-t border-slate-200 bg-white px-5 py-4 lg:hidden">
            <div className="mx-auto grid max-w-7xl gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-slate-200 bg-[linear-gradient(110deg,#ffffff_0%,#f7fbff_54%,#eef6ff_100%)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_24%,rgba(14,116,220,.10),transparent_29rem),radial-gradient(circle_at_88%_10%,rgba(15,23,42,.08),transparent_28rem)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-center lg:py-24">
            <div>
              <p className="text-xs font-bold uppercase text-blue-700">
                Conseil indépendant en IoT industriel & Digital Twin
              </p>
              <h1 className="mt-6 max-w-4xl text-5xl font-semibold text-slate-950 sm:text-6xl lg:text-7xl">
                Vos outils et palettes se perdent encore dans l&apos;atelier ?
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                On localise un premier périmètre en 30 jours — pas un projet de 18 mois.
              </p>
              <div className="mt-7 grid gap-3 sm:max-w-2xl">
                {heroOutcomes.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm font-semibold text-slate-800">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={contactDetails.calendlyDiagnostic} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-700 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  Réserver un diagnostic 30 min
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#digital-twin"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-sm transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Voir l&apos;approche de mission
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <p className="mt-3 text-sm text-slate-500">30 min, un flux réel de votre site  — zéro engagement.</p>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_28px_80px_rgba(15,23,42,.16)]">
                <Image
                  src="/industry/digital-twin-hero.png"
                  alt="Technicien utilisant une tablette avec une visualisation Digital Twin dans un site industriel"
                  width={1792}
                  height={1024}
                  priority
                  className="aspect-[1.08/1] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 right-8 hidden w-60 rounded-lg border border-slate-200 bg-white p-4 shadow-xl shadow-slate-950/10 sm:block">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <Cpu className="h-4 w-4 text-blue-600" />
                  Mission type
                </div>
                <p className="mt-2 text-sm font-medium leading-6 text-slate-700">
                  Cadrage des usages, POC mesurable, architecture cible et feuille de route adaptée à votre maturité.
                </p>
              </div>
            </div>
          </div>

          <div className="relative border-t border-slate-200/80 bg-white/78">
            <div className="mx-auto grid max-w-7xl gap-px px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
              {proofPoints.map((item) => (
                <div key={item.label} className="py-5 lg:py-6">
                  <p className="text-sm font-semibold text-slate-950">{item.value}</p>
                  <p className="mt-1 text-sm text-slate-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="partenaires" className="relative border-t border-slate-200/80 bg-white">
            <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase text-blue-700">Technologies partenaires</p>
                  <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">
                    Les écosystèmes sur lesquels Berlo peut s&apos;intégrer.
                  </h2>
                </div>
                <p className="max-w-xl text-sm leading-6 text-slate-500">
                  Le choix technologique vient après la valeur recherchée : visibilité, performance, énergie, qualité de service, automatisation ou passage à l&apos;échelle.
                </p>
              </div>

              <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {partnerTechnologies.map((group) => {
                  const Icon = group.icon;
                  return (
                    <article key={group.category} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                      <div className="flex items-center gap-3">
                        <span className="grid h-10 w-10 place-items-center rounded-lg bg-white text-blue-700 shadow-sm">
                          <Icon className="h-5 w-5" />
                        </span>
                        <h3 className="text-base font-semibold text-slate-950">{group.category}</h3>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span key={item} className="rounded-md border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700">
                            {item}
                          </span>
                        ))}
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-slate-950 py-16 text-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
              <div>
                <p className="text-xs font-bold uppercase text-blue-300">Pourquoi l&apos;IoT</p>
                <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                  L&apos;IoT devient utile quand il améliore le pilotage.
                </h2>
                <p className="mt-5 text-base leading-7 text-slate-300">
                  Capteurs, automates, plateformes IoT et Digital Twin n&apos;ont de sens que s&apos;ils rendent l&apos;organisation plus efficace : meilleure visibilité, décisions plus rapides, gains énergétiques et trajectoire de transformation maîtrisée.
                </p>
              </div>

              <div className="grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 md:grid-cols-2">
                {stakesItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <article key={item.title} className="bg-slate-950 p-6">
                      <Icon className="h-6 w-6 text-blue-300" />
                      <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-300">{item.text}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="border-b border-slate-200 bg-white py-12">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xs font-bold uppercase text-blue-700">Ils nous ont fait confiance</p>
                <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">
                  Des clients et environnements exigeants.
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-slate-500">
                Des organisations industrielles, énergie et infrastructures nous ont confié des sujets où la donnée devait devenir fiable, traçable et exploitable par les équipes.
              </p>
            </div>

            <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
              {experienceItems.map((item) => (
                <div key={item.label} className="bg-white p-6">
                  <h3 className="text-xl font-semibold text-slate-950">{item.label}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="digital-twin" className="border-b border-slate-200 bg-[#f8fbff] py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <div>
                <p className="text-xs font-bold uppercase text-blue-700">Digital Twin pragmatique</p>
                <h2 className="mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">
                  Donner un contexte métier aux données terrain.
                </h2>
                <p className="mt-5 text-base leading-7 text-slate-600">
                  Une plateforme IoT collecte les données. Le Digital Twin les organise autour des équipements, usages, flux et indicateurs métier. L&apos;Industrie 4.0 consiste ensuite à utiliser ce socle pour piloter, optimiser et automatiser progressivement.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-3">
                {conceptCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <article key={card.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                      <Icon className="h-6 w-6 text-blue-700" />
                      <h3 className="mt-5 text-lg font-semibold text-slate-950">{card.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{card.text}</p>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="mt-12 grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
              <div>
              <p className="text-xs font-bold uppercase text-blue-700">Digital Twin pragmatique</p>
              <h3 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">
                Un jumeau numérique simple, lisible, orienté valeur métier.
              </h3>
              <p className="mt-5 text-base leading-7 text-slate-600">
                Pas une maquette spectaculaire. Un modèle opérationnel qui relie actifs, données et indicateurs pour mieux comprendre les usages, comparer les performances et prioriser les prochaines actions.
              </p>
            </div>

              <div className="grid gap-4 sm:grid-cols-2">
              {digitalTwinSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <article key={step.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                    <Icon className="h-6 w-6 text-blue-700" />
                    <h3 className="mt-5 text-xl font-semibold text-slate-950">{step.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{step.text}</p>
                  </article>
                );
              })}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xs font-bold uppercase text-blue-700">Terrain en images</p>
                <h2 className="mt-4 max-w-3xl text-4xl font-semibold text-slate-950 sm:text-5xl">
                  Des environnements où l&apos;IoT crée de la visibilité.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-slate-600">
                Production, énergie, bâtiments techniques : le travail commence par connecter les bonnes données pour mieux comprendre, comparer et piloter.
              </p>
            </div>

            <div className="mt-12 overflow-hidden rounded-lg border border-slate-200 bg-slate-200 shadow-sm">
              <div className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {generatedSlides.map((slide, index) => {
                  const previousIndex = index === 0 ? generatedSlides.length - 1 : index - 1;
                  const nextIndex = index === generatedSlides.length - 1 ? 0 : index + 1;
                  return (
                    <article
                      id={`terrain-slide-${index + 1}`}
                      key={slide.title}
                      className="grid min-w-full snap-start gap-px bg-slate-200 lg:grid-cols-[1.08fr_0.62fr]"
                    >
                      <div className="relative min-h-[320px] bg-slate-100 sm:min-h-[460px]">
                        <Image
                          src={slide.image}
                          alt={slide.alt}
                          fill
                          sizes="(min-width: 1024px) 65vw, 100vw"
                          className="object-cover"
                        />
                      </div>

                      <div className="flex min-h-[320px] flex-col justify-between bg-[#f8fbff] p-6">
                        <div>
                          <p className="text-sm font-semibold text-blue-700">
                            {index + 1} / {generatedSlides.length}
                          </p>
                          <h3 className="mt-5 text-3xl font-semibold text-slate-950">{slide.title}</h3>
                          <p className="mt-4 text-base leading-7 text-slate-600">{slide.description}</p>
                        </div>

                        <div className="mt-10">
                          <div className="flex items-center gap-3">
                            <a
                              href={`#terrain-slide-${previousIndex + 1}`}
                              aria-label="Image précédente"
                              className="grid h-11 w-11 place-items-center rounded-md border border-slate-300 bg-white text-slate-950 transition hover:border-blue-200 hover:text-blue-700"
                            >
                              <ChevronLeft className="h-5 w-5" />
                            </a>
                            <a
                              href={`#terrain-slide-${nextIndex + 1}`}
                              aria-label="Image suivante"
                              className="grid h-11 w-11 place-items-center rounded-md border border-slate-300 bg-white text-slate-950 transition hover:border-blue-200 hover:text-blue-700"
                            >
                              <ChevronRight className="h-5 w-5" />
                            </a>
                          </div>

                          <div className="mt-6 flex gap-2">
                            {generatedSlides.map((dotSlide, dotIndex) => (
                              <a
                                key={dotSlide.title}
                                href={`#terrain-slide-${dotIndex + 1}`}
                                aria-label={`Afficher ${dotSlide.title}`}
                                className={dotIndex === index ? "h-2.5 w-8 rounded-full bg-blue-700 transition" : "h-2.5 w-2.5 rounded-full bg-slate-300 transition hover:bg-slate-400"}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="border-b border-slate-200 bg-white py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold uppercase text-blue-700">Services</p>
              <h2 className="mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">
                Des missions courtes pour transformer un intérêt IoT en valeur mesurable.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-600">
                L&apos;objectif n&apos;est pas de déployer de la technologie pour elle-même. Il s&apos;agit d&apos;identifier les meilleurs cas d&apos;usage, connecter un premier périmètre et mesurer ce que l&apos;IoT apporte réellement.
              </p>
            </div>

            <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200 lg:grid-cols-4">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Link key={service.title} href="#contact" className="group bg-white p-6 transition hover:bg-slate-50">
                    <span className="grid h-11 w-11 place-items-center rounded-lg bg-blue-50 text-blue-700">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-6 text-lg font-semibold text-slate-950">{service.title}</h3>
                    <p className="mt-3 min-h-[96px] text-sm leading-6 text-slate-600">{service.description}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
                      En savoir plus
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section id="cas-usage" className="border-b border-slate-200 bg-[#f8fbff] py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xs font-bold uppercase text-blue-700">Cas d&apos;usage</p>
                <h2 className="mt-4 max-w-3xl text-4xl font-semibold text-slate-950 sm:text-5xl">
                  Des cas d&apos;usage où l&apos;IoT apporte un bénéfice concret.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-slate-600">
                Bâtiments techniques, production, énergie, maintenance : la valeur vient de la donnée qui aide à comparer, automatiser, optimiser ou mieux investir.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {useCases.slice(0, 6).map((useCase) => (
                <article key={useCase.title} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
                  <div className="relative h-44">
                    <Image src={useCase.image} alt="" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-slate-950">{useCase.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{useCase.description}</p>
                    <p className="mt-4 text-sm font-medium leading-6 text-slate-800">{useCase.impact}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="rounded-lg border border-slate-200 bg-slate-950 p-8 text-white sm:p-10 lg:p-12">
              <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
                <div>
                  <p className="text-xs font-bold uppercase text-blue-300">Méthode</p>
                  <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
                    Partir des usages, mesurer la valeur, étendre ensuite.
                  </h2>
                  <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
                    Une approche volontairement resserrée pour rester compatible avec une PME : cas d&apos;usage priorisés, architecture sobre, POC mesurable et feuille de route réaliste.
                  </p>
                </div>
                <div className="grid gap-3">
                  {methodSteps.map((step, index) => (
                    <div key={step} className="flex items-center gap-4 border-b border-white/10 pb-3 last:border-0 last:pb-0">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/10 text-sm font-semibold">
                        {index + 1}
                      </span>
                      <span className="text-lg font-medium">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase text-blue-700">Technologies</p>
                <h2 className="mt-4 text-3xl font-semibold text-slate-950">
                  Des technologies choisies pour durer sur le terrain.
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {technologies.slice(0, 12).map((tech) => (
                  <span key={tech.label} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
                    {tech.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[#eef6ff] py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-10 rounded-lg border border-blue-100 bg-white p-8 shadow-sm sm:p-10 lg:grid-cols-[1fr_0.8fr] lg:p-12">
              <div>
                <p className="text-xs font-bold uppercase text-blue-700">Diagnostic</p>
                <h2 className="mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">
                  Commençons par vos usages, vos données et les gains attendus.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
                  En 30 minutes, on clarifie les objectifs métier, les équipements concernés, les données disponibles, les contraintes techniques et le premier cas d&apos;usage IoT à tester.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={contactDetails.calendlyDiagnostic} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-700 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800"
                  >
                    Réserver un diagnostic 30 min
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a href={contactDetails.phoneHref} className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-950">
                    Appeler Berlo
                  </a>
                </div>
                <div className="mt-5 flex flex-col gap-2 text-sm font-medium text-slate-600 sm:flex-row sm:gap-5">
                  <a href={contactDetails.mailto} className="transition hover:text-blue-700">
                    {contactDetails.email}
                  </a>
                  <a href={contactDetails.phoneHref} className="transition hover:text-blue-700">
                    {contactDetails.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="grid content-start gap-4 rounded-lg bg-slate-50 p-6">
                {["Cas d'usage à valeur métier", "Données disponibles et sources à connecter", "Gains attendus et indicateurs de succès", "Contraintes réseau, sécurité et exploitation"].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                    <span className="text-sm font-medium leading-6 text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
