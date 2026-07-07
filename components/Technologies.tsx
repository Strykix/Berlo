import { partnerTechnologies, technologies } from "@/data/site";
import SectionHeading from "@/components/SectionHeading";

export default function Technologies() {
  return (
    <section id="technologies" className="section-shell py-16">
      <SectionHeading
        eyebrow="Stack"
        title="Technologies terrain, plateformes IoT et Industrie 4.0"
        description="Berlo ne pousse pas une technologie unique. L'approche consiste à choisir la solution la plus simple et robuste selon le terrain, les données disponibles, le niveau de criticité et la trajectoire Industrie 4.0 visée."
      />
      <div className="mb-12 grid gap-4 md:grid-cols-2">
        {partnerTechnologies.map((group) => {
          const Icon = group.icon;
          return (
            <article key={group.category} className="glass-panel rounded-lg p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-blue-50 text-blue-700">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-semibold text-slate-950">{group.category}</h3>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">{group.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {technologies.map((technology) => {
          const Icon = technology.icon;
          return (
            <div key={technology.label} className="glass-panel flex items-center gap-3 rounded-lg px-4 py-4">
              <Icon className="h-5 w-5 text-blue-700" />
              <span className="font-medium text-slate-700">{technology.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
