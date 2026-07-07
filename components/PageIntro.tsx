type PageIntroProps = {
  title: string;
  description: string;
};

export default function PageIntro({ title, description }: PageIntroProps) {
  return (
    <section className="section-shell pb-6 pt-16">
      <p className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
        berlo.fr
      </p>
      <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-slate-950 md:text-6xl">{title}</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{description}</p>
    </section>
  );
}
