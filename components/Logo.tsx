import Link from "next/link";

type LogoProps = {
  compact?: boolean;
};

export default function Logo({ compact = false }: LogoProps) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="Berlo, accueil">
      <span className="grid h-10 w-10 place-items-center rounded-md border border-slate-300 bg-white text-lg font-black text-slate-950 shadow-sm transition group-hover:border-blue-600 group-hover:text-blue-700">
        B
      </span>
      <span className={compact ? "text-2xl font-black text-slate-950" : "text-3xl font-black text-slate-950"}>
        Berlo
      </span>
      <span className="sr-only">Berlo</span>
    </Link>
  );
}
