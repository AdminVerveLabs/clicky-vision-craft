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
      <div className="relative h-[200px]">
        <img
          src={getClassImage(cls.id)}
          alt={cls.title}
          className="w-full h-full object-cover"
        />
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border-none text-white text-base cursor-pointer flex items-center justify-center transition-colors hover:bg-black/70 z-10"
          aria-label="Close modal"
        >
          ✕
        </button>
      </div>

      {/* Content area */}
      <div style={{ padding: "28px 32px 32px" }}>
        {/* Header row: badge + spots | price */}
        <div className="flex items-center justify-between mb-4">
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
        <h2 className="font-sans font-semibold text-dark leading-snug mb-2" style={{ fontSize: "26px" }}>
          {cls.title}
        </h2>

        {/* Meta line */}
        <p className="font-sans text-dark/50 mb-5" style={{ fontSize: "16px" }}>
          February {cls.day}, 2026 · {cls.time} · {cls.duration} · {cls.level}
        </p>

        {/* Description */}
        <p className="font-sans text-dark/70 mb-6" style={{ fontSize: "16px", lineHeight: 1.6 }}>
          {cls.description}
        </p>

        {/* On the Menu — with subtle background */}
        <div className="bg-secondary mb-5" style={{ borderRadius: "12px", padding: "20px" }}>
          <p
            className="font-sans font-semibold text-dark/40 uppercase mb-2"
            style={{ fontSize: "12px", letterSpacing: "1px" }}
          >
            On the Menu
          </p>
          <p className="font-sans text-dark" style={{ fontSize: "16px", lineHeight: 1.6 }}>
            {cls.menu.join(" · ")}
          </p>
        </div>

        {/* What's Included callout */}
        <div className="flex items-start gap-3 bg-green/10 mb-7" style={{ borderRadius: "12px", padding: "18px 20px" }}>
          <div
            className="bg-green/20 flex items-center justify-center shrink-0"
            style={{ width: "22px", height: "22px", borderRadius: "6px", marginTop: "2px" }}
          >
            <span style={{ fontSize: "13px" }}>✅</span>
          </div>
          <div>
            <p
              className="font-sans font-semibold text-green uppercase mb-1"
              style={{ fontSize: "13px" }}
            >
              What's Included
            </p>
            <p className="font-sans text-green" style={{ fontSize: "15px", lineHeight: 1.5 }}>
              {cls.included}
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex" style={{ gap: "14px" }}>
          {cls.soldOut ? (
            <button
              className="w-full bg-dark/5 text-dark/40 border-none font-semibold cursor-default font-sans"
              style={{ fontSize: "16px", padding: "16px", borderRadius: "10px" }}
            >
              Sold Out — Join Waitlist
            </button>
          ) : (
            <>
              <div className="w-[40%]">
                <CTAButton variant="secondary" size="lg">Gift This Class</CTAButton>
              </div>
              <div className="w-[60%]">
                <CTAButton variant="green" size="lg">Get Cooking</CTAButton>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default ClassModal;
