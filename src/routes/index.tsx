import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Eye,
  MapPin,
  Phone,
  Mail,
  Globe,
  Clock,
  Repeat,
  Wallet,
  Menu,
  X,
} from "lucide-react";

import logo from "@/assets/feenstra-logo.png.asset.json";
import heroBillboard from "@/assets/hero-billboard.jpg";
import locProvincial from "@/assets/loc-provincial.jpg";
import locTown from "@/assets/loc-town.jpg";
import locIndustrial from "@/assets/loc-industrial.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Feenstra Advertisements | Reclameborden langs drukke wegen" },
      {
        name: "description",
        content:
          "Val op met een reclamebord langs een drukke weg. Feenstra Advertisements verhuurt reclameborden op toplocaties. Vraag vrijblijvend een offerte aan.",
      },
      { property: "og:title", content: "Adverteer op een toplocatie langs de weg" },
      {
        property: "og:description",
        content:
          "Duizenden voorbijgangers per dag zien uw boodschap. Reclameborden op sterke locaties, lokaal en regionaal.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "Waarom", href: "#waarom" },
  { label: "Locaties", href: "#locaties" },
  { label: "Voor wie", href: "#voor-wie" },
  { label: "Werkwijze", href: "#werkwijze" },
  { label: "Over ons", href: "#over-ons" },
];

const BENEFITS = [
  {
    icon: Eye,
    title: "Onvermijdelijk zichtbaar",
    text: "Geen adblocker, geen wegklikken. Uw boodschap staat er, dag en nacht.",
  },
  {
    icon: Repeat,
    title: "Dagelijkse herhaling",
    text: "Forenzen passeren dezelfde route honderden keren per jaar. Herhaling bouwt merk.",
  },
  {
    icon: MapPin,
    title: "Lokaal raak",
    text: "U bereikt precies de mensen die in uw verzorgingsgebied wonen en werken.",
  },
  {
    icon: Wallet,
    title: "Lage kosten per bereik",
    text: "Buitenreclame levert een van de laagste prijzen per duizend contacten.",
  },
];

const LOCATIONS = [
  {
    img: locProvincial,
    name: "Provinciale weg",
    kpi: "± 14.000 voertuigen p/d",
    text: "Vrij zicht, hoge snelheid, geen concurrentie in beeld. Ideaal voor merkbekendheid.",
  },
  {
    img: locTown,
    name: "Invalsweg dorpskern",
    kpi: "± 9.500 voertuigen p/d",
    text: "Langzaam rijdend verkeer en verlichting: uw bord wordt écht gelezen.",
  },
  {
    img: locIndustrial,
    name: "Bedrijventerrein",
    kpi: "± 11.000 voertuigen p/d",
    text: "Zakelijk publiek en transport. Sterk voor B2B-diensten en installatiebedrijven.",
  },
];

const AUDIENCES = [
  "Bouw, installatie & techniek",
  "Autobedrijven & dealers",
  "Makelaars & hypotheekadvies",
  "Horeca & recreatie",
  "Retail & showrooms",
  "Zorg, sport & gemeenten",
];

const STEPS = [
  {
    n: "01",
    title: "Kies uw locatie",
    text: "We adviseren welk bord het beste past bij uw doelgroep en werkgebied.",
  },
  {
    n: "02",
    title: "Wij maken het ontwerp",
    text: "Een ontwerp dat op 80 km/u leesbaar is. Print en plaatsing regelen wij.",
  },
  {
    n: "03",
    title: "U bent zichtbaar",
    text: "Binnen enkele weken hangt uw boodschap langs de weg. Dagelijks duizenden ogen.",
  },
];

