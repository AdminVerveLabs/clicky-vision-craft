import { useParams } from "react-router-dom";
import { getEventBySlug } from "@/data/eventData";
import type { EventPageData, RecipeCard, WinePairing, Cocktail } from "@/data/eventData";
import Footer from "@/components/chef/Footer";
import CTAButton from "@/components/chef/CTAButton";
import NotFound from "./NotFound";

/* ── Hero ─────────────────────────────────────────── */
const Hero = ({ data }: { data: EventPageData }) => (
  <section
    className="relative flex items-end h-[280px] md:h-[360px]"
    style={{
      background: data.heroImage
        ? `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.55)), url(${data.heroImage}) center/cover`
        : "linear-gradient(135deg, hsl(var(--dark)) 0%, #16213e 100%)",
    }}
  >
    <div className="absolute top-6 left-6 md:left-16">
      <span className="inline-block bg-white/20 text-white text-[11px] uppercase tracking-[1px] px-3.5 py-1.5 rounded-full">
        Your {data.eventType === "corporate" ? "Corporate" : "Private"} Event
      </span>
    </div>
    <div className="px-6 md:px-16 pb-10 md:pb-12 max-w-[600px] text-white">
      <p className="font-sans text-[14px] md:text-[15px] opacity-80 mb-2">{data.dateTime}</p>
      <h1 className="font-sans text-[32px] md:text-[44px] font-semibold leading-[1.1] mb-3">{data.title}</h1>
      <p className="font-sans text-[16px] md:text-[18px] opacity-90">{data.tagline}</p>
    </div>
  </section>
);

/* ── Info Cards ───────────────────────────────────── */
const InfoCards = ({ data }: { data: EventPageData }) => (
  <div className="flex flex-col md:flex-row gap-5 mb-14">
    {/* Location */}
    <div className="flex-1 bg-gray-light rounded-xl p-6 flex items-center gap-5">
      <div className="w-14 h-14 rounded-xl flex items-center justify-center text-[28px] shrink-0" style={{ background: "#E3F2FD" }}>📍</div>
      <div>
        <p className="font-sans text-[12px] uppercase tracking-[0.5px] text-gray mb-1">Location</p>
        <p className="font-sans text-[16px] font-medium text-dark">
          {data.location.type === "virtual" ? "Virtual via Zoom" : data.location.address}
        </p>
        {data.location.type === "virtual" && data.location.zoomLink && (
          <a href={data.location.zoomLink} target="_blank" rel="noopener noreferrer" className="font-sans text-[14px] text-purple underline">
            Join Meeting →
          </a>
        )}
        {data.location.type === "in-person" && data.location.mapsUrl && (
          <a href={data.location.mapsUrl} target="_blank" rel="noopener noreferrer" className="font-sans text-[14px] text-purple underline">
            Get Directions →
          </a>
        )}
      </div>
    </div>
    {/* Duration */}
    <div className="flex-1 bg-gray-light rounded-xl p-6 flex items-center gap-5">
      <div className="w-14 h-14 rounded-xl flex items-center justify-center text-[28px] shrink-0" style={{ background: "#FFF3E0" }}>⏱</div>
      <div>
        <p className="font-sans text-[12px] uppercase tracking-[0.5px] text-gray mb-1">Duration</p>
        <p className="font-sans text-[16px] font-medium text-dark">{data.duration}</p>
        {data.arrivalNote && <p className="font-sans text-[14px] text-gray mt-0.5">{data.arrivalNote}</p>}
      </div>
    </div>
  </div>
);

