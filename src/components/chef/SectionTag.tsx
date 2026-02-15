interface SectionTagProps {
  children: React.ReactNode;
  variant?: "purple" | "orange";
}

const SectionTag = ({ children, variant = "purple" }: SectionTagProps) => (
  <span
    className={`inline-block text-xs font-bold tracking-[2px] uppercase font-sans px-4 py-1.5 rounded-full ${
      variant === "purple"
        ? "text-purple bg-purple-pale"
        : "text-orange bg-orange-pale"
    }`}
  >
    {children}
  </span>
);

export default SectionTag;
