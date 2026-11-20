import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, MapPin } from "lucide-react";
import { useLang, type Bi } from "../../lib/i18n";
import { cn } from "../../lib/utils";

export function ButtonLink({
  to,
  children,
  variant = "primary",
  className,
  external,
}: {
  to: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "light";
  className?: string;
  external?: boolean;
}) {
  const styles = {
    primary: "bg-sun text-forest hover:bg-[#f0b155] shadow-sm",
    ghost: "border border-forest/20 text-forest hover:bg-forest hover:text-paper",
    light: "bg-paper text-forest hover:bg-white",
  }[variant];
  const cls = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[15px] font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ocean/30",
    styles,
    className,
  );
  if (external) {
    return (
      <a href={to} className={cls} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={cls}>
      <span className="inline-flex items-center gap-2">{children}</span>
    </Link>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-ocean">{children}</p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="text-4xl text-forest md:text-[44px]">{title}</h2>
      {intro && <p className="mt-4 text-lg text-muted">{intro}</p>}
    </div>
  );
}

export function Container({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-[1200px] px-5 md:px-8", className)}>{children}</div>;
}

export function Section({
  children,
  className,
  tone = "paper",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "paper" | "sand" | "forest";
  id?: string;
}) {
  const bg = { paper: "bg-paper", sand: "bg-sand", forest: "bg-forest text-paper" }[tone];
  return (
    <section id={id} className={cn("py-16 md:py-24", bg, className)}>
      <Container>{children}</Container>
    </section>
  );
}

/** Marque un contenu comme provisoire (à confirmer par l'agence). */
export function Provisional({ className }: { className?: string }) {
  const { t } = useLang();
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-sun/20 px-2.5 py-0.5 text-xs font-semibold text-[#8a5a10]",
        className,
      )}
    >
      {t({ fr: "Provisoire", en: "Provisional" })}
    </span>
  );
}

/** Image avec repli élégant si aucune photo n'est disponible. */
export function Photo({
  src,
  alt,
  className,
  label,
}: {
  src: string | null;
  alt: string;
  className?: string;
  label?: Bi;
}) {
  const { t } = useLang();
  if (!src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          "flex items-center justify-center bg-gradient-to-br from-ocean/80 via-forest/70 to-forest text-center text-paper",
          className,
        )}
      >
        <div className="px-6">
          <MapPin className="mx-auto mb-2 size-6 opacity-80" />
          <p className="text-sm opacity-90">
            {label ? t(label) : t({ fr: "Photo à venir", en: "Photo coming soon" })}
          </p>
        </div>
      </div>
    );
  }
  return <img src={src} alt={alt} loading="lazy" decoding="async" className={cn("object-cover", className)} />;
}

export function TextLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link to={to} className="inline-flex items-center gap-1.5 font-semibold text-ocean hover:text-forest">
      {children}
      <ArrowRight className="size-4" />
    </Link>
  );
}

/** Fait apparaître son contenu en fondu à l'entrée dans le viewport. */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("mv-reveal", visible && "is-visible", className)}
    >
      {children}
    </div>
  );
}
