import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";

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
      { label: "Open Classes", path: "/classes/open-classes" },
      { label: "Private Events", path: "/classes/private-events" },
      { label: "Special Occasions", path: "/classes/special-occasions" },
      { label: "Friends", path: "/classes/friends" },
      { label: "Kids Party", path: "/classes/kids-party" },
      { label: "Catering", path: "/classes/catering" },
    ],
  },
  {
    label: "Teams",
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
  { label: "About Joey", path: "/about" },
];

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
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
        <div onClick={() => go("/")} className="cursor-pointer flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-full bg-purple flex items-center justify-center text-white font-serif font-extrabold text-lg">
            CJ
          </div>
          <span
            className="font-serif font-bold text-[22px] transition-colors duration-300"
            style={{
              color: scrolled ? "hsl(var(--dark))" : isHome ? "white" : "hsl(var(--dark))",
            }}
          >
            Chef Joey
          </span>
        </div>

        <div className="flex items-center gap-6 font-sans text-[15px] font-medium">
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
                  className="cursor-pointer transition-colors duration-300 pb-1 flex items-center gap-1"
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

          <button
            onClick={() => go("/classes")}
            className="bg-orange text-white border-none px-6 py-2.5 rounded-full font-semibold text-sm cursor-pointer font-sans transition-all duration-200 shadow-[0_2px_8px_hsl(var(--orange)/0.3)] hover:-translate-y-0.5"
          >
            Book a Class
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
