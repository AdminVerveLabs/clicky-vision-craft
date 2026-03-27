import { ClassData } from "@/data/classData";

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
      className="bg-white rounded-3xl max-w-[820px] w-full max-h-[90vh] overflow-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden relative shadow-[0_40px_80px_rgba(0,0,0,0.25)]"
      style={{ animation: "slideUp 0.3s ease" }}
    >
      {/* Header */}
      <div className="bg-gradient-to-br from-purple to-purple-dark px-10 pt-10 pb-12 rounded-t-3xl relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-[200px] h-[200px] rounded-full bg-white/5" />
        <div className="absolute -bottom-16 left-[30%] w-[300px] h-[300px] rounded-full bg-white/[0.03]" />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/15 border-none text-white text-lg cursor-pointer flex items-center justify-center transition-colors hover:bg-white/25"
        >
          ✕
        </button>
        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            <span className={`${cls.soldOut ? "bg-white/20" : "bg-green"} text-white text-[11px] font-bold px-3 py-1 rounded-full font-sans tracking-wide`}>
              {cls.soldOut ? "SOLD OUT" : cls.type.toUpperCase()}
            </span>
          </div>
          <div className="text-5xl mb-3">{cls.emoji}</div>
          <h2 className="font-sans text-4xl font-extrabold text-white leading-tight mb-2">{cls.title}</h2>
          <p className="font-sans text-lg text-white/70">February {cls.day}, 2026 · {cls.time}</p>
        </div>
      </div>

      {/* Photo Strip */}
      <div className="w-full h-[180px] overflow-hidden">
        <img src={getClassImage(cls.id)} alt={cls.title} className="w-full h-full object-cover" />
      </div>

      {/* Body */}
      <div className="p-10">
        <p className="font-sans text-base text-dark leading-[1.8] mb-8">{cls.description}</p>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {[
            { icon: "⏱️", label: "Duration", value: cls.duration, color: "purple" },
            { icon: "📊", label: "Level", value: cls.level, color: "green" },
            { icon: "💰", label: "Price", value: `${cls.price} / person`, color: "sage" },
            { icon: "📍", label: "Location", value: cls.location, color: "purple" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-cream rounded-[14px] px-4 py-3.5">
              <div className={`w-[38px] h-[38px] rounded-[10px] flex items-center justify-center text-lg shrink-0 ${
                item.color === "purple" ? "bg-purple/10" : item.color === "green" ? "bg-green/10" : "bg-sage/10"
              }`}>
                {item.icon}
              </div>
              <div>
                <p className={`font-sans text-[11px] font-bold uppercase tracking-[1px] mb-0.5 ${
                  item.color === "purple" ? "text-purple" : item.color === "green" ? "text-green" : "text-sage"
                }`}>
                  {item.label}
                </p>
                <p className="font-sans text-sm text-dark leading-snug">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Menu */}
        <div className="bg-gray-light rounded-2xl p-6 mb-8">
          <h3 className="font-sans text-xl font-bold text-dark mb-4">On the Menu</h3>
          <div className="grid grid-cols-2 gap-2.5">
            {cls.menu.map((item, i) => (
              <div key={i} className="flex items-center gap-2.5 bg-white rounded-[10px] px-3.5 py-2.5">
                <div className="w-2 h-2 rounded-full bg-purple shrink-0" />
                <span className="font-sans text-sm text-dark font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Included */}
        <div className="flex items-start gap-3 mb-8 p-4 bg-green/10 rounded-[14px]">
          <span className="text-xl">✅</span>
          <div>
            <p className="font-sans text-[13px] font-bold text-green uppercase tracking-[1px] mb-1">What's Included</p>
            <p className="font-sans text-sm text-dark leading-relaxed">{cls.included}</p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex gap-3 items-center justify-between pt-6 border-t border-gray-light">
          <div>
            <span className="font-sans text-[28px] font-extrabold text-dark">{cls.price}</span>
            <span className="font-sans text-sm text-gray ml-1">/ person</span>
          </div>
          <div className="flex gap-3">
            {cls.soldOut ? (
              <button className="bg-gray-light text-gray border-none px-8 py-3.5 rounded-full font-semibold text-[15px] cursor-default font-sans">
                Sold Out — Join Waitlist
              </button>
            ) : (
              <>
                <button className="bg-transparent text-purple border-2 border-purple px-6 py-3 rounded-full font-semibold text-sm cursor-pointer font-sans">
                  Gift This Class
                </button>
                <button className="bg-purple text-white border-none px-8 py-3.5 rounded-full font-semibold text-[15px] cursor-pointer font-sans shadow-[0_4px_14px_hsl(var(--purple)/0.3)] transition-all hover:-translate-y-0.5">
                  Get Cooking
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ClassModal;
