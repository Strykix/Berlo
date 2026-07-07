type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-8 max-w-3xl">
      {eyebrow ? (
        <p className="mb-3 text-xs font-bold uppercase text-blue-700">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">{description}</p> : null}
    </div>
  );
}
