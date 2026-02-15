import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SectionTag from "@/components/chef/SectionTag";
import CTAButton from "@/components/chef/CTAButton";
import Footer from "@/components/chef/Footer";

const occasions = [
  { id: "team-events", sidebarLabel: "Team Building", tag: "MOST POPULAR", title: "Team Building Events", description: "Get your team cooking (literally). Hands-on, collaborative, and way more fun than trust falls. Perfect for teams of 8-30.", groupSize: "8–30 people", duration: "2.5 hours", icon: "👨‍🍳", path: "/teams/team-events" },
  { id: "all-hands", sidebarLabel: "All-Hands", tag: "VIRTUAL + IN-PERSON", title: "All-Hands & Townhalls", description: "Make your next company gathering unforgettable. Live cooking demos, interactive challenges, and food that brings people together across offices.", groupSize: "20–200 people", duration: "1.5–2 hours", icon: "🎤", path: "/teams/all-hands" },
  { id: "onboarding", sidebarLabel: "Onboarding", tag: "NEW HIRE FAVORITE", title: "Onboarding & Culture", description: "Welcome new team members with an experience they'll actually remember. Set the tone for your culture from day one.", groupSize: "5–25 people", duration: "2 hours", icon: "🌱", path: "/teams/onboarding" },
  { id: "client-entertainment", sidebarLabel: "Client Entertainment", tag: "IMPRESS & CONNECT", title: "Client Entertainment", description: "Skip the steakhouse. Host clients in an interactive environment that breaks down walls and builds real relationships.", groupSize: "6–20 people", duration: "2.5 hours", icon: "🤝", path: "/teams/client-entertainment" },
  { id: "holiday", sidebarLabel: "Holiday", tag: "SEASONAL", title: "Holiday & Celebrations", description: "Year-end party? Summer kickoff? We create seasonal menus and themed experiences that feel special without the planning headache.", groupSize: "10–50 people", duration: "2–3 hours", icon: "🎉", path: "/teams/holiday" },
  { id: "custom", sidebarLabel: "Custom Experiences", tag: "TAILORED TO YOU", title: "Custom Experiences", description: "Have something specific in mind? We'll design a bespoke culinary experience around your goals, dietary needs, and team size.", groupSize: "Any size", duration: "Flexible", icon: "✨", path: "/teams/custom" },
];

