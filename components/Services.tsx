import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/site";
import GlassCard from "@/components/GlassCard";
import SectionHeading from "@/components/SectionHeading";

export default function Services() {
  return (
    <section id="services" className="section-shell py-16">
      <SectionHeading
        eyebrow="Offres"
        title="Nos services"
        description="Des interventions ciblées pour cadrer, prouver, superviser et industrialiser votre usage de l'IoT industriel."
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <GlassCard key={service.title} as="article" className="flex min-h-[300px] flex-col p-6">
              <div className="mb-6 grid h-14 w-14 place-items-center rounded-lg border border-blue-100 bg-blue-50 text-blue-700">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-slate-950">{service.title}</h3>
              <p className="mt-3 text-sm font-semibold text-blue-700">{service.price}</p>
              <p className="mt-4 flex-1 text-sm leading-6 text-slate-600">{service.description}</p>
              <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                Découvrir
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}
