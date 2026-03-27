import { ClassData } from "@/data/classData";
import CTAButton from "./CTAButton";

import ywcaKitchen006 from "@/assets/ywca-kitchen-006.jpg";
import ywcaKitchen014 from "@/assets/ywca-kitchen-014.jpg";
import ywcaKitchen056 from "@/assets/ywca-kitchen-056.jpg";
import ywcaKitchen074 from "@/assets/ywca-kitchen-074.jpg";
import ywcaKitchen080 from "@/assets/ywca-kitchen-080.jpg";
import chefJoey58 from "@/assets/chef-joey-58.jpg";
import chefJoey66 from "@/assets/chef-joey-66.jpg";
import chefJoey83 from "@/assets/chef-joey-83.jpg";
import chefJoey85 from "@/assets/chef-joey-85.jpg";

const CLASS_IMAGES: Record<number, string> = {
  1: ywcaKitchen074,
  2: chefJoey58,
  3: ywcaKitchen006,
  4: ywcaKitchen056,
  5: chefJoey66,
  6: ywcaKitchen014,
  7: ywcaKitchen080,
  8: chefJoey83,
  9: chefJoey85,
};

const getClassImage = (id: number) => CLASS_IMAGES[id] || ywcaKitchen074;

const DISH_EMOJIS = ["🍛", "🥘", "🍜", "🫕", "🥗", "🍣", "🥩", "🧆"];

interface ClassModalProps {
  cls: ClassData;
  onClose: () => void;
}

const ClassModal = ({ cls, onClose }: ClassModalProps) => (
  <div
    onClick={onClose}
    className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
    style={{ animation: "fadeIn 0.2s ease" }}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="bg-white w-full max-w-[540px] relative overflow-hidden"
      style={{
        borderRadius: "16px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)",
        animation: "slideUp 0.3s ease",
      }}
    >
      {/* Banner image — 200px tall */}
      <div className="relative h-[150px]">
        <img
          src={getClassImage(cls.id)}
          alt={cls.title}
          className="w-full h-full object-cover"
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border-none text-white text-base cursor-pointer flex items-center justify-center transition-colors hover:bg-black/70 z-10"
          aria-label="Close modal"
        >
          ✕
        </button>
      </div>

      {/* Content area */}
      <div style={{ padding: "20px 24px 24px" }}>
        {/* Header row: badge + spots | price */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <span
              className={`${cls.soldOut ? "bg-dark/20" : "bg-green"} text-white font-bold font-sans tracking-wide`}
              style={{ fontSize: "12px", padding: "5px 12px", borderRadius: "6px" }}
            >
              {cls.soldOut ? "SOLD OUT" : cls.type.toUpperCase()}
            </span>
            {cls.spots > 0 && !cls.soldOut && (
              <span className="text-orange font-sans font-bold" style={{ fontSize: "14px" }}>
                🔥 {cls.spots} spots left
              </span>
            )}
          </div>
          <span className="font-sans font-semibold text-dark" style={{ fontSize: "28px" }}>
            {cls.price}
            <span className="font-normal text-dark/50" style={{ fontSize: "15px" }}>/person</span>
          </span>
        </div>

        {/* Title */}
        <h2 className="font-sans font-semibold text-dark leading-snug" style={{ fontSize: "22px", marginBottom: "6px" }}>
          {cls.title}
        </h2>

        {/* Meta line */}
        <p className="font-sans text-dark/50" style={{ fontSize: "14px", marginBottom: "14px" }}>
          February {cls.day}, 2026 · {cls.time} · {cls.duration} · {cls.level}
        </p>

        {/* Description */}
        <p className="font-sans text-dark/70" style={{ fontSize: "15px", lineHeight: 1.6, marginBottom: "18px" }}>
          {cls.description}
        </p>

        {/* On the Menu — 2×2 grid with dish thumbnails */}
        <div className="bg-secondary" style={{ borderRadius: "12px", padding: "16px", marginBottom: "14px" }}>
          <p
            className="font-sans font-semibold text-dark/40 uppercase mb-2"
            style={{ fontSize: "11px", letterSpacing: "1px" }}
          >
            On the Menu
          </p>
          <div className="grid grid-cols-2" style={{ gap: "10px" }}>
            {cls.menu.map((dish, i) => (
              <div key={i} className="flex items-center gap-3">
                <div
                  className="bg-white shrink-0 flex items-center justify-center"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "8px",
                    fontSize: "20px",
                  }}
                >
                  {DISH_EMOJIS[i % DISH_EMOJIS.length]}
                </div>
                <span className="font-sans font-medium text-dark" style={{ fontSize: "13px" }}>
                  {dish}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* What's Included callout — compact single row */}
        <div
          className="flex items-center gap-3 bg-green/10"
          style={{ borderRadius: "12px", padding: "12px 14px", marginBottom: "18px" }}
        >
          <div
            className="bg-green/20 flex items-center justify-center shrink-0"
            style={{ width: "22px", height: "22px", borderRadius: "6px" }}
          >
            <span style={{ fontSize: "13px" }}>✅</span>
          </div>
          <p className="font-sans text-green font-medium" style={{ fontSize: "14px", lineHeight: 1.4 }}>
            {cls.included}
          </p>
        </div>

        {/* CTA Buttons — right-aligned */}
        <div className="flex justify-end" style={{ gap: "14px" }}>
          {cls.soldOut ? (
            <button
              className="bg-dark/5 text-dark/40 border-none font-medium cursor-default font-sans"
              style={{ fontSize: "15px", padding: "14px 32px", borderRadius: "10px" }}
            >
              Sold Out — Join Waitlist
            </button>
          ) : (
            <>
              <CTAButton variant="secondary" size="lg">Gift This Class</CTAButton>
              <CTAButton variant="green" size="lg">Get Cooking</CTAButton>
            </>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default ClassModal;