const TeamsPage = () => {
  const navigate = useNavigate();
  const go = (path: string) => { navigate(path); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const [activeId, setActiveId] = useState(occasions[0].id);

  useEffect(() => {
    const els = occasions.map((o) => document.getElementById(o.id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length) setActiveId(visible[0].target.id);
      },
      { threshold: 0.35, rootMargin: "-10% 0px -50% 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return (
    <div>
      {/* Hero */}
      <section className="pt-[120px] pb-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-b from-purple-pale to-transparent opacity-50" />
        <div className="max-w-[1200px] mx-auto px-6 relative">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div>
              <SectionTag>For Teams & Corporate</SectionTag>
              <h1 className="font-serif text-[52px] font-extrabold text-dark leading-[1.1] mt-5 mb-5">
                Build culture,<br />not just <span className="text-purple italic">lunch plans</span>
              </h1>
              <p className="font-sans text-[17px] text-gray leading-[1.7] mb-8 max-w-[460px]">
                Ditch the awkward icebreakers. Our interactive cooking experiences bring teams together through creole
                flavors, real collaboration, and genuinely memorable moments.
              </p>
              <div className="flex gap-4">
                <CTAButton variant="primary" size="lg">Book a Call</CTAButton>
                <CTAButton variant="secondary" size="lg">View Packages</CTAButton>
              </div>
              <div className="flex gap-8 mt-10 pt-8 border-t border-border">
                {[
                  { num: "200+", label: "Events hosted" },
                  { num: "50+", label: "Companies" },
                  { num: "5.0", label: "Avg rating" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="font-serif text-3xl font-extrabold text-dark">{s.num}</p>
                    <p className="font-sans text-sm text-gray">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-purple-pale to-purple/[0.05] flex items-center justify-center">
              <div className="text-center">
                <span className="text-7xl">👥🍳</span>
                <p className="font-sans text-[13px] text-gray mt-2">[Photo: Team cooking together]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases – Scroll Spy */}
      <section className="py-24 px-6 bg-gray-light">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <SectionTag>Perfect For</SectionTag>
            <h2 className="font-serif text-[38px] font-extrabold text-dark mt-4">Pick your occasion</h2>
            <p className="font-sans text-base text-gray mt-3 max-w-[520px] mx-auto">From intimate team dinners to company-wide celebrations, we have the perfect culinary experience for every occasion.</p>
          </div>

          <div className="flex gap-10">
            {/* Sidebar */}
            <nav className="hidden md:block w-[220px] shrink-0 sticky top-32 self-start">
              <p className="font-sans text-[11px] font-bold tracking-[2px] uppercase text-gray mb-4">Categories</p>
              <ul className="space-y-1">
                {occasions.map((o) => (
                  <li key={o.id}>
                    <button
                      onClick={() => document.getElementById(o.id)?.scrollIntoView({ behavior: "smooth", block: "center" })}
                      className={`w-full text-left px-4 py-2.5 font-sans text-[15px] border-l-[3px] transition-colors duration-200 ${
                        activeId === o.id
                          ? "border-purple text-purple font-semibold"
                          : "border-transparent text-gray hover:text-purple"
                      }`}
                    >
                      {o.sidebarLabel}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Cards */}
            <div className="flex-1 space-y-8">
              {occasions.map((o) => (
                <div key={o.id} id={o.id} className="bg-white rounded-[32px] overflow-hidden border border-border flex flex-col md:flex-row transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)]">
                  {/* Icon area */}
                  <div className="md:w-[260px] shrink-0 bg-gradient-to-br from-purple-pale to-purple/[0.06] flex items-center justify-center py-12 md:py-0">
                    <div className="w-24 h-24 rounded-full bg-purple/10 flex items-center justify-center text-5xl">{o.icon}</div>
                  </div>
                  {/* Content */}
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <span className="inline-block self-start font-sans text-[11px] font-bold tracking-[1.5px] uppercase text-purple bg-purple-pale px-3 py-1 rounded-full mb-3">{o.tag}</span>
                    <h3 className="font-serif text-[26px] font-bold text-dark leading-tight mb-2">{o.title}</h3>
                    <p className="font-sans text-[15px] text-gray leading-[1.7] mb-5 max-w-[460px]">{o.description}</p>
                    <div className="flex flex-wrap items-center gap-3 mb-5">
                      <span className="font-sans text-[13px] font-semibold text-dark bg-cream px-3.5 py-1 rounded-full">👥 {o.groupSize}</span>
                      <span className="font-sans text-[13px] font-semibold text-dark bg-cream px-3.5 py-1 rounded-full">⏱ {o.duration}</span>
                    </div>
                    <button onClick={() => go(o.path)} className="inline-flex items-center gap-1 font-sans text-[15px] font-semibold text-orange hover:underline self-start cursor-pointer">
                      Learn More →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Format Options */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <SectionTag>Flexible Formats</SectionTag>
            <h2 className="font-serif text-[38px] font-extrabold text-dark mt-4 mb-3">Your kitchen or ours</h2>
            <p className="font-sans text-base text-gray max-w-[500px] mx-auto">Every experience is available in the format that works best for your team.</p>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {[
              { icon: "🏠", title: "At Our Kitchen", desc: "Join us at the YW Calgary Community Kitchen in Inglewood. All equipment and ingredients provided.", detail: "Up to 20 people · 2.5 hours" },
              { icon: "🏢", title: "At Your Location", desc: "We bring the full experience to your office, venue, or chosen space. Chef Joey comes to you.", detail: "Up to 50 people · Flexible timing" },
              { icon: "💻", title: "Virtual", desc: "Ingredient kits shipped to each participant. Live-streamed cooking with your team from anywhere.", detail: "Unlimited size · 1.5–2 hours" },
            ].map((f) => (
              <div key={f.title} className="bg-cream rounded-2xl p-8 text-center border border-border transition-all duration-300 hover:border-purple">
                <div className="text-5xl mb-4">{f.icon}</div>
                <h3 className="font-serif text-[22px] font-bold text-dark mb-2">{f.title}</h3>
                <p className="font-sans text-sm text-gray leading-[1.7] mb-4">{f.desc}</p>
                <span className="font-sans text-[13px] font-semibold text-purple bg-purple-pale px-3.5 py-1 rounded-full">{f.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple to-purple-dark text-center">
        <div className="max-w-[600px] mx-auto">
          <h2 className="font-serif text-4xl font-extrabold text-white mb-4">Ready to spice up your next team event?</h2>
          <p className="font-sans text-base text-white/70 mb-8">Book a free 15-minute call. We'll help you pick the perfect experience for your team.</p>
          <div className="flex gap-4 justify-center">
            <CTAButton variant="orange" size="lg">Book a Call</CTAButton>
            <CTAButton variant="ghost" size="lg">Request a Proposal</CTAButton>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TeamsPage;
