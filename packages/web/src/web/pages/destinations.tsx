import { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";
import { ButtonLink, Photo, Reveal, Section } from "../components/site/ui";
import { categories, destinations, type Destination } from "../data/content";
import { useLang } from "../lib/i18n";
import { cn } from "../lib/utils";
import { PageHero } from "./services";

export default function Destinations() {
  const { t } = useLang();
  const [filter, setFilter] = useState<string>("all");
  const [open, setOpen] = useState<Destination | null>(null);

  const list = useMemo(
    () => destinations.filter((d) => filter === "all" || d.tags.includes(filter as Destination["tags"][number])),
    [filter],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <PageHero
        image="/images/hero-destinations.jpg"
        eyebrow={t({ fr: "Destinations", en: "Destinations" })}
        title={t({ fr: "Huit destinations, mille visages de Madagascar", en: "Eight destinations, a thousand faces of Madagascar" })}
        text={t({ fr: "Forêts, baobabs, lagons et hauts plateaux : choisissez les lieux qui correspondent à votre projet.", en: "Forests, baobabs, lagoons and highlands: choose the places that match your project." })}
      />

      <Section>
        <div role="tablist" aria-label={t({ fr: "Filtrer par catégorie", en: "Filter by category" })} className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c.key}
              role="tab"
              aria-selected={filter === c.key}
              onClick={() => setFilter(c.key)}
              className={cn(
                "rounded-full border px-5 py-2 text-sm font-semibold transition-colors",
                filter === c.key ? "border-forest bg-forest text-paper" : "border-line bg-white text-forest hover:border-forest",
              )}
            >
              {t(c.label)}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((d, i) => (
            <Reveal key={d.slug} delay={(i % 3) * 120}>
            <article className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg">
              <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[4/3] lg:aspect-[4/4.2]">
                <Photo src={d.image} alt={d.name} label={{ fr: "Photo à venir", en: "Photo coming soon" }} className="size-full transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-5">
                  <h2 className="text-2xl text-paper">{d.name}</h2>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-ocean">{t(d.region)}</p>
                <p className="mt-3 flex-1 text-[15px] text-muted">{t(d.description)}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {d.activities.slice(0, 2).map((a) => (
                    <span key={a.fr} className="rounded-full bg-sand px-3 py-1 text-xs font-medium text-forest">{t(a)}</span>
                  ))}
                </div>
                <button
                  onClick={() => setOpen(d)}
                  className="mt-6 inline-flex w-fit items-center rounded-full border border-forest px-5 py-2.5 text-sm font-semibold text-forest transition-colors hover:bg-forest hover:text-paper"
                >
                  {t({ fr: "Découvrir cette destination", en: "Discover this destination" })}
                </button>
              </div>
            </article>
            </Reveal>
          ))}
        </div>
        {list.length === 0 && <p className="mt-10 text-muted">{t({ fr: "Aucune destination dans cette catégorie.", en: "No destination in this category." })}</p>}
      </Section>

      {open && (
        <div className="fixed inset-0 z-[60] flex items-end justify-center bg-forest/70 p-0 backdrop-blur-sm sm:items-center sm:p-6" onClick={() => setOpen(null)}>
          <div role="dialog" aria-modal="true" aria-labelledby="dest-title" className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-2xl bg-paper shadow-2xl sm:rounded-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-[16/9]">
              <Photo src={open.image} alt={open.name} label={{ fr: "Photo à venir", en: "Photo coming soon" }} className="size-full" />
              <button onClick={() => setOpen(null)} aria-label={t({ fr: "Fermer", en: "Close" })} className="absolute right-4 top-4 inline-flex size-10 items-center justify-center rounded-full bg-paper/90 text-forest">
                <X className="size-5" />
              </button>
            </div>
            <div className="p-7 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-ocean">{t(open.region)}</p>
              <h2 id="dest-title" className="mt-2 text-4xl text-forest">{open.name}</h2>
              <p className="mt-4 text-lg text-muted">{t(open.description)}</p>
              <h3 className="mt-8 text-sm font-bold uppercase tracking-widest text-forest">{t({ fr: "Activités possibles", en: "Possible activities" })}</h3>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {open.activities.map((a) => (
                  <li key={a.fr} className="rounded-lg bg-white px-4 py-3 text-[15px] text-ink shadow-sm">{t(a)}</li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink to={`/contact?destination=${open.slug}`}>{t({ fr: "Demander un devis pour cette destination", en: "Request a quote for this destination" })}</ButtonLink>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
