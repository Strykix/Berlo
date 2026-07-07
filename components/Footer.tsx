import { navigation } from "@/data/site";
import Logo from "@/components/Logo";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="section-shell pb-10 pt-8">
      <div className="rounded-lg border border-slate-200 bg-white px-5 py-6 shadow-sm">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <Logo />
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-600">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-slate-950">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <p className="mt-5 text-sm text-slate-500">
          © 2026 Berlo. Conseil IoT, cloud, data et supervision industrielle dans les Hauts-de-France.
        </p>
      </div>
    </footer>
  );
}
