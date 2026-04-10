import { useNavigate } from "react-router-dom";
import type { ExperienceData } from "@/data/experienceData";
import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ExperienceContentProps {
  data: ExperienceData;
  embedded?: boolean;
}

/* Gallery with arrow navigation */
const GallerySection = ({
  images,
  title,
  scrollRef,
}: {
  images: ExperienceData["galleryImages"];
  title?: string;
  scrollRef: React.RefObject<HTMLDivElement>;
}) => {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2);
  }, [scrollRef]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    return () => el.removeEventListener("scroll", checkScroll);
  }, [checkScroll, scrollRef]);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -280 : 280, behavior: "smooth" });
  };

  const widthMap = { small: "w-[200px]", medium: "w-[240px]", large: "w-[280px]" };

  return (
    <section className="py-8 relative group">
      <p className="text-[12px] font-bold tracking-[2px] uppercase text-gray mb-5 px-8 md:px-12">
        {title || "Moments from the night"}
      </p>
      <div className="relative">
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/90 shadow-md flex items-center justify-center hover:bg-white transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 text-dark" />
          </button>
        )}
        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/90 shadow-md flex items-center justify-center hover:bg-white transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-dark" />
          </button>
        )}
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto px-8 md:px-12 pb-4 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className={`${widthMap[img.width || "medium"]} h-[240px] rounded-xl overflow-hidden shrink-0`}
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceContent = ({ data, embedded = false }: ExperienceContentProps) => {
  const navigate = useNavigate();
  const go = (href: string) => {
    navigate(href);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const scrollRef = useRef<HTMLDivElement>(null);

  const heroHeight = embedded ? "h-[280px]" : "h-[320px]";

  return (
    <div className="font-sans">
      {/* 1. Hero */}
      <section className={`relative ${heroHeight} overflow-hidden ${embedded ? "rounded-t-2xl" : ""}`}>
        <img
          src={data.heroImage}
          alt={data.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
          <span className="inline-block text-[11px] font-bold tracking-[1px] uppercase text-white bg-white/15 backdrop-blur-sm px-3 py-1 rounded-full mb-3">
            {data.badge || "Example Experience"}
          </span>
          <p className="text-[14px] text-white/80 mb-1">{data.date}</p>
          <h1 className="text-[32px] md:text-[38px] font-bold text-white leading-[1.15] max-w-[480px]">
            {data.title}
          </h1>
          <p className="text-[15px] text-white/90 mt-2 max-w-[440px]">{data.tagline}</p>
        </div>
      </section>

      {/* 2. Menu */}
      <section className="px-8 md:px-12 pt-10 pb-8">
        <p className="text-[12px] font-bold tracking-[2px] uppercase text-gray mb-6">
          {data.menuSectionTitle || "The Menu"}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {data.menuItems.map((item, i) => (
            <div key={i} className="text-center">
              <div
                className="w-[72px] h-[72px] rounded-full flex items-center justify-center text-[32px] mx-auto mb-3"
                style={{ backgroundColor: item.iconBgColor }}
              >
                {item.icon}
              </div>
              <p className="text-[11px] font-bold tracking-[1px] uppercase text-gray mb-1">
                {item.courseType}
              </p>
              <p className="text-[15px] font-medium text-dark">{item.dishName}</p>
              <p className="text-[13px] text-gray">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Story + Quote */}
      <section className="px-8 md:px-12 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-[1.3]">
            <p className="text-[20px] md:text-[22px] leading-[1.7] text-dark mb-5">
              {data.introParagraph}
            </p>
            <p className="text-[16px] md:text-[17px] leading-[1.8] text-gray">
              {data.bodyParagraph}
            </p>
          </div>
          <div className="flex-[0.7]">
            <div className="bg-purple-pale rounded-2xl p-7">
              <p className="text-[22px] md:text-[24px] font-medium text-purple italic leading-[1.35]">
                {data.quote.text}
              </p>
              <p className="text-[14px] text-gray mt-4">{data.quote.attribution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Video (conditional) */}
      {data.video && (
        <section className="px-8 md:px-12 py-6">
          <div className="bg-dark rounded-2xl p-1">
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <img
                src={data.video.thumbnailUrl}
                alt="Video thumbnail"
                className="w-full h-full object-cover"
              />
              <button
                className="absolute inset-0 flex items-center justify-center"
                onClick={() => window.open(data.video!.videoUrl, "_blank")}
              >
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg">
                  <div
                    className="w-0 h-0 ml-1.5"
                    style={{
                      borderTop: "12px solid transparent",
                      borderBottom: "12px solid transparent",
                      borderLeft: "20px solid hsl(var(--purple))",
                    }}
                  />
                </div>
              </button>
              {data.video.duration && (
                <p className="absolute bottom-4 left-4 text-[14px] text-white/80">
                  ▶ Watch the highlights · {data.video.duration}
                </p>
              )}
            </div>
          </div>
        </section>
      )}

      {/* 5. Gallery */}
      <GallerySection
        images={data.galleryImages}
        title={data.gallerySectionTitle}
        scrollRef={scrollRef}
      />

      {/* 6. Chef's Notes (conditional) */}
      {data.chefNotes && (
        <section className="px-8 md:px-12 py-6">
          <div className="bg-gray-light rounded-xl p-6 md:p-7">
            <p className="text-[12px] font-bold tracking-[2px] uppercase text-gray mb-3">
              Chef's Notes
            </p>
            <p className="text-[16px] italic text-dark leading-[1.7]">{data.chefNotes.text}</p>
            <p className="text-[14px] font-medium text-purple mt-3">
              {data.chefNotes.attribution || "— Chef Joey"}
            </p>
          </div>
        </section>
      )}

      {/* 7. Stats Bar */}
      <section className="px-8 md:px-12 py-6">
        <div className="bg-gray-light rounded-xl p-6 flex items-center justify-around">
          {data.stats.map((stat, i) => (
            <div key={i} className="text-center flex-1 relative">
              {i > 0 && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-10 bg-border" />
              )}
              <p className="text-[28px] md:text-[32px] font-semibold text-purple">{stat.value}</p>
              <p className="text-[13px] md:text-[14px] text-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. CTA */}
      <section className="px-8 md:px-12 py-8 pb-10">
        <div
          className="rounded-[20px] p-8 md:p-10 text-center"
          style={{
            background: "linear-gradient(135deg, hsl(var(--purple)), hsl(var(--purple-light)))",
          }}
        >
          <h2 className="text-[24px] md:text-[26px] font-semibold text-white mb-2">
            {data.cta.headline}
          </h2>
          <p className="text-[15px] md:text-[16px] text-white/80 mb-6">
            {data.cta.subheadline}
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <button
              onClick={() => go(data.cta.primaryButton.href)}
              className="bg-white text-purple font-semibold text-[15px] md:text-[16px] px-7 md:px-8 py-3 md:py-4 rounded-xl hover:-translate-y-0.5 transition-all"
            >
              {data.cta.primaryButton.label}
            </button>
            <button
              onClick={() => go(data.cta.secondaryButton.href)}
              className="bg-transparent text-white font-semibold text-[15px] md:text-[16px] px-7 md:px-8 py-3 md:py-4 rounded-xl border-2 border-white/50 hover:-translate-y-0.5 transition-all"
            >
              {data.cta.secondaryButton.label}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperienceContent;
