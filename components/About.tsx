import { aboutStrengths } from "@/data/site";
import GlassCard from "@/components/GlassCard";
import SectionHeading from "@/components/SectionHeading";

export default function About() {
  return (
    <section id="a-propos" className="section-shell grid gap-6 py-16 lg:grid-cols-[.95fr_1.05fr]">
      <SectionHeading
        eyebrow="À propos"
        title="Un profil hybride entre terrain, cloud et data"
        description="Berlo est porté par Loïc Berger, profil hybride cloud, IoT, digital twin et software engineering. L'approche consiste à partir d'un problème terrain concret : une panne coûteuse, une donnée relevée à la main, une consommation mal comprise ou un équipement critique non supervisé."
      />
      <GlassCard className="p-6 md:p-8">
        <p className="text-xl leading-8 text-slate-800">
          L&apos;objectif n&apos;est pas de déployer de la technologie pour la technologie, mais de créer rapidement une preuve de valeur mesurable.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {aboutStrengths.map((strength) => (
            <div key={strength} className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-semibold text-slate-700">
              {strength}
            </div>
          ))}
        </div>
      </GlassCard>
    </section>
  );
}