function Index() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <img
              src={logo.url}
              alt="Feenstra Advertisements logo"
              className="h-9 w-auto"
            />
            <span className="hidden font-display text-lg uppercase tracking-[0.18em] sm:block">
              Feenstra <span className="text-gold">Advertisements</span>
            </span>
          </a>
          <nav className="hidden items-center gap-8 lg:flex">
            {NAV.map((i) => (
              <a
                key={i.href}
                href={i.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-gold"
              >
                {i.label}
              </a>
            ))}
            <a href="#contact" className="btn-gold text-sm">
              Offerte aanvragen
            </a>
          </nav>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="text-foreground lg:hidden"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav className="border-t border-border bg-background px-5 py-4 lg:hidden">
            {NAV.map((i) => (
              <a
                key={i.href}
                href={i.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm text-muted-foreground"
              >
                {i.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-gold mt-3 w-full text-sm"
            >
              Offerte aanvragen
            </a>
          </nav>
        )}
      </header>

      <main id="top">
        {/* HERO */}
        <section className="relative flex min-h-[92vh] items-end overflow-hidden">
          <img
            src={heroBillboard}
            alt="Groot leeg reclamebord langs een drukke snelweg bij zonsondergang"
            width={1920}
            height={1280}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />
          <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-32 lg:px-8 lg:pb-28">
            <span className="eyebrow">
              <span className="h-px w-8 bg-gold" /> Buitenreclame op toplocaties
            </span>
            <h1 className="mt-5 max-w-4xl text-5xl sm:text-6xl lg:text-8xl">
              Duizenden ogen
              <br />
              <span className="text-gold-gradient">op uw bedrijf</span>
              <br />
              elke dag opnieuw.
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
              Feenstra Advertisements plaatst uw reclame op grote borden langs drukke wegen.
              Onmisbaar in beeld voor iedereen die dagelijks langsrijdt.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#locaties" className="btn-gold">
                Adverteer op een toplocatie <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="btn-ghost-gold">
                Vraag vrijblijvend een offerte aan
              </a>
            </div>
            <dl className="mt-14 grid max-w-3xl grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4">
              {[
                ["30.000+", "passanten per dag"],
                ["3", "sterke locaties"],
                ["24/7", "in beeld"],
                ["100%", "lokaal bereik"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="font-display text-3xl text-gold">{v}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                    {l}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* WAAROM */}
        <section id="waarom" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <span className="eyebrow">Waarom buitenreclame?</span>
              <h2 className="mt-4 text-4xl lg:text-5xl">
                Het enige medium dat men <span className="text-gold">niet kan wegklikken</span>
              </h2>
              <p className="mt-5 text-muted-foreground">
                Online advertenties verdwijnen na één seconde. Een bord langs de weg blijft staan
                en wordt keer op keer gezien door dezelfde mensen: uw buurt, uw klanten.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {BENEFITS.map((b) => (
                <div
                  key={b.title}
                  className="group rounded-lg border border-border bg-surface p-6 transition-colors hover:border-gold/60"
                >
                  <b.icon className="h-6 w-6 text-gold" />
                  <h3 className="mt-4 text-xl">{b.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LOCATIES */}
        <section id="locaties" className="border-y border-border bg-surface/40">
          <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <span className="eyebrow">Onze reclameborden</span>
                <h2 className="mt-4 text-4xl lg:text-5xl">Beschikbare locaties</h2>
              </div>
              <p className="max-w-md text-sm text-muted-foreground">
                Elk bord is geselecteerd op zichtlijn, snelheid en verkeersintensiteit. Beperkt
                aantal plaatsen per locatie.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {LOCATIONS.map((l) => (
                <article
                  key={l.name}
                  className="overflow-hidden rounded-lg border border-border bg-card"
                >
                  <img
                    src={l.img}
                    alt={`Reclamebord op locatie ${l.name}`}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-56 w-full object-cover"
                  />
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-widest text-gold">{l.kpi}</p>
                    <h3 className="mt-2 text-2xl">{l.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{l.text}</p>
                    <a
                      href="#contact"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold"
                    >
                      Beschikbaarheid opvragen <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* VOOR WIE */}
        <section id="voor-wie" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="eyebrow">Voor wie?</span>
              <h2 className="mt-4 text-4xl lg:text-5xl">
                Voor bedrijven die <span className="text-gold">lokaal willen groeien</span>
              </h2>
              <p className="mt-5 text-muted-foreground">
                Werkt u in een vast verzorgingsgebied? Dan is een bord langs de weg de snelste
                manier om in de regio hét bekende gezicht te worden.
              </p>
              <a href="#contact" className="btn-gold mt-8">
                Bespreek uw mogelijkheden
              </a>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {AUDIENCES.map((a) => (
                <li
                  key={a}
                  className="flex items-center gap-3 rounded-lg border border-border bg-surface px-5 py-4 text-sm"
                >
                  <span className="h-2 w-2 shrink-0 rotate-45 bg-gold" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* WERKWIJZE */}
        <section id="werkwijze" className="border-y border-border bg-surface/40">
          <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
            <span className="eyebrow">Hoe werkt het?</span>
            <h2 className="mt-4 text-4xl lg:text-5xl">In drie stappen langs de weg</h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {STEPS.map((s) => (
                <div key={s.n} className="border-t-2 border-gold pt-6">
                  <span className="font-display text-5xl text-gold-gradient">{s.n}</span>
                  <h3 className="mt-3 text-2xl">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OVER ONS */}
        <section id="over-ons" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <img
              src={logo.url}
              alt="Feenstra Advertisements"
              loading="lazy"
              className="h-40 w-auto self-start"
            />
            <div>
              <span className="eyebrow">Over Feenstra Advertisements</span>
              <h2 className="mt-4 text-4xl lg:text-5xl">Nuchter, lokaal en resultaatgericht</h2>
              <p className="mt-5 text-muted-foreground">
                Wij beheren reclameborden op zorgvuldig gekozen plekken langs drukke wegen. Geen
                ingewikkelde mediaplannen: wij weten wie er langsrijdt en wat werkt op die plek.
              </p>
              <p className="mt-4 text-muted-foreground">
                Van advies en ontwerp tot productie, plaatsing en onderhoud — u heeft één
                aanspreekpunt en een bord dat er altijd verzorgd bij staat.
              </p>
              <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 text-gold" /> Reactie binnen één werkdag
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="border-t border-border bg-surface/40">
          <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <span className="eyebrow">Contact</span>
                <h2 className="mt-4 text-4xl lg:text-5xl">
                  Vraag vrijblijvend <span className="text-gold">een offerte aan</span>
                </h2>
                <p className="mt-5 text-muted-foreground">
                  Vertel kort wat u doet en waar u zichtbaar wilt zijn. Wij komen terug met een
                  passend voorstel en de beschikbare plekken.
                </p>
                <div className="mt-8 space-y-4 text-sm">
                  <a
                    href="tel:+31622340088"
                    className="flex items-center gap-3 transition-colors hover:text-gold"
                  >
                    <Phone className="h-5 w-5 text-gold" /> 06 22 34 00 88
                  </a>
                  <a
                    href="mailto:info@feenstra-advertisements.nl"
                    className="flex items-center gap-3 transition-colors hover:text-gold"
                  >
                    <Mail className="h-5 w-5 text-gold" /> info@feenstra-advertisements.nl
                  </a>
                  <a
                    href="https://feenstra-advertisements.nl"
                    className="flex items-center gap-3 transition-colors hover:text-gold"
                  >
                    <Globe className="h-5 w-5 text-gold" /> feenstra-advertisements.nl
                  </a>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>

        {/* SLOT CTA */}
        <section className="relative overflow-hidden border-t border-border">
          <div className="mx-auto max-w-4xl px-5 py-24 text-center lg:py-32">
            <h2 className="text-4xl lg:text-6xl">
              Uw naam op een bord dat
              <br />
              <span className="text-gold-gradient">niemand mist</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
              Beperkt aantal posities beschikbaar. Vraag vandaag nog de mogelijkheden op.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a href="#contact" className="btn-gold">
                Adverteer op een toplocatie <ArrowRight className="h-4 w-4" />
              </a>
              <a href="tel:+31622340088" className="btn-ghost-gold">
                Bel 06 22 34 00 88
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-8 text-xs text-muted-foreground sm:flex-row lg:px-8">
          <div className="flex items-center gap-3">
            <img
              src={logo.url}
              alt=""
              className="h-7 w-auto"
            />
            <span>© {new Date().getFullYear()} Feenstra Advertisements</span>
          </div>
          <span>feenstra-advertisements.nl · 06 22 34 00 88</span>
        </div>
      </footer>
    </div>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const body = `Naam: ${fd.get("naam")}\nBedrijf: ${fd.get("bedrijf")}\nE-mail: ${fd.get(
      "email",
    )}\nTelefoon: ${fd.get("telefoon")}\n\n${fd.get("bericht")}`;
    window.location.href = `mailto:info@feenstra-advertisements.nl?subject=${encodeURIComponent(
      "Offerteaanvraag reclamebord",
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const field =
    "w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-gold";

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-lg border border-border bg-card p-6 shadow-lg sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="naam" required placeholder="Uw naam" className={field} />
        <input name="bedrijf" placeholder="Bedrijfsnaam" className={field} />
        <input name="email" type="email" required placeholder="E-mailadres" className={field} />
        <input name="telefoon" placeholder="Telefoonnummer" className={field} />
      </div>
      <textarea
        name="bericht"
        rows={4}
        placeholder="Waar wilt u zichtbaar zijn?"
        className={`${field} mt-4 resize-none`}
      />
      <button type="submit" className="btn-gold mt-5 w-full">
        Offerte aanvragen
      </button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        {sent
          ? "Uw e-mailprogramma is geopend — verstuur het bericht om de aanvraag af te ronden."
          : "Vrijblijvend · reactie binnen één werkdag"}
      </p>
    </form>
  );
}
