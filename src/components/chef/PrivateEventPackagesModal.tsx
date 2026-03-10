import { X, Check, Cake, Wine, Sparkles } from "lucide-react";

interface PrivateEventPackagesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGetInTouch: () => void;
}

const packages = [
  {
    name: "Intimate",
    price: "$125",
    unit: "/person",
    features: ["Up to 10 guests", "Custom menu selection", "Chef-led cooking experience", "Shared dining experience"],
    highlight: false,
  },
  {
    name: "Celebration",
    price: "$165",
    unit: "/person",
    badge: "Most Popular",
    features: ["Up to 20 guests", "Welcome cocktails on arrival", "Recipe cards to take home", "Event photo package"],
    highlight: true,
  },
  {
    name: "Grand",
    price: "$200",
    unit: "/person",
    features: ["Up to 30 guests", "Wine pairing experience", "Premium seasonal ingredients", "Custom décor consultation"],
    highlight: false,
  },
];

const addOns = [
  { icon: Cake, name: "Custom Cake", price: "$150", unit: "flat rate" },
  { icon: Wine, name: "Wine Upgrade", price: "$20", unit: "/person" },
  { icon: Sparkles, name: "Décor Package", price: "$250", unit: "flat rate" },
];

const PrivateEventPackagesModal = ({ isOpen, onClose, onGetInTouch }: PrivateEventPackagesModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-dark/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-3xl max-w-[900px] w-full max-h-[90vh] overflow-y-auto md:max-h-none md:overflow-visible shadow-2xl">
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
            <h2 className="font-sans text-[26px] md:text-[30px] font-extrabold text-dark">
              Private Event Packages
            </h2>
            <p className="font-sans text-base text-gray mt-2 max-w-[480px] mx-auto">
              Choose the perfect package for your celebration — every tier includes a memorable, chef-led experience.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-6">
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
                <h3 className="font-sans text-[22px] font-bold text-dark mb-1">{pkg.name}</h3>
                <div className="flex items-baseline gap-0.5 mb-3">
                  <span className="font-sans text-[28px] font-extrabold text-dark">{pkg.price}</span>
                  <span className="font-sans text-sm text-gray">{pkg.unit}</span>
                </div>
                <ul className="space-y-2">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-green/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-green" />
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
            <h3 className="font-sans text-[22px] font-bold text-dark mb-3 text-center">Optional Add-Ons</h3>
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
              className="inline-flex items-center gap-2 rounded-full font-semibold font-sans px-8 py-3 text-base bg-purple text-white shadow-[0_4px_14px_hsl(var(--purple)/0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 cursor-pointer"
            >
              Plan My Event
            </button>
            <p className="font-sans text-sm text-gray mt-2">
              Tell us about your celebration and we'll send a tailored proposal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateEventPackagesModal;
