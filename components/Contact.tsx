import { Mail, Phone } from "lucide-react";
import { contactDetails, needTypes } from "@/data/site";
import GlassCard from "@/components/GlassCard";
import SectionHeading from "@/components/SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="section-shell grid gap-6 py-16 lg:grid-cols-[.85fr_1.15fr]">
      <div>
        <SectionHeading
          eyebrow="Contact"
          title="Demander un diagnostic IoT"
          description="Décrivez votre contexte terrain, vos équipements critiques et le résultat attendu. Berlo vous répond avec un premier angle de diagnostic pragmatique."
        />
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href={contactDetails.mailto} className="inline-flex items-center gap-3 rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:border-blue-200 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
            <Mail className="h-4 w-4 text-blue-700" />
            {contactDetails.email}
          </a>
          <a href={contactDetails.phoneHref} className="inline-flex items-center gap-3 rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:border-blue-200 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
            <Phone className="h-4 w-4 text-blue-700" />
            {contactDetails.phoneDisplay}
          </a>
        </div>
      </div>

      <GlassCard className="p-5 md:p-7">
        <form action={contactDetails.mailto} method="post" encType="text/plain" className="grid gap-4" aria-label="Formulaire de demande de diagnostic IoT">
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Nom" name="name" autoComplete="name" />
            <Field label="Entreprise" name="company" autoComplete="organization" />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Email" name="email" type="email" autoComplete="email" />
            <Field label="Téléphone" name="phone" type="tel" autoComplete="tel" />
          </div>
          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Type de besoin
            <select name="needType" className="h-12 rounded-md border border-slate-300 bg-white px-4 text-slate-950 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100">
              {needTypes.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Message
            <textarea
              name="message"
              rows={5}
              placeholder="Décrivez votre équipement, vos données disponibles, vos contraintes ou votre objectif."
              className="resize-none rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </label>
          <button
            type="submit"
            className="mt-2 rounded-md bg-blue-700 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Envoyer la demande
          </button>
        </form>
      </GlassCard>
    </section>
  );
}

function Field({ label, name, type = "text", autoComplete }: { label: string; name: string; type?: string; autoComplete?: string }) {
  return (
    <label className="grid gap-2 text-sm font-medium text-slate-700">
      {label}
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        className="h-12 rounded-md border border-slate-300 bg-white px-4 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      />
    </label>
  );
}
