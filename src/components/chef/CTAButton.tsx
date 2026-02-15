interface CTAButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "orange" | "ghost";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
}

const CTAButton = ({ children, variant = "primary", size = "md", onClick }: CTAButtonProps) => {
  const base = "inline-flex items-center gap-2 rounded-full font-semibold cursor-pointer font-sans transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90";

  const variants = {
    primary: "bg-purple text-white shadow-[0_4px_14px_hsl(var(--purple)/0.3)]",
    secondary: "bg-transparent text-purple border-2 border-purple",
    orange: "bg-orange text-white shadow-[0_4px_14px_hsl(var(--orange)/0.3)]",
    ghost: "bg-white/15 text-white border border-white/30 backdrop-blur-sm",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-[13px]",
    md: "px-8 py-3.5 text-[15px]",
    lg: "px-10 py-4 text-base",
  };

  return (
    <button onClick={onClick} className={`${base} ${variants[variant]} ${sizes[size]}`}>
      {children}
    </button>
  );
};

export default CTAButton;
