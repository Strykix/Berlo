import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useCases } from "@/data/site";
import GlassCard from "@/components/GlassCard";
import SectionHeading from "@/components/SectionHeading";

export default function UseCases() {
  return (
    <section id="cas-usage" className="section-shell py-16">
      <SectionHeading
        eyebrow="Applications"
        title="Cas d'usage"
        description="Des cas concrets pour bâtiments techniques, énergie, industrie et maintenance, avec un objectif commun : rendre les données terrain actionnables."
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {useCases.map((useCase) => {
          const Icon = useCase.icon;
          return (
            <GlassCard key={useCase.title} as="article" className="p-3">
              <div className="relative h-44 overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
                <Image
                  src={useCase.image}
                  alt={`${useCase.title} - ${useCase.description}`}
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/5 to-transparent" />
                <div className="absolute bottom-4 left-4 grid h-12 w-12 place-items-center rounded-lg border border-white/30 bg-white/85 text-blue-700 backdrop-blur-xl">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="absolute bottom-4 right-4 grid h-10 w-10 place-items-center rounded-full border border-white/30 bg-white/85 backdrop-blur-xl">
                  <ArrowRight className="h-4 w-4 text-blue-700" />
                </span>
              </div>
              <div className="p-3">
                <h3 className="mt-2 text-xl font-semibold text-slate-950">{useCase.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{useCase.description}</p>
                <p className="mt-5 rounded-lg border border-blue-100 bg-blue-50 p-4 text-sm leading-6 text-slate-700">{useCase.impact}</p>
              </div>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}
