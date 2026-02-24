interface CTAButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "orange" | "ghost";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
}

const CTAButton = ({ children, variant = "primary", size = "md", onClick }: CTAButtonProps) => {
  const isStamp = variant === "primary" || variant === "orange";
  const base = `inline-flex items-center gap-2 font-semibold cursor-pointer font-sans transition-all duration-200 tracking-wide ${isStamp ? "rounded-tl-2xl rounded-tr-lg rounded-bl-lg rounded-br-2xl hover:rounded-lg hover:-translate-y-1.5" : "rounded-full hover:-translate-y-0.5 hover:opacity-90"}`;

  const variants = {
    primary: "bg-purple text-white shadow-[0_4px_0_hsl(var(--dark))] hover:shadow-[0_8px_0_hsl(var(--dark))]",
    secondary: "bg-transparent text-purple border-2 border-purple",
    orange: "bg-orange text-white shadow-[0_4px_0_hsl(var(--dark))] hover:shadow-[0_8px_0_hsl(var(--dark))]",
    ghost: "bg-white/15 text-white border border-white/30 backdrop-blur-sm",
  };

  const sizes = {
    sm: "px-4 py-2 text-[12px]",
    md: "px-6 py-2.5 text-[13px]",
    lg: "px-8 py-3 text-[14px]",
  };

  return (
    <button onClick={onClick} className={`${base} ${variants[variant]} ${sizes[size]}`}>
      {children}
    </button>
  );
};

export default CTAButton;
