import { Link } from "wouter";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Bus, Briefcase, Compass, GraduationCap, HeartHandshake, Map, ShieldCheck, Star, Users, Route } from "lucide-react";
import { ButtonLink, Eyebrow, Photo, Reveal, Section, SectionHeading, TextLink, Provisional } from "../components/site/ui";
import { destinations } from "../data/content";
import { useLang } from "../lib/i18n";

const services = [
  { icon: GraduationCap, img: "/images/svc-etudes.jpg", title: { fr: "Voyages d'études", en: "Study trips" }, text: { fr: "Sorties pédagogiques, visites scientifiques et institutionnelles.", en: "Educational outings, scientific and institutional visits." }, to: "/voyages-etudes" },
  { icon: Bus, img: "/images/svc-excursion.jpg", title: { fr: "Excursions scolaires", en: "School excursions" }, text: { fr: "Transport, encadrement et logistique pour les groupes.", en: "Transport, supervision and logistics for groups." }, to: "/services" },
  { icon: Compass, img: "/images/svc-circuit.jpg", title: { fr: "Circuits touristiques", en: "Guided tours" }, text: { fr: "Circuits dans les régions majeures de l'île.", en: "Tours across the island's key regions." }, to: "/services" },
  { icon: Briefcase, img: "/images/svc-corporate.jpg", title: { fr: "Voyages d'entreprise", en: "Corporate travel" }, text: { fr: "Team building, séminaires et voyages de découverte.", en: "Team building, seminars and discovery trips." }, to: "/services" },
  { icon: Map, img: "/images/svc-mesure.jpg", title: { fr: "Voyages sur mesure", en: "Tailor-made trips" }, text: { fr: "Programme construit selon vos besoins et votre budget.", en: "A programme built around your needs and budget." }, to: "/services" },
];

const advantages = [
  { icon: ShieldCheck, title: { fr: "Organisation rigoureuse", en: "Rigorous organisation" }, text: { fr: "Itinéraires préparés en amont, avec un plan B.", en: "Itineraries prepared in advance, with a plan B." } },
  { icon: Users, title: { fr: "Accompagnement humain", en: "Personal support" }, text: { fr: "Un interlocuteur unique du devis au retour.", en: "One contact person from quote to return." } },
  { icon: Route, title: { fr: "Connaissance du terrain", en: "Local expertise" }, text: { fr: "Une équipe qui connaît les routes, les parcs et les guides.", en: "A team that knows the roads, parks and guides." } },
  { icon: HeartHandshake, title: { fr: "Sens et découverte", en: "Meaning and discovery" }, text: { fr: "Des programmes qui relient apprentissage et rencontres locales.", en: "Programmes that link learning with local encounters." } },
];

const testimonials = [
  { quote: { fr: "Témoignage à remplacer : retour d'un enseignant après une sortie pédagogique.", en: "Placeholder: feedback from a teacher after an educational trip." }, who: { fr: "Enseignant, lycée (exemple)", en: "Teacher, high school (example)" } },
  { quote: { fr: "Témoignage à remplacer : avis d'un responsable d'université sur l'organisation.", en: "Placeholder: university manager's feedback on the organisation." }, who: { fr: "Responsable, université (exemple)", en: "Manager, university (example)" } },
  { quote: { fr: "Témoignage à remplacer : avis d'un voyageur sur un circuit personnalisé.", en: "Placeholder: traveller's feedback on a tailor-made tour." }, who: { fr: "Voyageur particulier (exemple)", en: "Private traveller (example)" } },
];

