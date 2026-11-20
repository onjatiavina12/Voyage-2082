import { Check, GraduationCap, Bus, Compass, Briefcase, Map } from "lucide-react";
import { ButtonLink, Eyebrow, Reveal, Section } from "../components/site/ui";
import { useLang, type Bi } from "../lib/i18n";

interface Service {
  icon: typeof Check;
  img: string;
  imgAlt: Bi;
  title: Bi;
  intro: Bi;
  points: Bi[];
  audience: Bi;
}

const services: Service[] = [
  {
    icon: GraduationCap,
    img: "/images/svc-etudes.jpg",
    imgAlt: { fr: "Groupe d'élèves en sortie sur un sentier", en: "Students on a field trip along a path" },
    title: { fr: "Voyages d'études", en: "Study trips" },
    intro: { fr: "Des sorties qui prolongent la salle de classe, du terrain à l'analyse.", en: "Outings that extend the classroom, from fieldwork to analysis." },
    points: [
      { fr: "Organisation de sorties pédagogiques", en: "Educational outing organisation" },
      { fr: "Visites éducatives et scientifiques", en: "Educational and scientific visits" },
      { fr: "Découverte de la biodiversité et des écosystèmes", en: "Biodiversity and ecosystem discovery" },
      { fr: "Visites d'entreprises, d'institutions et de sites historiques", en: "Visits to companies, institutions and historic sites" },
      { fr: "Programmes pour écoles, lycées et universités", en: "Programmes for schools, high schools and universities" },
    ],
    audience: { fr: "Écoles, lycées, universités, centres de formation", en: "Schools, high schools, universities, training centres" },
  },
  {
    icon: Bus,
    img: "/images/svc-excursion.jpg",
    imgAlt: { fr: "Groupe en randonnée sur un sentier de montagne", en: "Group hiking a mountain trail" },
    title: { fr: "Excursions scolaires et universitaires", en: "School and university excursions" },
    intro: { fr: "Une logistique complète pour les groupes, du départ au retour.", en: "Complete logistics for groups, from departure to return." },
    points: [
      { fr: "Organisation de sorties en groupe", en: "Group outing organisation" },
      { fr: "Transport et accompagnement", en: "Transport and supervision" },
      { fr: "Programme adapté au niveau des participants", en: "Programme adapted to participants' level" },
      { fr: "Encadrement et organisation logistique", en: "Supervision and logistics" },
    ],
    audience: { fr: "Établissements scolaires et universitaires", en: "Schools and universities" },
  },
  {
    icon: Compass,
    img: "/images/svc-circuit.jpg",
    imgAlt: { fr: "Rizières en terrasses et rivière à Madagascar", en: "Terraced rice fields and river in Madagascar" },
    title: { fr: "Circuits touristiques", en: "Guided tours" },
    intro: { fr: "Les grandes régions de Madagascar, des paysages aux traditions.", en: "Madagascar's major regions, from landscapes to traditions." },
    points: [
      { fr: "Circuits dans les différentes régions de Madagascar", en: "Tours across Madagascar's regions" },
      { fr: "Découverte des paysages, cultures et traditions", en: "Discovery of landscapes, cultures and traditions" },
      { fr: "Circuits personnalisés", en: "Personalised tours" },
    ],
    audience: { fr: "Particuliers, familles, groupes d'amis", en: "Individuals, families, groups of friends" },
  },
  {
    icon: Briefcase,
    img: "/images/svc-corporate.jpg",
    imgAlt: { fr: "Équipe réunie en montagne pour un team building", en: "Team gathered in the mountains for team building" },
    title: { fr: "Voyages d'entreprise", en: "Corporate travel" },
    intro: { fr: "Des séjours qui renforcent la cohésion et stimulent les équipes.", en: "Trips that strengthen cohesion and energise teams." },
    points: [
      { fr: "Team building", en: "Team building" },
      { fr: "Voyages de découverte", en: "Discovery trips" },
      { fr: "Séminaires et sorties professionnelles", en: "Seminars and professional outings" },
    ],
    audience: { fr: "Entreprises, associations, institutions", en: "Companies, associations, institutions" },
  },
  {
    icon: Map,
    img: "/images/svc-mesure.jpg",
    imgAlt: { fr: "Paysans au travail dans les rizières des hauts plateaux", en: "Farmers at work in highland rice fields" },
    title: { fr: "Voyages sur mesure", en: "Tailor-made trips" },
    intro: { fr: "Un voyage dessiné pour vous, du premier échange au dernier jour.", en: "A trip designed for you, from the first exchange to the last day." },
    points: [
      { fr: "Organisation selon vos besoins et votre budget", en: "Organised around your needs and budget" },
      { fr: "Programme personnalisé", en: "Personalised programme" },
      { fr: "Accompagnement dans la préparation du voyage", en: "Support in preparing the trip" },
    ],
    audience: { fr: "Tous profils", en: "All profiles" },
  },
];

