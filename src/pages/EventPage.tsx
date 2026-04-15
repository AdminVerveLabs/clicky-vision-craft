import { useParams } from "react-router-dom";
import { getEventBySlug } from "@/data/eventData";
import Footer from "@/components/chef/Footer";
import CTAButton from "@/components/chef/CTAButton";
import NotFound from "./NotFound";
import chefJoeyKitchen from "@/assets/chef-joey-kitchen.jpg";

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="font-sans text-[12px] uppercase tracking-[2px] text-muted-foreground mb-4">
    {children}
  </p>
);

const EventPage = () => {
  const { eventSlug } = useParams<{ eventSlug: string }>();
  const data = eventSlug ? getEventBySlug(eventSlug) : undefined;

  if (!data) return <NotFound />;

  return (
    <div>
      {/* SEO */}
      <title>{data.metaTitle}</title>
      <meta name="description" content={data.metaDescription} />

      <main>
        <article>
          {/* 1. Hero */}
          <section
            className="relative w-full flex items-end"
            style={{
              height: "360px",
              backgroundImage: `url(${data.heroImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/55" />
            <div className="relative z-10 w-full px-8 md:px-16 py-12 pt-[100px]">
              <span
                className="inline-block font-sans text-[11px] uppercase tracking-[1px] text-white rounded-[20px] mb-3"
                style={{
                  background: "rgba(255,255,255,0.2)",
                  padding: "6px 14px",
                }}
              >
                {data.eventType === "corporate"
                  ? "YOUR CORPORATE EVENT"
                  : "YOUR PRIVATE EVENT"}
              </span>
              <p className="font-sans text-[15px] text-white/80 mb-2">
                {data.dateTime}
              </p>
              <h1 className="font-sans text-[32px] md:text-[44px] font-semibold text-white leading-[1.1] max-w-[600px] mb-2">
                {data.title}
              </h1>
              <p className="font-sans text-[18px] text-white/90">
                {data.tagline}
              </p>
            </div>
          </section>

          {/* 2. Content Area */}
          <div className="max-w-[900px] mx-auto px-6 md:px-10 py-10 md:py-14">
            {/* Welcome Section */}
            <section className="mb-14">
              <SectionLabel>WELCOME</SectionLabel>
              <h2 className="font-sans text-[26px] font-medium text-foreground mb-3">
                {data.welcomeHeading || "We're excited to cook with you!"}
              </h2>
              <p className="font-sans text-[16px] text-muted-foreground leading-[1.7]">
                {data.welcomeMessage ||
                  "You're all set for an unforgettable cooking experience. Below you'll find everything you need to prepare — from ingredients and recipes to event logistics. Get your apron ready and let's make something delicious together."}
              </p>
            </section>

            {/* Meet the Chef */}
            <section className="mb-14">
              <div className="bg-gray-light rounded-[16px] p-6 md:p-7 flex flex-col sm:flex-row gap-6 items-start">
                <img
                  src={chefJoeyKitchen}
                  alt="Chef Joey in the kitchen"
                  className="w-[120px] h-[120px] rounded-xl object-cover shrink-0"
                />
                <div>
                  <p className="font-sans text-[12px] uppercase tracking-[2px] text-muted-foreground mb-2">
                    MEET THE CHEF
                  </p>
                  <p className="font-sans text-[20px] font-semibold text-foreground mb-2">
                    Chef Joey
                  </p>
                  <p className="font-sans text-[15px] text-muted-foreground leading-[1.7] mb-3">
                    Born in Haiti and raised on bold Caribbean flavors, Chef Joey brings warmth, energy, and a whole lot of soul to every kitchen. His hands-on classes blend Creole tradition with modern technique — and a guaranteed good time.
                  </p>
                  <a
                    href="/about"
                    className="font-sans text-[15px] font-medium hover:underline"
                    style={{ color: "hsl(var(--purple))" }}
                  >
                    More About Joey →
                  </a>
                </div>
              </div>
            </section>

            {/* 3. Location & Duration */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
              {/* Location Card */}
              <div className="bg-gray-light rounded-[12px] p-6 md:p-7 flex items-start gap-5">
                <div
                  className="shrink-0 flex items-center justify-center rounded-[12px]"
                  style={{
                    width: 56,
                    height: 56,
                    background: "#E3F2FD",
                  }}
                >
                  <span className="text-[28px]">📍</span>
                </div>
                <div>
                  <p className="font-sans text-[12px] uppercase tracking-[0.5px] text-muted-foreground mb-1">
                    LOCATION
                  </p>
                  {data.location.type === "virtual" ? (
                    <>
                      <p className="font-sans text-[16px] font-medium text-foreground">
                        Virtual via Zoom
                      </p>
                      {data.location.meetingId && (
                        <p className="font-sans text-[14px] text-muted-foreground mt-1">
                          Meeting ID: {data.location.meetingId}
                          {data.location.passcode &&
                            ` · Passcode: ${data.location.passcode}`}
                        </p>
                      )}
                      {data.location.zoomLink && (
                        <a
                          href={data.location.zoomLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-sans text-[15px] font-medium mt-2 inline-block hover:underline"
                          style={{ color: "hsl(var(--purple))" }}
                        >
                          Join Meeting →
                        </a>
                      )}
                    </>
                  ) : (
                    <>
                      <p className="font-sans text-[16px] font-medium text-foreground">
                        {data.location.address}
                      </p>
                      {data.location.mapsUrl && (
                        <a
                          href={data.location.mapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-sans text-[15px] font-medium mt-2 inline-block hover:underline"
                          style={{ color: "hsl(var(--purple))" }}
                        >
                          Get Directions →
                        </a>
                      )}
                    </>
                  )}
                </div>
              </div>

              {/* Duration Card */}
              <div className="bg-gray-light rounded-[12px] p-6 md:p-7 flex items-start gap-5">
                <div
                  className="shrink-0 flex items-center justify-center rounded-[12px]"
                  style={{
                    width: 56,
                    height: 56,
                    background: "#FFF3E0",
                  }}
                >
                  <span className="text-[28px]">⏱</span>
                </div>
                <div>
                  <p className="font-sans text-[12px] uppercase tracking-[0.5px] text-muted-foreground mb-1">
                    DURATION
                  </p>
                  <p className="font-sans text-[16px] font-medium text-foreground">
                    {data.duration}
                  </p>
                  {data.arrivalNote && (
                    <p className="font-sans text-[14px] text-muted-foreground mt-1">
                      {data.arrivalNote}
                    </p>
                  )}
                </div>
              </div>
            </section>

            {/* 4. Get Ready */}
            <section className="mb-14">
              <SectionLabel>GET READY</SectionLabel>
              <p className="font-sans text-[18px] text-muted-foreground leading-[1.7] mb-7">
                {data.prepDescription}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {data.downloads.map((dl) => (
                  <a
                    key={dl.title}
                    href={dl.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-5 rounded-[14px] p-6 md:p-7 transition-opacity hover:opacity-90"
                    style={{ background: "#1a1a2e" }}
                  >
                    <div
                      className="shrink-0 flex items-center justify-center rounded-[12px]"
                      style={{
                        width: 52,
                        height: 52,
                        background: "rgba(255,255,255,0.1)",
                      }}
                    >
                      <span className="text-[24px]">{dl.icon}</span>
                    </div>
                    <div>
                      <p className="font-sans text-[17px] font-medium text-white">
                        {dl.title}
                      </p>
                      <p className="font-sans text-[14px] text-white/70">
                        {dl.subtitle}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </section>

            {/* 5. Divider */}
            <hr className="border-border my-14" />

            {/* 6. What We're Cooking */}
            <section className="mb-14">
              <SectionLabel>WHAT WE'RE COOKING</SectionLabel>
              <h2 className="font-sans text-[26px] font-medium text-foreground mb-1">
                {data.menuTitle}
                {data.menuSubtitle && (
                  <span className="text-[18px] text-muted-foreground font-normal ml-2">
                    {data.menuSubtitle}
                  </span>
                )}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {data.recipes.map((r) => (
                  <div
                    key={r.dishName}
                    className="bg-gray-light rounded-[16px] overflow-hidden"
                  >
                    <div
                      className="h-[200px]"
                      style={{
                        background: r.image
                          ? `url(${r.image}) center/cover`
                          : "linear-gradient(135deg, hsl(var(--purple-pale)), hsl(var(--orange-pale)))",
                      }}
                    />
                    <div className="p-6">
                      <p className="font-sans text-[11px] uppercase tracking-[0.5px] text-muted-foreground mb-1">
                        {r.courseType}
                      </p>
                      <p className="font-sans text-[20px] font-semibold text-foreground mb-2">
                        {r.dishName}
                      </p>
                      <a
                        href={r.recipeUrl}
                        className="font-sans text-[15px] font-medium hover:underline"
                        style={{ color: "hsl(var(--purple))" }}
                      >
                        View Recipe →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 7. Divider */}
            <hr className="border-border my-14" />

            {/* 8. Wine Pairing (conditional) */}
            {data.winePairing && (
              <section className="mb-14">
                <div
                  className="rounded-[20px] p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start"
                  style={{
                    background: "linear-gradient(135deg, #F8F4FC, #F3E8FF)",
                  }}
                >
                  <div
                    className="shrink-0 flex items-center justify-center rounded-full bg-white"
                    style={{
                      width: 100,
                      height: 100,
                      boxShadow: "0 4px 20px rgba(107,91,149,0.15)",
                    }}
                  >
                    <span className="text-[48px]">🍷</span>
                  </div>
                  <div className="flex-1">
                    <p
                      className="font-sans text-[12px] uppercase tracking-[2px] mb-2"
                      style={{ color: "#6B5B95" }}
                    >
                      WINE PAIRING
                    </p>
                    <p className="font-sans text-[22px] font-medium text-foreground mb-3">
                      {data.winePairing.curatorName}
                    </p>
                    <p className="font-sans text-[16px] italic text-muted-foreground leading-[1.7] mb-6">
                      "{data.winePairing.curatorQuote}"
                    </p>
                    <div className="space-y-4 mb-6">
                      {data.winePairing.wines.map((w) => (
                        <div key={w.name} className="flex gap-3">
                          <span className="text-[16px] mt-1">•</span>
                          <div>
                            <p className="font-sans text-[16px] font-medium text-foreground">
                              {w.name}
                            </p>
                            <p className="font-sans text-[14px] text-muted-foreground leading-[1.6]">
                              {w.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <a
                      href={data.winePairing.orderUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-sans text-[14px] font-medium text-white rounded-[10px] px-6 py-3.5 transition-opacity hover:opacity-90"
                      style={{ background: "#6B5B95" }}
                    >
                      🛒 {data.winePairing.orderButtonText}
                    </a>
                  </div>
                </div>
              </section>
            )}

            {/* 9. Cocktail (conditional) */}
            {data.cocktail && (
              <section className="mb-14">
                <div className="rounded-[20px] overflow-hidden flex flex-col md:flex-row">
                  <div
                    className="md:w-1/2 min-h-[320px] flex items-center justify-center"
                    style={{
                      background: data.cocktail.image
                        ? `url(${data.cocktail.image}) center/cover`
                        : "linear-gradient(135deg, #1a1a2e, #2d2d44)",
                    }}
                  >
                    {!data.cocktail.image && (
                      <span className="text-[72px]">🍸</span>
                    )}
                  </div>
                  <div
                    className="md:w-1/2 p-8 md:p-10"
                    style={{ background: data.cocktail.backgroundColor }}
                  >
                    <p className="font-sans text-[11px] uppercase tracking-[1px] text-white/80 mb-2">
                      FEATURED COCKTAIL
                    </p>
                    <h3 className="font-sans text-[28px] md:text-[32px] font-semibold text-white mb-5">
                      {data.cocktail.name}
                    </h3>
                    <p className="font-sans text-[15px] font-medium text-white mb-2">
                      Ingredients:
                    </p>
                    <ul className="mb-5">
                      {data.cocktail.ingredients.map((ing) => (
                        <li
                          key={ing}
                          className="font-sans text-[15px] text-white leading-[2]"
                        >
                          {ing}
                        </li>
                      ))}
                    </ul>
                    <p className="font-sans text-[15px] italic text-white/85 leading-[1.7]">
                      {data.cocktail.instructions}
                    </p>
                    {data.cocktail.attribution && (
                      <p className="font-sans text-[13px] text-white/60 mt-3">
                        — {data.cocktail.attribution}
                      </p>
                    )}
                  </div>
                </div>
              </section>
            )}

            {/* 10. Contact */}
            <section className="bg-gray-light rounded-[20px] p-10 md:p-12 text-center mb-10">
              <h2 className="font-sans text-[24px] font-medium text-foreground mb-2">
                {data.contactHeadline}
              </h2>
              <p className="font-sans text-[16px] text-muted-foreground mb-6">
                {data.contactSubheadline}
              </p>
              <a href={data.contactButtonUrl}>
                <CTAButton variant="primary" size="lg">
                  {data.contactButtonText}
                </CTAButton>
              </a>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default EventPage;
