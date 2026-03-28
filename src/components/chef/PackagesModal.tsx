import { X } from "lucide-react";

type EventType = "private" | "corporate";

interface PackagesModalProps {
  eventType: EventType;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

const packages = [
  { name: "Classic", price: "$135", courses: "4 courses", highlight: false },
  { name: "Signature", price: "$160", courses: "6 courses", badge: "Most Popular", highlight: true },
  { name: "Chef's Table", price: "$180", courses: "6 courses + 2 drinks", highlight: false },
];

const addOns = [
  { emoji: "📹", name: "Video", price: "$250/event" },
  { emoji: "👔", name: "Apron", price: "$50/person" },
  { emoji: "🍷", name: "Beer & Wine", price: "$20/person" },
];

const content = {
  private: {
    title: "Private Event Packages",
    callout: "Ask about special pricing for couples and custom experiences",
    cta: "Plan My Event",
  },
  corporate: {
    title: "Team Experience Packages",
    callout: "Ask about custom experiences for your team",
    cta: "Get in Touch",
  },
};

const PackagesModal = ({ eventType, isOpen, onClose, onSubmit }: PackagesModalProps) => {
  if (!isOpen) return null;

  const c = content[eventType];

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-dark/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-[20px] max-w-[720px] w-full shadow-2xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-gray-light flex items-center justify-center text-gray hover:text-dark transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="py-9 px-11">
          {/* Header */}
          <div className="text-center mb-8">
            <span className="inline-block font-sans text-[11px] font-bold tracking-[1.5px] uppercase text-white bg-purple px-4 py-1.5 rounded-full">
              Packages
            </span>
            <h2 className="font-sans text-[30px] font-semibold text-dark mt-[18px]">
              {c.title}
            </h2>
            <p className="font-sans text-[17px] text-gray mt-2">
              Every package includes a memorable, chef-led experience
            </p>
          </div>

          {/* Package Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-7">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-[16px] border py-7 px-6 text-center transition-all duration-200 ${
                  pkg.highlight
                    ? "border-purple border-2 bg-[#FDFBFF] shadow-lg shadow-purple/10"
                    : "border-border"
                }`}
              >
                {pkg.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 font-sans text-[11px] font-bold text-white bg-purple px-3.5 py-1 rounded-xl whitespace-nowrap">
                    {pkg.badge}
                  </span>
                )}
                <h3 className="font-sans text-[20px] font-semibold text-dark mb-4">{pkg.name}</h3>
                <p className="font-sans text-[36px] font-semibold text-purple leading-tight">{pkg.price}</p>
                <p className="font-sans text-[14px] text-gray mt-1 mb-4">starting at /person</p>
                <p className="font-sans text-[17px] font-medium text-dark">{pkg.courses}</p>
              </div>
            ))}
          </div>

          {/* Add-Ons */}
          <div className="mb-7">
            <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.5px] text-gray text-center mb-3.5">
              Optional Add-Ons
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {addOns.map((a) => (
                <div
                  key={a.name}
                  className="flex items-center gap-3 bg-gray-light rounded-[10px] py-3.5 px-4"
                >
                  <span className="text-2xl">{a.emoji}</span>
                  <div className="text-left">
                    <p className="font-sans text-[14px] font-medium text-dark">{a.name}</p>
                    <p className="font-sans text-[13px] text-gray">{a.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Callout */}
          <p className="font-sans text-[16px] font-medium text-purple text-center mb-4">
            {c.callout}
          </p>

          {/* CTA */}
          <div className="text-center mb-3.5">
            <button
              onClick={onSubmit}
              className="inline-flex items-center gap-2 rounded-xl font-sans font-medium px-12 py-[18px] text-[18px] bg-purple text-white shadow-[0_4px_14px_hsl(var(--purple)/0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 cursor-pointer"
            >
              {c.cta}
            </button>
          </div>

          {/* Disclaimers */}
          <p className="font-sans text-[12px] text-gray text-center">
            Minimum 4 people / $500 · Prices vary based on dishes & ingredients · Dessert offered as a course
          </p>
        </div>
      </div>
    </div>
  );
};

export default PackagesModal;
