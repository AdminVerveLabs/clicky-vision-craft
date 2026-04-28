import { X, Users, PartyPopper, ArrowRight } from "lucide-react";

interface AudienceRouterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (audience: "b2c" | "b2b") => void;
}

const AudienceRouterModal = ({ isOpen, onClose, onSelect }: AudienceRouterModalProps) => {
  if (!isOpen) return null;

  const choices: Array<{
    id: "b2c" | "b2b";
    title: string;
    desc: string;
    icon: typeof Users;
    accent: string;
  }> = [
    {
      id: "b2c",
      title: "Private Event",
      desc: "Birthdays, anniversaries, friends, family — let's celebrate.",
      icon: PartyPopper,
      accent: "hsl(var(--purple))",
    },
    {
      id: "b2b",
      title: "Teams & Corporate",
      desc: "Team building, all-hands, client entertainment, and more.",
      icon: Users,
      accent: "hsl(var(--green))",
    },
  ];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-[24px] w-full max-w-[640px] relative shadow-[0_24px_60px_rgba(0,0,0,0.25)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-11 h-11 rounded-full bg-gray-light hover:bg-border flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5 text-dark" />
        </button>

        <div className="p-8 md:p-10 text-center">
          <p className="font-sans text-[12px] uppercase tracking-[2px] text-purple font-bold mb-3">
            Let's Chat
          </p>
          <h2 className="font-sans text-[26px] md:text-[32px] font-extrabold text-dark mb-3 leading-[1.15]">
            What kind of event are you planning?
          </h2>
          <p className="font-sans text-[15px] text-gray mb-8 max-w-[440px] mx-auto leading-[1.6]">
            Pick the option that fits best — we'll tailor the next step to you.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {choices.map((c) => {
              const Icon = c.icon;
              return (
                <button
                  key={c.id}
                  onClick={() => onSelect(c.id)}
                  className="group text-left bg-white border-2 border-border hover:border-purple rounded-[18px] p-6 transition-all hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.10)] min-h-[180px] flex flex-col"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${c.accent}15` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: c.accent }} />
                  </div>
                  <h3 className="font-sans text-[18px] font-bold text-dark mb-1.5">
                    {c.title}
                  </h3>
                  <p className="font-sans text-[14px] text-gray leading-[1.55] flex-1">
                    {c.desc}
                  </p>
                  <span
                    className="inline-flex items-center gap-1.5 mt-4 font-sans text-[13px] font-bold uppercase tracking-[1.5px]"
                    style={{ color: c.accent }}
                  >
                    Continue
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudienceRouterModal;
