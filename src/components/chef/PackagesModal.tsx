import { X } from "lucide-react";

type EventType = "private" | "corporate";

interface PackagesModalProps {
  eventType: EventType;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

const packages = [
  {
    name: "Classic",
    price: "$135",
    courses: "4 courses",
    highlight: false,
  },
  {
    name: "Signature",
    price: "$160",
    courses: "6 courses",
    badge: "Most Popular",
    highlight: true,
  },
  {
    name: "Chef's Table",
    price: "$180",
    courses: "6 courses + 2 drinks",
    highlight: false,
  },
];

const addOns = [
  { emoji: "📹", name: "Video", price: "$250/event" },
  { emoji: "👔", name: "Apron", price: "$50/person" },
  { emoji: "🍷", name: "Beer & Wine", price: "$20/person" },
];

const content = {
  private: {
    title: "Private Event Packages",
    callout: "💜 Ask about special pricing for couples and custom experiences",
    cta: "Plan My Event",
  },
  corporate: {
    title: "Team Experience Packages",
    callout: "💜 Ask about custom experiences for your team",
    cta: "Get in Touch",
  },
};

const PackagesModal = ({ eventType, isOpen, onClose, onSubmit }: PackagesModalProps) => {
  if (!isOpen) return null;

  const c = content[eventType];

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-dark/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl max-w-[680px] w-full shadow-2xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-gray-light flex items-center justify-center text-gray hover:text-dark transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-7">
          {/* Header */}
          <div className="text-center mb-5">
            <span className="inline-block font-sans text-[11px] font-bold tracking-[2px] uppercase text-white bg-purple px-4 py-1.5 rounded-full mb-3">
              Packages
            </span>
            <h2 className="font-sans text-[24px] font-semibold text-dark">
              {c.title}
            </h2>
            <p className="font-sans text-[14px] text-gray mt-1.5">
              Every package includes a memorable, chef-led experience
            </p>
          </div>

          {/* Package Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-[18px]">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-xl border p-[18px] text-center transition-all duration-200 ${
                  pkg.highlight
                    ? "border-purple border-2 shadow-lg shadow-purple/10"
                    : "border-border"
                }`}
              >
                {pkg.badge && (
                  <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 font-sans text-[10px] font-bold text-white bg-purple px-3 py-0.5 rounded-full whitespace-nowrap">
                    {pkg.badge}
                  </span>
                )}
                <h3 className="font-sans text-[17px] font-semibold text-dark mb-1">{pkg.name}</h3>
                <p className="font-sans text-[26px] font-semibold text-purple leading-tight">{pkg.price}</p>
                <p className="font-sans text-[12px] text-gray mb-3">starting at /person</p>
                <div className="bg-gray-light rounded-lg px-2.5 py-2">
                  <p className="font-sans text-[14px] font-medium text-dark">{pkg.courses}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Add-Ons */}
          <div className="mb-4">
            <p className="font-sans text-[13px] font-semibold text-dark text-center mb-2.5">Optional Add-Ons</p>
            <div className="flex flex-wrap justify-center gap-2.5">
              {addOns.map((a) => (
                <span
                  key={a.name}
                  className="inline-flex items-center gap-1.5 bg-gray-light rounded-lg px-3.5 py-2 font-sans text-[13px] text-dark"
                >
                  {a.emoji} {a.name} <span className="font-bold">{a.price}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Callout */}
          <div className="bg-purple-pale rounded-[10px] px-4 py-3 text-center mb-4">
            <p className="font-sans text-[14px] font-medium text-purple">{c.callout}</p>
          </div>

          {/* CTA */}
          <div className="text-center mb-3.5">
            <button
              onClick={onSubmit}
              className="inline-flex items-center gap-2 rounded-full font-sans font-medium px-9 py-3.5 text-[15px] bg-purple text-white shadow-[0_4px_14px_hsl(var(--purple)/0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 cursor-pointer"
            >
              {c.cta}
            </button>
          </div>

          {/* Disclaimers */}
          <p className="font-sans text-[11px] text-gray text-center">
            Minimum 4 people / $500 · Prices vary based on dishes & ingredients · Dessert offered as a course
          </p>
        </div>
      </div>
    </div>
  );
};

export default PackagesModal;
