import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const go = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const columns = [
    {
      title: "For Teams",
      links: [
        { label: "Team Building Events", path: "/team-building" },
        { label: "All-Hands Experiences", path: "/team-building" },
        { label: "Corporate Packages", path: "/teams" },
      ],
    },
    {
      title: "Classes & Events",
      links: [
        { label: "Public Classes", path: "/public-classes" },
        { label: "Private Parties", path: "/public-classes" },
        { label: "Kids Cooking", path: "/public-classes" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Joey", path: "/about" },
        { label: "Schedule", path: "/public-classes" },
        { label: "Contact", path: "/about" },
      ],
    },
  ];

  return (
    <footer className="bg-dark text-white py-20 px-6">
      <div className="max-w-[1200px] mx-auto grid grid-cols-[2fr_1fr_1fr_1fr] gap-12">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-10 h-10 rounded-full bg-purple flex items-center justify-center text-lg font-serif font-extrabold">
              CJ
            </div>
            <span className="font-serif font-bold text-xl">Chef Joey</span>
          </div>
          <p className="font-sans text-sm text-white/60 leading-[1.7] max-w-[300px]">
            Bringing creole soul and southern heart to Calgary kitchens. Interactive cooking experiences for foodies,
            families, and forward-thinking teams.
          </p>
          <div className="mt-5">
            <p className="font-sans text-[13px] text-white/50">Calgary, Alberta · joinchefjoey@gmail.com</p>
            <p className="font-sans text-[13px] text-white/50">(587) 777-9287</p>
          </div>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="font-sans text-sm font-bold mb-5 tracking-wide">{col.title}</h4>
            {col.links.map((link) => (
              <p
                key={link.label}
                onClick={() => go(link.path)}
                className="font-sans text-sm text-white/60 cursor-pointer mb-3 transition-colors duration-200 hover:text-orange-light"
              >
                {link.label}
              </p>
            ))}
          </div>
        ))}
      </div>
      <div className="max-w-[1200px] mx-auto mt-14 pt-6 border-t border-white/10 flex justify-between items-center">
        <p className="font-sans text-[13px] text-white/40">© 2026 Chef Joey. All rights reserved.</p>
        <div className="flex gap-6">
          {["Terms", "Privacy", "Blog"].map((item) => (
            <span key={item} className="font-sans text-[13px] text-white/40 cursor-pointer">{item}</span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
