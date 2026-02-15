import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const currentPage = location.pathname;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = currentPage === "/";

  const navItems = [
    { label: "For Teams", path: "/teams" },
    { label: "Classes & Events", path: "/classes" },
    { label: "About Joey", path: "/about" },
  ];

  const go = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
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

        <div className="flex items-center gap-8 font-sans text-[15px] font-medium">
          {navItems.map((item) => (
            <span
              key={item.path}
              onClick={() => go(item.path)}
              className="cursor-pointer transition-colors duration-300 pb-1"
              style={{
                color:
                  currentPage === item.path
                    ? "hsl(var(--purple))"
                    : scrolled
                    ? "hsl(var(--dark))"
                    : isHome
                    ? "rgba(255,255,255,0.9)"
                    : "hsl(var(--dark))",
                borderBottom:
                  currentPage === item.path
                    ? "2px solid hsl(var(--purple))"
                    : "2px solid transparent",
              }}
            >
              {item.label}
            </span>
          ))}
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
