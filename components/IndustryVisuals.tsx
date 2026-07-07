import Image from "next/image";
import { industryVisuals } from "@/data/site";
import GlassCard from "@/components/GlassCard";
import SectionHeading from "@/components/SectionHeading";

export default function IndustryVisuals() {
  return (
    <section className="section-shell py-16">
      <SectionHeading
        eyebrow="Terrain"
        title="Des environnements industriels rendus visibles"
        description="Berlo relie équipements, capteurs et données critiques dans des contextes concrets : production, énergie, bâtiments techniques et maintenance."
      />
      <div className="grid gap-4 lg:grid-cols-3">
        {industryVisuals.map((visual) => (
          <GlassCard key={visual.title} as="article" className="group min-h-[360px] p-3">
            <div className="relative h-72 overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
              <Image
                src={visual.image}
                alt={`${visual.title} - ${visual.description}`}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/15 to-transparent" />
              <div className="absolute inset-x-4 bottom-4">
                <p className="text-xs font-semibold uppercase text-blue-100">{visual.eyebrow}</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{visual.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-100/80">{visual.description}</p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