export default function Services() {
  const { t } = useLang();
  return (
    <>
      <PageHero
        eyebrow={t({ fr: "Nos services", en: "Our services" })}
        image="/images/hero-services.jpg"
        title={t({ fr: "Des prestations pensées pour chaque voyage", en: "Services designed for every trip" })}
        text={t({ fr: "Cinq offres complémentaires, du voyage pédagogique au séjour sur mesure.", en: "Five complementary offers, from educational trips to tailor-made stays." })}
      />
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title.fr} delay={(i % 2) * 120} className={i === 0 ? "lg:col-span-2" : ""}>
            <article className="flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white shadow-sm">
              <div className={`relative overflow-hidden ${i === 0 ? "aspect-[16/7]" : "aspect-[16/9]"}`}>
                <img src={s.img} alt={t(s.imgAlt)} loading="lazy" className="size-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              <div className={`flex flex-1 flex-col gap-6 p-8 md:p-10 ${i === 0 ? "lg:flex-row lg:gap-12" : ""}`}>
                <div className={i === 0 ? "lg:w-1/3" : ""}>
                  <span className="inline-flex size-12 items-center justify-center rounded-full bg-sand text-forest">
                    <s.icon className="size-6" />
                  </span>
                  <h2 className="mt-5 text-3xl text-forest">{t(s.title)}</h2>
                  <p className="mt-3 text-muted">{t(s.intro)}</p>
                  <p className="mt-4 text-sm font-semibold text-ocean">{t({ fr: "Pour : ", en: "For: " })}{t(s.audience)}</p>
                </div>
                <ul className={`mt-2 grid flex-1 gap-3 ${i === 0 ? "md:grid-cols-2" : ""}`}>
                  {s.points.map((p) => (
                    <li key={p.fr} className="flex gap-3 text-[15px] text-ink">
                      <Check className="mt-0.5 size-4 shrink-0 text-ocean" />
                      {t(p)}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
            </Reveal>
          ))}
        </div>
      </Section>
      <Section tone="sand">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <Eyebrow>{t({ fr: "Votre projet", en: "Your project" })}</Eyebrow>
            <h2 className="text-3xl text-forest md:text-4xl">{t({ fr: "Un besoin particulier ? Parlons-en.", en: "A specific need? Let's talk." })}</h2>
          </div>
          <ButtonLink to="/contact">{t({ fr: "Demander un devis", en: "Request a quote" })}</ButtonLink>
        </div>
      </Section>
    </>
  );
}

export function PageHero({ eyebrow, title, text, image }: { eyebrow: string; title: string; text: string; image?: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-forest pb-20 pt-40 text-paper md:pb-24 md:pt-48">
      {image && (
        <>
          <img src={image} alt="" aria-hidden className="mv-zoom absolute inset-0 -z-10 size-full object-cover" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-forest via-forest/80 to-forest/40" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-forest/70 to-transparent" />
        </>
      )}
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-sun">{eyebrow}</p>
        <h1 className="max-w-3xl text-5xl md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-paper/80">{text}</p>
      </div>
    </section>
  );
}
