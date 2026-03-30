import { useState, useEffect } from "react";
import chefJoeyWordmark from "@/assets/chef-joey-wordmark.png";
import { useNavigate, useLocation } from "react-router-dom";
import CTAButton from "./CTAButton";
import { ChevronDown, Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";

interface NavSegment {
  label: string;
  path: string;
  children?: { label: string; path: string }[];
}

const navSegments: NavSegment[] = [
  {
    label: "Classes & Events",
    path: "/classes",
    children: [
      { label: "Private Events", path: "/classes/private-events" },
      { label: "Open Classes", path: "/classes/open-classes" },
      { label: "Special Occasions", path: "/classes/special-occasions" },
      { label: "Friends", path: "/classes/friends" },
      { label: "Kids Party", path: "/classes/kids-party" },
      { label: "Catering", path: "/classes/catering" },
    ],
  },
  {
    label: "Teams & Corporate",
    path: "/teams",
    children: [
      { label: "Team Events", path: "/teams/team-events" },
      { label: "All Hands & Townhalls", path: "/teams/all-hands" },
      { label: "Onboarding & Culture", path: "/teams/onboarding" },
      { label: "Client Entertainment", path: "/teams/client-entertainment" },
      { label: "Holiday & Celebrations", path: "/teams/holiday" },
      { label: "Custom Experiences", path: "/teams/custom" },
      { label: "Catering", path: "/teams/catering" },
    ],
  },
  { label: "Blog", path: "/blog" },
  { label: "About", path: "/about" },
];

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const currentPage = location.pathname;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = currentPage === "/";

  const go = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpenDropdown(null);
    setMobileOpen(false);
  };

  const getTextColor = (isActive: boolean) => {
    if (isActive) return "hsl(var(--purple))";
    if (scrolled) return "hsl(var(--dark))";
    if (isHome) return "rgba(255,255,255,0.9)";
    return "hsl(var(--dark))";
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[1000] transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid hsl(var(--border))" : "1px solid transparent",
        padding: scrolled ? "12px 0" : "20px 0",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        <div onClick={() => go("/")} className="cursor-pointer">
          <img
            src={chefJoeyWordmark}
            alt="Chef Joey"
            className="h-10 w-auto transition-all duration-300"
            style={{
              filter: scrolled || !isHome ? "brightness(0)" : "none",
            }}
          />
        </div>

        {/* Desktop nav - centered links */}
        <div className="hidden md:flex items-center gap-6 font-sans text-[15px] font-medium">
          {navSegments.map((segment) => {
            const isActive = currentPage === segment.path;
            const hasChildren = segment.children && segment.children.length > 0;

            return (
              <div
                key={segment.label}
                className="relative"
                onMouseEnter={() => hasChildren && setOpenDropdown(segment.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <span
                  onClick={() => go(segment.path)}
                  className="cursor-pointer transition-colors duration-300 pb-1 flex items-center gap-1 whitespace-nowrap"
                  style={{
                    color: getTextColor(isActive),
                    borderBottom: isActive
                      ? "2px solid hsl(var(--purple))"
                      : "2px solid transparent",
                  }}
                >
                  {segment.label}
                  {hasChildren && (
                    <ChevronDown
                      size={14}
                      className="transition-transform duration-200"
                      style={{
                        transform: openDropdown === segment.label ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    />
                  )}
                </span>

                {hasChildren && openDropdown === segment.label && (
                  <div className="absolute top-full left-0 pt-2 z-[1100]">
                    <div className="bg-white rounded-lg shadow-lg border border-border py-2 min-w-[220px]">
                      <div
                        onClick={() => go(segment.path)}
                        className="px-4 py-2.5 text-sm font-semibold cursor-pointer transition-colors duration-150 hover:bg-purple-pale border-b border-border"
                        style={{ color: "hsl(var(--purple))" }}
                      >
                        View All {segment.label}
                      </div>
                      {segment.children!.map((child) => (
                        <div
                          key={child.label}
                          onClick={() => go(child.path)}
                          className="px-4 py-2.5 text-sm cursor-pointer transition-colors duration-150 hover:bg-purple-pale"
                          style={{ color: "hsl(var(--dark))" }}
                        >
                          {child.label}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <CTAButton variant="green" size="sm" onClick={() => go("/classes")}>
            Get Started
          </CTAButton>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg transition-colors"
          onClick={() => setMobileOpen(true)}
          style={{ color: scrolled ? "hsl(var(--dark))" : isHome ? "white" : "hsl(var(--dark))" }}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Sheet */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent side="right" className="w-[300px] p-0 overflow-y-auto">
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <div className="p-6 pt-8">
            <div className="mb-8">
              <img src={chefJoeyWordmark} alt="Chef Joey" className="h-10 w-auto" style={{ filter: "brightness(0)" }} />
            </div>

            <div className="space-y-1">
              {navSegments.map((segment) => {
                const hasChildren = segment.children && segment.children.length > 0;
                const isExpanded = mobileExpanded === segment.label;

                return (
                  <div key={segment.label}>
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => {
                          if (hasChildren) {
                            setMobileExpanded(isExpanded ? null : segment.label);
                          } else {
                            go(segment.path);
                          }
                        }}
                        className="flex-1 text-left px-3 py-3 font-sans text-[15px] font-semibold text-dark rounded-lg hover:bg-gray-light transition-colors"
                      >
                        {segment.label}
                      </button>
                      {hasChildren && (
                        <button
                          onClick={() => setMobileExpanded(isExpanded ? null : segment.label)}
                          className="p-2 text-gray"
                        >
                          <ChevronDown
                            size={16}
                            className="transition-transform duration-200"
                            style={{ transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)" }}
                          />
                        </button>
                      )}
                    </div>
                    {hasChildren && isExpanded && (
                      <div className="ml-3 border-l-2 border-border pl-3 mb-2">
                        <button
                          onClick={() => go(segment.path)}
                          className="block w-full text-left px-3 py-2.5 font-sans text-[14px] font-semibold rounded-lg hover:bg-gray-light transition-colors"
                          style={{ color: "hsl(var(--purple))" }}
                        >
                          View All {segment.label}
                        </button>
                        {segment.children!.map((child) => (
                          <button
                            key={child.label}
                            onClick={() => go(child.path)}
                            className="block w-full text-left px-3 py-2.5 font-sans text-[14px] text-gray rounded-lg hover:bg-gray-light hover:text-dark transition-colors"
                          >
                            {child.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <CTAButton variant="green" size="md" onClick={() => go("/classes")}>
                Get Started
              </CTAButton>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Nav;
