interface ServiceCardProps {
  title: string;
  subtitle?: string;
  description: string;
  price?: string;
  tag?: string;
  onClick?: () => void;
  accentColor?: "purple" | "orange" | "sage";
}

const ServiceCard = ({ title, subtitle, description, price, tag, onClick, accentColor = "purple" }: ServiceCardProps) => {
  const accentClasses = {
    purple: { bg: "from-purple/[0.08] to-purple/[0.04]", text: "text-purple", icon: "bg-purple/20", tagBg: "bg-purple" },
    orange: { bg: "from-orange/[0.08] to-orange/[0.04]", text: "text-orange", icon: "bg-orange/20", tagBg: "bg-orange" },
    sage: { bg: "from-sage/[0.08] to-sage/[0.04]", text: "text-sage", icon: "bg-sage/20", tagBg: "bg-sage" },
  };
  const a = accentClasses[accentColor];

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 border border-border relative hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
    >
      {tag && (
        <div className={`absolute top-4 left-4 z-10 ${a.tagBg} text-white text-[11px] font-bold px-3 py-1 rounded-full tracking-wide font-sans`}>
          {tag}
        </div>
      )}
      <div className={`h-[200px] bg-gradient-to-br ${a.bg} flex items-center justify-center relative overflow-hidden`}>
        <div className={`w-20 h-20 rounded-full ${a.icon} flex items-center justify-center text-4xl`}>🍳</div>
        <div className={`absolute -bottom-8 -right-8 w-24 h-24 rounded-full ${accentColor === "purple" ? "bg-purple/10" : accentColor === "orange" ? "bg-orange/10" : "bg-sage/10"}`} />
      </div>
      <div className="p-6 pb-7">
        {subtitle && (
          <p className={`font-sans text-xs font-semibold ${a.text} uppercase tracking-[1.5px] mb-1.5`}>{subtitle}</p>
        )}
        <h3 className="font-serif text-[22px] font-bold text-dark mb-2 leading-tight">{title}</h3>
        <p className="font-sans text-sm text-gray leading-relaxed mb-4">{description}</p>
        <div className="flex items-center justify-between">
          {price && <span className="font-sans text-lg font-bold text-dark">{price}</span>}
          <span className={`${a.text} font-sans text-sm font-semibold flex items-center gap-1`}>Learn More →</span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
