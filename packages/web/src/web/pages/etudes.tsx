import { Check, Compass, Bus, MessageSquare, Route, Microscope, Landmark, Users } from "lucide-react";
import { ButtonLink, Eyebrow, Photo, Provisional, Reveal, Section, SectionHeading } from "../components/site/ui";
import { destinations } from "../data/content";
import { useLang } from "../lib/i18n";
import { PageHero } from "./services";

const objectives = [
  { icon: Microscope, fr: "Observer la biodiversité et les écosystèmes en conditions réelles.", en: "Observe biodiversity and ecosystems in real conditions." },
  { icon: Landmark, fr: "Relier l'histoire, la géographie et la culture aux lieux visités.", en: "Connect history, geography and culture to the places visited." },
  { icon: Users, fr: "Favoriser les échanges et la rencontre avec les communautés locales.", en: "Encourage exchanges and meetings with local communities." },
  { icon: Route, fr: "Développer l'autonomie et l'esprit d'observation des participants.", en: "Develop participants' autonomy and sense of observation." },
];

const studyDestinations = destinations.filter((d) => d.tags.includes("etudes"));

const programme = [
  {
    day: { fr: "Jour 1", en: "Day 1" },
    title: { fr: "Antananarivo → Antsirabe", en: "Antananarivo → Antsirabe" },
    points: { fr: "Route vers les Hautes Terres, visite des lacs de cratère et découverte de l'artisanat local.", en: "Drive to the Highlands, visit of the crater lakes and discovery of local craftsmanship." },
  },
  {
    day: { fr: "Jour 2", en: "Day 2" },
    title: { fr: "Antsirabe → Andasibe", en: "Antsirabe → Andasibe" },
    points: { fr: "Transfert vers l'est, arrivée en fin de journée et premier atelier sur la forêt tropicale.", en: "Transfer to the east, arrival late in the day and first workshop on rainforest ecology." },
  },
  {
    day: { fr: "Jour 3", en: "Day 3" },
    title: { fr: "Andasibe : forêt et lémuriens", en: "Andasibe: forest and lemurs" },
    points: { fr: "Sortie matinale pour observer les indris, randonnée guidée et travail de terrain en groupe.", en: "Early outing to observe indri lemurs, guided hike and group fieldwork." },
  },
  {
    day: { fr: "Jour 4", en: "Day 4" },
    title: { fr: "Andasibe → Antananarivo", en: "Andasibe → Antananarivo" },
    points: { fr: "Restitution des observations, bilan pédagogique et retour vers la capitale.", en: "Debrief of observations, educational review and return to the capital." },
  },
];