/* ── Get Ready / Downloads ────────────────────────── */
const GetReady = ({ data }: { data: EventPageData }) => (
  <div className="mb-14">
    <p className="font-sans text-[12px] uppercase tracking-[2px] text-gray mb-5">Get Ready</p>
    <p className="font-sans text-[18px] text-gray leading-[1.7] mb-7">{data.prepDescription}</p>
    <div className="flex flex-col md:flex-row gap-5">
      {data.downloads.map((dl) => (
        <a
          key={dl.title}
          href={dl.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center gap-5 p-6 rounded-[14px] no-underline transition-transform hover:-translate-y-0.5"
          style={{ background: "#1a1a2e" }}
        >
          <div className="w-[52px] h-[52px] rounded-xl bg-white/10 flex items-center justify-center text-[24px] shrink-0">
            {dl.icon}
          </div>
          <div>
            <p className="font-sans text-[17px] font-medium text-white">{dl.title}</p>
            <p className="font-sans text-[14px] text-white/70 mt-1">{dl.subtitle}</p>
          </div>
        </a>
      ))}
    </div>
  </div>
);

/* ── Recipes ──────────────────────────────────────── */
const RecipeCards = ({ recipes, menuTitle, menuSubtitle }: { recipes: RecipeCard[]; menuTitle: string; menuSubtitle?: string }) => (
  <div className="mb-14">
    <p className="font-sans text-[12px] uppercase tracking-[2px] text-gray mb-2">What We're Cooking</p>
    <p className="font-sans text-[26px] font-medium text-dark mb-8">
      {menuTitle}{" "}
      {menuSubtitle && <span className="font-normal text-[18px] text-gray">{menuSubtitle}</span>}
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {recipes.map((r) => (
        <div key={r.dishName} className="rounded-2xl overflow-hidden bg-gray-light">
          <div
            className="h-[200px] flex items-center justify-center"
            style={{
              background: r.image
                ? `url(${r.image}) center/cover`
                : `linear-gradient(135deg, ${r.gradientFrom || "#f3f4f6"} 0%, ${r.gradientTo || "#e5e7eb"} 100%)`,
            }}
          >
            {!r.image && r.emoji && <span className="text-[72px]">{r.emoji}</span>}
          </div>
          <div className="p-6">
            <p className="font-sans text-[11px] uppercase tracking-[0.5px] text-gray mb-1.5">{r.courseType}</p>
            <p className="font-sans text-[20px] font-semibold text-dark mb-3">{r.dishName}</p>
            <a href={r.recipeUrl} className="font-sans text-[15px] font-medium text-purple no-underline hover:underline">
              View Recipe →
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
);

/* ── Wine Pairing ─────────────────────────────────── */
const WinePairingSection = ({ pairing }: { pairing: WinePairing }) => (
  <div className="mb-14">
    <div className="flex flex-col md:flex-row gap-9 rounded-[20px] p-8 md:p-10" style={{ background: "linear-gradient(135deg, #F8F4FC 0%, #F3E8FF 100%)" }}>
      <div className="w-[100px] h-[100px] bg-white rounded-full flex items-center justify-center shrink-0 mx-auto md:mx-0" style={{ boxShadow: "0 4px 16px rgba(107,91,149,0.15)" }}>
        <span className="text-[48px]">🍷</span>
      </div>
      <div className="flex-1">
        <p className="font-sans text-[12px] uppercase tracking-[2px] text-purple mb-2">Wine Pairing</p>
        <p className="font-sans text-[22px] font-medium text-dark mb-4">Curated by {pairing.curatorName}</p>
        <p className="font-sans text-[16px] text-gray italic leading-[1.7] mb-6">{pairing.curatorQuote}</p>
        <div className="flex flex-col gap-4 mb-6">
          {pairing.wines.map((w) => (
            <div key={w.name} className="flex items-start gap-3">
              <span className="text-purple text-[16px] mt-0.5">•</span>
              <div>
                <p className="font-sans text-[16px] font-medium text-dark">{w.name}</p>
                <p className="font-sans text-[14px] text-gray leading-[1.6] mt-1">{w.description}</p>
              </div>
            </div>
          ))}
        </div>
        <a
          href={pairing.orderUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-purple text-white rounded-[10px] font-sans text-[15px] font-medium no-underline hover:opacity-90 transition-opacity"
        >
          🛒 {pairing.orderButtonText}
        </a>
      </div>
    </div>
  </div>
);

/* ── Cocktail ─────────────────────────────────────── */
const CocktailSection = ({ cocktail }: { cocktail: Cocktail }) => (
  <div className="mb-14">
    <div className="flex flex-col md:flex-row rounded-[20px] overflow-hidden">
      <div
        className="flex-1 min-h-[280px] md:min-h-[320px] flex items-center justify-center"
        style={{
          background: cocktail.image
            ? `url(${cocktail.image}) center/cover`
            : "linear-gradient(135deg, #2D3436 0%, #636E72 100%)",
        }}
      >
        {!cocktail.image && <span className="text-[100px]">🍸</span>}
      </div>
      <div className="flex-1 p-8 md:p-10 flex flex-col justify-center" style={{ background: cocktail.backgroundColor }}>
        <p className="font-sans text-[11px] uppercase tracking-[1px] text-white/80 mb-1.5">Featured Cocktail</p>
        <h3 className="font-sans text-[28px] md:text-[32px] font-semibold text-white mb-6">{cocktail.name}</h3>
        <p className="font-sans text-[15px] font-medium text-white mb-2.5">Ingredients:</p>
        <ul className="pl-5 mb-5 text-white/90 font-sans text-[15px] leading-[2]">
          {cocktail.ingredients.map((ing) => (
            <li key={ing}>{ing}</li>
          ))}
        </ul>
        <p className="font-sans text-[15px] text-white/85 italic leading-[1.7]">
          {cocktail.instructions}
          {cocktail.attribution && <> — {cocktail.attribution}</>}
        </p>
      </div>
    </div>
  </div>
);

/* ── Contact ──────────────────────────────────────── */
const ContactSection = ({ data }: { data: EventPageData }) => (
  <div className="bg-gray-light rounded-[20px] p-10 md:p-12 text-center">
    <p className="font-sans text-[24px] font-medium text-dark mb-2.5">{data.contactHeadline}</p>
    <p className="font-sans text-[16px] text-gray mb-6">{data.contactSubheadline}</p>
    <a
      href={data.contactButtonUrl}
      className="inline-flex items-center gap-2.5 px-8 py-4 bg-purple text-white rounded-xl font-sans text-[17px] font-medium no-underline hover:opacity-90 transition-opacity"
    >
      {data.contactButtonText}
    </a>
  </div>
);

/* ── Divider ──────────────────────────────────────── */
const Divider = () => <hr className="border-t border-border my-14" />;

/* ── Page ─────────────────────────────────────────── */
const EventDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? getEventBySlug(slug) : undefined;

  if (!data) return <NotFound />;

  return (
    <div>
      <main>
        <article>
          <Hero data={data} />

          <section className="max-w-[900px] mx-auto px-6 md:px-10 py-14">
            <InfoCards data={data} />
            <GetReady data={data} />
            <Divider />
            <RecipeCards recipes={data.recipes} menuTitle={data.menuTitle} menuSubtitle={data.menuSubtitle} />

            {data.winePairing && (
              <>
                <Divider />
                <WinePairingSection pairing={data.winePairing} />
              </>
            )}

            {data.cocktail && (
              <>
                <Divider />
                <CocktailSection cocktail={data.cocktail} />
              </>
            )}

            <Divider />
            <ContactSection data={data} />
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default EventDetailPage;
