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
    className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-6"
    style={{ animation: "fadeIn 0.2s ease" }}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="bg-white rounded-xl max-w-[440px] w-full relative shadow-[0_40px_80px_rgba(0,0,0,0.25)] overflow-hidden"
      style={{ animation: "slideUp 0.3s ease" }}
    >
      {/* Banner image */}
      <div className="relative h-[140px]">
        <img
          src={getClassImage(cls.id)}
          alt={cls.title}
          className="w-full h-full object-cover"
        />
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm border-none text-white text-sm cursor-pointer flex items-center justify-center transition-colors hover:bg-black/60 z-10"
        >
          ✕
        </button>
      </div>

      {/* Content area */}
      <div className="px-5 pb-5 pt-4">
        {/* Header row: badge + spots | price */}
        <div className="flex items-center justify-between mb-1.5">
          <div className="flex items-center gap-2">
            <span className={`${cls.soldOut ? "bg-dark/20" : "bg-green"} text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full font-sans tracking-wide`}>
              {cls.soldOut ? "SOLD OUT" : cls.type.toUpperCase()}
            </span>
            {cls.spots > 0 && !cls.soldOut && (
              <span className="text-orange text-[11px] font-sans font-medium">🔥 {cls.spots} spots</span>
            )}
          </div>
          <span className="font-sans text-lg font-extrabold text-dark">
            {cls.price}<span className="text-[11px] font-normal text-dark/50">/person</span>
          </span>
        </div>

        {/* Title */}
        <h2 className="font-sans text-lg font-medium text-dark leading-snug mb-0.5">{cls.title}</h2>

        {/* Single meta line */}
        <p className="font-sans text-[12px] text-dark/40 mb-3">
          February {cls.day}, 2026 · {cls.time} · {cls.duration} · {cls.level}
        </p>

        {/* Description */}
        <p className="font-sans text-[13px] text-dark/70 leading-relaxed mb-4">{cls.description}</p>

        {/* Divider + On the Menu */}
        <div className="border-t border-dark/10 pt-3 mb-4">
          <p className="font-sans text-[10px] font-bold text-dark/30 uppercase tracking-[1.5px] mb-1.5">On the Menu</p>
          <p className="font-sans text-[13px] text-dark/60 leading-relaxed">{cls.menu.join(" · ")}</p>
        </div>

        {/* What's Included — compact single line */}
        <div className="flex items-center gap-2.5 mb-5 px-3 py-2.5 bg-green/10 rounded-lg">
          <div className="w-6 h-6 rounded-md bg-green/20 flex items-center justify-center text-xs shrink-0">✅</div>
          <p className="font-sans text-[12px] text-dark/60">{cls.included}</p>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-3">
          {cls.soldOut ? (
            <div className="w-full">
              <button className="w-full bg-dark/5 text-dark/40 border-none px-6 py-3 rounded-xl font-semibold text-[13px] cursor-default font-sans">
                Sold Out — Join Waitlist
              </button>
            </div>
          ) : (
            <>
              <div className="w-[40%]">
                <CTAButton variant="secondary" size="md">Gift This Class</CTAButton>
              </div>
              <div className="w-[60%]">
                <CTAButton variant="green" size="md">Get Cooking</CTAButton>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default ClassModal;