export default function Etudes() {
  const { t } = useLang();
  return (
    <>
      <PageHero
        image="/images/hero-etudes.jpg"
        eyebrow={t({ fr: "Voyages d'études", en: "Study trips" })}
        title={t({ fr: "Apprendre à Madagascar, sur le terrain", en: "Learning in Madagascar, in the field" })}
        text={t({
          fr: "Un service dédié aux écoles, lycées, universités et centres de formation : objectifs pédagogiques, logistique et accompagnement complets.",
          en: "A service for schools, high schools, universities and training centres: learning goals, logistics and full support.",
        })}
      />

      {/* Field photos */}
      <Section className="pb-0 md:pb-0">
        <div className="grid gap-6 md:grid-cols-5">
          <Reveal className="md:col-span-3">
            <img src="/images/svc-etudes.jpg" alt={t({ fr: "Élèves en sortie pédagogique sur un sentier", en: "Students on an educational outing on a path" })} loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover shadow-lg" />
          </Reveal>
          <Reveal delay={150} className="md:col-span-2">
            <img src="/images/svc-excursion.jpg" alt={t({ fr: "Groupe en randonnée pendant une excursion", en: "Group hiking during an excursion" })} loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover shadow-lg md:aspect-auto md:h-full" />
          </Reveal>
        </div>
      </Section>

      {/* Objectives */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading eyebrow={t({ fr: "Objectifs pédagogiques", en: "Learning goals" })} title={t({ fr: "Des sorties qui servent le programme", en: "Trips that serve the curriculum" })} />
            <p className="mt-5 text-lg text-muted">
              {t({
                fr: "Nous travaillons avec les enseignants pour aligner chaque visite sur les objectifs de leur programme : sciences naturelles, géologie, géographie, histoire ou langues.",
                en: "We work with teachers to align each visit with their curriculum goals: natural sciences, geology, geography, history or languages.",
              })}
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {objectives.map((o) => (
              <div key={o.fr} className="rounded-xl border border-line bg-white p-6">
                <o.icon className="size-6 text-ocean" />
                <p className="mt-4 text-[15px] text-ink">{t(o)}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Destinations */}
      <Section tone="sand">
        <SectionHeading eyebrow={t({ fr: "Destinations adaptées", en: "Suitable destinations" })} title={t({ fr: "Des lieux choisis pour leur valeur éducative", en: "Places chosen for their educational value" })} />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {studyDestinations.map((d) => (
            <div key={d.slug} className="overflow-hidden rounded-xl bg-white shadow-sm">
              <div className="aspect-[4/3]">
                <Photo src={d.image} alt={d.name} className="size-full" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl text-forest">{d.name}</h3>
                <p className="mt-2 text-sm text-muted">{t(d.activities[0])}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Sample programme */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <Eyebrow>{t({ fr: "Exemple de programme", en: "Sample programme" })}</Eyebrow>
            <h2 className="text-4xl text-forest md:text-[44px]">{t({ fr: "Un voyage d'études de 4 jours", en: "A 4-day study trip" })}</h2>
            <p className="mt-5 text-muted">
              {t({
                fr: "Exemple indicatif, à adapter selon le niveau, la durée et le budget de votre groupe.",
                en: "Indicative example, to be adapted to your group's level, duration and budget.",
              })}
            </p>
            <div className="mt-4"><Provisional /></div>
            <div className="relative mt-8 overflow-hidden rounded-xl">
              <Photo src="/images/lemur-2.jpg" alt={t({ fr: "Forêt d'Andasibe", en: "Andasibe forest" })} className="aspect-[4/3] w-full" />
            </div>
          </div>
          <ol className="relative space-y-8 border-l-2 border-line pl-8">
            {programme.map((p) => (
              <li key={p.day.fr} className="relative">
                <span className="absolute -left-[41px] top-1 flex size-5 items-center justify-center rounded-full bg-sun ring-4 ring-paper" />
                <p className="text-xs font-bold uppercase tracking-widest text-ocean">{t(p.day)}</p>
                <h3 className="mt-1 text-2xl text-forest">{t(p.title)}</h3>
                <p className="mt-2 text-muted">{t(p.points)}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* Organisation */}
      <Section tone="forest">
        <SectionHeading eyebrow={t({ fr: "Organisation", en: "Organisation" })} title={t({ fr: "Ce que nous prenons en charge", en: "What we take care of" })} />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Bus, fr: ["Transport du groupe", "Véhicules adaptés aux effectifs"], en: ["Group transport", "Vehicles suited to group size"] },
            { icon: Route, fr: ["Préparation des itinéraires", "Temps de trajet et pauses calibrés"], en: ["Itinerary preparation", "Travel times and breaks calibrated"] },
            { icon: Compass, fr: ["Accompagnement des groupes", "Guides et encadrement sur place"], en: ["Group support", "Guides and supervision on site"] },
            { icon: MessageSquare, fr: ["Personnalisation", "Activités ajoutées selon vos objectifs"], en: ["Customisation", "Activities added to match your goals"] },
          ].map((o) => (
            <div key={o.fr[0]} className="rounded-xl border border-paper/15 p-6">
              <o.icon className="size-6 text-sun" />
              <h3 className="mt-4 text-xl text-paper">{t({ fr: o.fr[0], en: o.en[0] })}</h3>
              <p className="mt-2 text-paper/75">{t({ fr: o.fr[1], en: o.en[1] })}</p>
            </div>
          ))}
        </div>
        <ul className="mt-12 grid gap-3 text-paper/85 md:grid-cols-2">
          {[
            { fr: "Coordination avec les établissements et les familles", en: "Coordination with schools and families" },
            { fr: "Itinéraire personnalisable selon le programme pédagogique", en: "Itinerary customisable to the learning programme" },
            { fr: "Devis clair, sans frais cachés", en: "Clear quote, no hidden fees" },
          ].map((b) => (
            <li key={b.fr} className="flex gap-3"><Check className="mt-1 size-4 shrink-0 text-sun" />{t(b)}</li>
          ))}
        </ul>
      </Section>

      <Section>
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-sand p-8 md:flex-row md:items-center md:p-12">
          <div>
            <h2 className="text-3xl text-forest md:text-4xl">{t({ fr: "Préparons le voyage de votre établissement", en: "Let's prepare your institution's trip" })}</h2>
            <p className="mt-3 text-muted">{t({ fr: "Indiquez-nous vos objectifs, la taille du groupe et vos dates.", en: "Tell us your goals, group size and dates." })}</p>
          </div>
          <ButtonLink to="/contact?type=etudes">{t({ fr: "Demander un devis", en: "Request a quote" })}</ButtonLink>
        </div>
      </Section>
    </>
  );
}