export default function Home() {
  const { t } = useLang();
  const featured = destinations.filter((d) => ["andasibe", "nosy-be", "tsingy"].includes(d.slug));

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-forest">
        <img src="/images/baobab.jpg" alt={t({ fr: "Avenue des Baobabs à Madagascar", en: "Avenue of the Baobabs in Madagascar" })} className="mv-zoom absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/55 to-forest/10" />
        <div className="relative mx-auto w-full max-w-[1200px] px-5 pb-16 pt-40 md:px-8 md:pb-24">
          <p className="mv-rise mb-4 text-xs font-bold uppercase tracking-[0.2em] text-sun">
            {t({ fr: "Voyages d'études · Excursions · Circuits", en: "Study trips · Excursions · Tours" })}
          </p>
          <h1 className="mv-rise max-w-3xl text-5xl text-paper [animation-delay:120ms] md:text-7xl">
            {t({ fr: "Explorez Madagascar, vivez des expériences inoubliables", en: "Explore Madagascar, live unforgettable experiences" })}
          </h1>
          <p className="mv-rise mt-6 max-w-2xl text-lg text-paper/85 [animation-delay:240ms] md:text-xl">
            {t({
              fr: "Une agence spécialisée dans l'organisation de voyages d'études, d'excursions scolaires et de circuits, avec un accompagnement de la préparation jusqu'au retour.",
              en: "An agency specialised in study trips, school excursions and tours, supporting you from preparation to return.",
            })}
          </p>
          <div className="mv-rise mt-9 flex flex-col gap-3 [animation-delay:360ms] sm:flex-row">
            <ButtonLink to="/destinations">{t({ fr: "Découvrir nos voyages", en: "Discover our trips" })}</ButtonLink>
            <ButtonLink to="/contact" variant="light">{t({ fr: "Demander un devis", en: "Request a quote" })}</ButtonLink>
          </div>
        </div>
      </section>

      {/* Services */}
      <Section>
        <SectionHeading
          eyebrow={t({ fr: "Nos prestations", en: "What we offer" })}
          title={t({ fr: "Un service pour chaque type de voyage", en: "A service for every kind of trip" })}
          intro={t({ fr: "Des établissements scolaires aux entreprises, chaque programme est construit avec vous.", en: "From schools to companies, every programme is built with you." })}
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((s, i) => (
            <Reveal key={s.title.fr} delay={i * 90}>
              <ServiceCard to={s.to} img={s.img} icon={s.icon} title={t(s.title)} text={t(s.text)} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Destinations */}
      <Section tone="sand">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow={t({ fr: "Destinations phares", en: "Popular destinations" })}
            title={t({ fr: "Des paysages uniques, de la forêt au canyon", en: "Unique landscapes, from rainforest to canyon" })}
          />
          <TextLink to="/destinations">{t({ fr: "Toutes les destinations", en: "All destinations" })}</TextLink>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featured.map((d, i) => (
            <Reveal key={d.slug} delay={i * 120}><Link to={`/destinations`} className="group block h-full overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-lg">
              <div className="aspect-[4/3] overflow-hidden">
                <Photo src={d.image} alt={d.name} className="size-full transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-ocean">{t(d.region)}</p>
                <h3 className="mt-2 text-2xl text-forest">{d.name}</h3>
                <p className="mt-2 text-muted">{t(d.description)}</p>
              </div>
            </Link></Reveal>
          ))}
        </div>
      </Section>

      {/* Study trips */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="relative">
            <img src="/images/lemur.jpg" alt={t({ fr: "Lémurien dans la forêt d'Andasibe", en: "Lemur in Andasibe forest" })} loading="lazy" className="aspect-[4/5] w-full rounded-xl object-cover shadow-xl" />
            <div className="absolute -bottom-6 -right-4 hidden max-w-[240px] rounded-xl bg-white p-5 shadow-lg md:block">
              <p className="font-display text-2xl text-forest">{t({ fr: "Apprendre sur le terrain", en: "Learning in the field" })}</p>
              <p className="mt-1 text-sm text-muted">{t({ fr: "Biologie, géologie, géographie, histoire.", en: "Biology, geology, geography, history." })}</p>
            </div>
          </Reveal>
          <div>
            <Eyebrow>{t({ fr: "Voyages d'études", en: "Study trips" })}</Eyebrow>
            <h2 className="text-4xl text-forest md:text-[44px]">{t({ fr: "Transformer une sortie en véritable leçon", en: "Turn a trip into a real lesson" })}</h2>
            <p className="mt-5 text-lg text-muted">
              {t({
                fr: "Nous concevons des programmes qui s'appuient sur les objectifs pédagogiques de votre établissement : observation de la biodiversité, visites scientifiques, rencontres culturelles.",
                en: "We design programmes based on your institution's learning goals: biodiversity observation, scientific visits and cultural encounters.",
              })}
            </p>
            <ul className="mt-6 space-y-3 text-forest">
              {[
                { fr: "Programmes adaptés au niveau des élèves ou étudiants", en: "Programmes adapted to pupils' or students' level" },
                { fr: "Transport, hébergement et encadrement organisés", en: "Transport, lodging and supervision organised" },
                { fr: "Itinéraire ajustable selon le budget", en: "Itinerary adjustable to your budget" },
              ].map((b) => (
                <li key={b.fr} className="flex gap-3"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-sun" />{t(b)}</li>
              ))}
            </ul>
            <div className="mt-9">
              <ButtonLink to="/voyages-etudes" variant="ghost">{t({ fr: "Découvrir les voyages d'études", en: "Explore study trips" })}<ArrowRight className="size-4" /></ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      {/* Advantages */}
      <Section tone="forest">
        <SectionHeading
          eyebrow={t({ fr: "Pourquoi nous", en: "Why us" })}
          title={t({ fr: "Pourquoi nous faire confiance", en: "Why trust us" })}
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((a, i) => (
            <Reveal key={a.title.fr} delay={i * 100}><div>
              <a.icon className="size-7 text-sun" />
              <h3 className="mt-4 text-xl text-paper">{t(a.title)}</h3>
              <p className="mt-2 text-paper/75">{t(a.text)}</p>
            </div></Reveal>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <div className="flex flex-wrap items-center gap-3">
          <SectionHeading eyebrow={t({ fr: "Témoignages", en: "Testimonials" })} title={t({ fr: "Ce que disent nos voyageurs", en: "What our travellers say" })} />
        </div>
        <div className="mt-4"><Provisional /></div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((tm, i) => (
            <Reveal key={tm.who.fr} delay={i * 110}><figure className="flex h-full flex-col rounded-xl bg-white p-7 shadow-sm">
              <div className="flex gap-1 text-sun">{[...Array(5)].map((_, i) => <Star key={i} className="size-4 fill-current" />)}</div>
              <blockquote className="mt-4 flex-1 text-forest">« {t(tm.quote)} »</blockquote>
              <figcaption className="mt-5 text-sm font-semibold text-muted">{t(tm.who)}</figcaption>
            </figure></Reveal>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-ocean py-20 text-paper md:py-28">
        <img src="/images/nosy-be-2.jpg" alt="" aria-hidden className="absolute inset-0 size-full object-cover opacity-25" />
        <div className="relative mx-auto max-w-3xl px-5 text-center">
          <h2 className="text-4xl md:text-5xl">{t({ fr: "Préparons votre prochain voyage à Madagascar", en: "Let's plan your next trip to Madagascar" })}</h2>
          <p className="mt-5 text-lg text-paper/85">
            {t({ fr: "Dites-nous votre projet : nous revenons vers vous avec une proposition claire.", en: "Tell us about your project and we will come back with a clear proposal." })}
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink to="/contact">{t({ fr: "Demander un devis", en: "Request a quote" })}</ButtonLink>
            <ButtonLink to="/contact" variant="light">{t({ fr: "Nous contacter", en: "Contact us" })}</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceCard({ to, img, icon: Icon, title, text }: { to: string; img: string; icon: LucideIcon; title: string; text: string }) {
  return (
    <Link to={to} className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={img} alt="" aria-hidden loading="lazy" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <span className="absolute left-4 top-4 inline-flex size-10 items-center justify-center rounded-full bg-paper/95 text-forest shadow-sm">
          <Icon className="size-5" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl text-forest">{title}</h3>
        <p className="mt-2 text-[15px] text-muted">{text}</p>
      </div>
    </Link>
  );
}
