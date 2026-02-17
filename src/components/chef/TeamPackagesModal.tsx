import { X, Check, Video, UtensilsCrossed, Shirt } from "lucide-react";

interface TeamPackagesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGetInTouch: () => void;
}

const packages = [
  {
    name: "Essentials",
    price: "$50",
    unit: "/person",
    features: ["Hands-on cooking experience", "All ingredients provided", "Chef-led instruction", "Shared meal together"],
    highlight: false,
  },
  {
    name: "Classic",
    price: "$95",
    unit: "/person",
    badge: "Most Popular",
    features: ["Everything in Essentials", "Welcome drinks on arrival", "Recipe cards to take home", "Team photo package"],
    highlight: true,
  },
  {
    name: "Premium",
    price: "$150",
    unit: "/person",
    features: ["Everything in Classic", "Wine pairing experience", "Premium seasonal ingredients", "Custom menu consultation"],
    highlight: false,
  },
  {
    name: "VIP",
    price: "$225",
    unit: "/person",
    features: ["Everything in Premium", "Dedicated private chef", "Branded experience elements", "Post-event highlight reel"],
    highlight: false,
  },
];

const addOns = [
  { icon: Video, name: "Event Videography", price: "$350", unit: "flat rate" },
  { icon: UtensilsCrossed, name: "Extended Catering", price: "$25", unit: "/person" },
  { icon: Shirt, name: "Custom Aprons & Swag", price: "$18", unit: "/person" },
];

const TeamPackagesModal = ({ isOpen, onClose, onGetInTouch }: TeamPackagesModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-dark/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-3xl max-w-[1100px] w-full max-h-[90vh] overflow-y-auto md:max-h-none md:overflow-visible shadow-2xl">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-gray-light flex items-center justify-center text-gray hover:text-dark transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <span className="inline-block font-sans text-xs font-bold tracking-[2px] uppercase text-purple bg-purple-pale px-4 py-1.5 rounded-full mb-2">
              Packages
            </span>
            <h2 className="font-serif text-[26px] md:text-[30px] font-extrabold text-dark">
              Team Experience Packages
            </h2>
            <p className="font-sans text-base text-gray mt-2 max-w-[480px] mx-auto">
              Choose the perfect tier for your team — every package includes a memorable, chef-led experience.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-2xl border p-5 transition-all duration-200 ${
                  pkg.highlight
                    ? "border-purple border-2 shadow-lg shadow-purple/10"
                    : "border-border hover:border-purple/40"
                }`}
              >
                {pkg.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 font-sans text-[11px] font-bold text-white bg-purple px-3 py-1 rounded-full whitespace-nowrap">
                    {pkg.badge}
                  </span>
                )}
                <h3 className="font-serif text-[22px] font-bold text-dark mb-1">{pkg.name}</h3>
                <div className="flex items-baseline gap-0.5 mb-3">
                  <span className="font-serif text-[28px] font-extrabold text-dark">{pkg.price}</span>
                  <span className="font-sans text-sm text-gray">{pkg.unit}</span>
                </div>
                <ul className="space-y-2">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-purple-pale flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-purple" />
                      </div>
                      <span className="font-sans text-[12px] text-dark leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Add-Ons */}
          <div className="mb-6">
            <h3 className="font-serif text-[22px] font-bold text-dark mb-3 text-center">Optional Add-Ons</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {addOns.map((a) => (
                <div key={a.name} className="bg-cream rounded-xl p-4 border border-border flex items-center gap-4">
                  <div className="w-9 h-9 rounded-xl bg-purple-pale flex items-center justify-center shrink-0">
                    <a.icon className="w-5 h-5 text-purple" />
                  </div>
                  <div>
                    <p className="font-sans text-[14px] font-semibold text-dark">{a.name}</p>
                    <p className="font-sans text-[13px] text-gray">
                      {a.price} <span className="text-gray/60">{a.unit}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <button
              onClick={onGetInTouch}
              className="inline-flex items-center gap-2 rounded-full font-semibold font-sans px-8 py-3 text-base bg-orange text-white shadow-[0_4px_14px_hsl(var(--orange)/0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 cursor-pointer"
            >
              Get in Touch!
            </button>
            <p className="font-sans text-sm text-gray mt-2">
              Tell us about your event and we'll send a tailored proposal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPackagesModal;
