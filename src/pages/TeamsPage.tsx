import { useState } from "react";
import teamHeroImg from "@/assets/chef-joey-116.jpg";
import chefJoeyKitchen from "@/assets/chef-joey-kitchen.jpg";
import { useNavigate } from "react-router-dom";
import SectionTag from "@/components/chef/SectionTag";
import CTAButton from "@/components/chef/CTAButton";
import Footer from "@/components/chef/Footer";
import PackagesModal from "@/components/chef/PackagesModal";
import TeamBookingFormModal from "@/components/chef/TeamBookingFormModal";
import ExperienceContent from "@/components/chef/ExperienceContent";
import { getExperiencesBySegment } from "@/data/experienceData";

import teamImg1 from "@/assets/chef-joey-41.jpg";
import teamImg2 from "@/assets/chef-joey-114.jpg";
import teamImg3 from "@/assets/chef-joey-36.jpg";
import teamImg4 from "@/assets/chef-joey-113.jpg";
import teamImg5 from "@/assets/chef-joey-61.jpg";
import teamImg6 from "@/assets/ywca-kitchen-080.jpg";

const occasions = [
  {
    id: "team-events", sidebarLabel: "Team Building", tag: "MOST POPULAR", title: "Team Building Events",
    description: "Get your team cooking (literally). Hands-on, collaborative, and way more fun than trust falls. Perfect for teams of 8-30.",
    groupSize: "8–30 people", duration: "2.5 hours", icon: "👨‍🍳", path: "/teams/team-events", image: teamImg1,
    details: [
      { icon: "⏱️", label: "Duration", value: "2.5 hours of hands-on cooking", color: "purple" },
      { icon: "👥", label: "Group Size", value: "8–30 people per session", color: "purple" },
      { icon: "🍽️", label: "Cuisine", value: "Creole-inspired collaborative menus", color: "sage" },
      { icon: "📍", label: "Location", value: "Our Kitchen · Your Office · Virtual", color: "purple" },
      { icon: "🎯", label: "Format", value: "Teams cook together in small groups", color: "purple" },
      { icon: "✅", label: "Includes", value: "All ingredients, equipment, and recipes", color: "sage" },
    ],
    highlights: [
      "Break down silos with hands-on collaboration",
      "No cooking experience required — Chef Joey guides every step",
      "Teams compete in friendly cooking challenges",
      "Everyone eats what they cook together",
      "Custom menus for dietary restrictions",
    ],
  },
  {
    id: "all-hands", sidebarLabel: "All-Hands", tag: "VIRTUAL + IN-PERSON", title: "All-Hands & Townhalls",
    description: "Make your next company gathering unforgettable. Live cooking demos, interactive challenges, and food that brings people together across offices.",
    groupSize: "20–200 people", duration: "1.5–2 hours", icon: "🎤", path: "/teams/all-hands", image: teamImg2,
    details: [
      { icon: "⏱️", label: "Duration", value: "1.5–3 hours, flexible to your agenda", color: "purple" },
      { icon: "👥", label: "Group Size", value: "20–200+ people", color: "purple" },
      { icon: "💻", label: "Format", value: "In-person, virtual, or hybrid", color: "sage" },
      { icon: "📍", label: "Location", value: "Your office, event venue, or online", color: "purple" },
      { icon: "🎯", label: "Activities", value: "Live demos, cooking challenges, team competitions", color: "purple" },
      { icon: "📦", label: "Virtual Kit", value: "Ingredient kits shipped to each participant", color: "sage" },
    ],
    highlights: [
      "Breaks down silos between departments and offices",
      "Works for both in-person and remote employees",
      "Interactive format keeps everyone engaged",
      "Creates shared memories beyond the usual slides",
      "Scales from 20 to 200+ without losing the magic",
    ],
  },
  {
    id: "onboarding", sidebarLabel: "Onboarding", tag: "NEW HIRE FAVORITE", title: "Onboarding & Culture",
    description: "Welcome new team members with an experience they'll actually remember. Set the tone for your culture from day one.",
    groupSize: "5–25 people", duration: "2 hours", icon: "🌱", path: "/teams/onboarding", image: teamImg3,
    details: [
      { icon: "⏱️", label: "Duration", value: "2 hours of team bonding", color: "purple" },
      { icon: "👥", label: "Group Size", value: "5–25 people", color: "purple" },
      { icon: "🎯", label: "Focus", value: "Icebreaking, culture building, connection", color: "sage" },
      { icon: "📍", label: "Location", value: "Our Kitchen · Your Office", color: "purple" },
      { icon: "🍽️", label: "Menu", value: "Collaborative dishes that require teamwork", color: "purple" },
      { icon: "✅", label: "Includes", value: "Welcome kits, name tags, recipe cards", color: "sage" },
    ],
    highlights: [
      "New hires connect with teammates naturally",
      "Sets a culture-first tone from day one",
      "Low-pressure environment for authentic bonding",
      "Works for both small cohorts and large classes",
      "Customizable to reflect your company values",
    ],
  },
  {
    id: "client-entertainment", sidebarLabel: "Client Entertainment", tag: "IMPRESS & CONNECT", title: "Client Entertainment",
    description: "Skip the steakhouse. Host clients in an interactive environment that breaks down walls and builds real relationships.",
    groupSize: "6–20 people", duration: "2.5 hours", icon: "🤝", path: "/teams/client-entertainment", image: teamImg4,
    details: [
      { icon: "⏱️", label: "Duration", value: "2.5 hours of premium experience", color: "purple" },
      { icon: "👥", label: "Group Size", value: "6–20 people", color: "purple" },
      { icon: "🍷", label: "Add-ons", value: "Wine pairings, cocktail stations available", color: "sage" },
      { icon: "📍", label: "Location", value: "Our Kitchen · Private venues", color: "purple" },
      { icon: "🎯", label: "Focus", value: "Relationship building in a relaxed setting", color: "purple" },
      { icon: "✅", label: "Includes", value: "Premium ingredients, personal chef attention", color: "sage" },
    ],
    highlights: [
      "More memorable than a dinner reservation",
      "Breaks down formality barriers naturally",
      "Clients become collaborators in the kitchen",
      "Photo-worthy moments for social sharing",
      "Personalized menus to impress",
    ],
  },
  {
    id: "holiday", sidebarLabel: "Holiday", tag: "SEASONAL", title: "Holiday & Celebrations",
    description: "Year-end party? Summer kickoff? We create seasonal menus and themed experiences that feel special without the planning headache.",
    groupSize: "10–50 people", duration: "2–3 hours", icon: "🎉", path: "/teams/holiday", image: teamImg5,
    details: [
      { icon: "⏱️", label: "Duration", value: "2.5–3 hours of cooking and celebration", color: "purple" },
      { icon: "👥", label: "Group Size", value: "10–50+ people", color: "purple" },
      { icon: "🍽️", label: "Menus", value: "Seasonal and themed menus for every occasion", color: "sage" },
      { icon: "📍", label: "Location", value: "Our Kitchen · Your Venue · Virtual", color: "purple" },
      { icon: "🎄", label: "Themes", value: "Holiday, summer, spring, cultural celebrations", color: "purple" },
      { icon: "🎁", label: "Extras", value: "Décor, music, team competitions, prizes", color: "sage" },
    ],
    highlights: [
      "Holiday party — festive menus and team competitions",
      "Summer kickoff — light, fresh, outdoor-friendly",
      "Year-end celebration — reflect and feast together",
      "Cultural celebrations — Lunar New Year, Diwali, and more",
      "Milestone events — anniversaries, launches, achievements",
    ],
  },
  {
    id: "custom", sidebarLabel: "Custom Experiences", tag: "TAILORED TO YOU", title: "Custom Experiences",
    description: "Have something specific in mind? We'll design a bespoke culinary experience around your goals, dietary needs, and team size.",
    groupSize: "Any size", duration: "Flexible", icon: "✨", path: "/teams/custom", image: teamImg6,
    details: [
      { icon: "⏱️", label: "Duration", value: "Flexible — tailored to your schedule", color: "purple" },
      { icon: "👥", label: "Group Size", value: "Any size, from 4 to 200+", color: "purple" },
      { icon: "🎯", label: "Goals", value: "Tell us your objectives and we'll design around them", color: "sage" },
      { icon: "📍", label: "Location", value: "Anywhere — we come to you", color: "purple" },
      { icon: "🍽️", label: "Menu", value: "Fully custom menus and dietary accommodations", color: "purple" },
      { icon: "✅", label: "Includes", value: "Everything — just show up and cook", color: "sage" },
    ],
    highlights: [
      "100% tailored to your team's goals",
      "Any cuisine, any dietary requirement",
      "Combine multiple formats in one event",
      "Dedicated event coordinator assigned",
      "From concept to execution, we handle it all",
    ],
  },
  {
    id: "gift-cards", sidebarLabel: "Gift Cards", tag: "PERFECT GIFT", title: "Gift Cards",
    description: "Give your team the gift of an unforgettable experience. Bulk ordering, corporate branding, and flexible options available.",
    groupSize: "Any quantity", duration: "Flexible", icon: "🎁", path: "/teams/gift-cards", image: teamImg6,
    details: [
      { icon: "🎫", label: "Options", value: "Any team experience, any amount", color: "purple" },
      { icon: "📦", label: "Bulk Orders", value: "Discounted rates for 10+ gift cards", color: "sage" },
      { icon: "🏢", label: "Branding", value: "Add your company logo and custom message", color: "purple" },
      { icon: "📧", label: "Delivery", value: "Digital or premium printed cards", color: "sage" },
      { icon: "📅", label: "Validity", value: "Never expires — use anytime", color: "purple" },
      { icon: "✅", label: "Includes", value: "Full team experience — everything covered", color: "sage" },
    ],
    highlights: [
      "Employee appreciation & rewards",
      "Client thank-you gifts",
      "Holiday & end-of-year rewards",
      "Milestone celebrations",
      "New hire welcome gifts",
    ],
  },
];

const TeamsPage = () => {
  const navigate = useNavigate();
  const go = (path: string) => { navigate(path); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const [activeId, setActiveId] = useState(occasions[0].id);
  const [showPackages, setShowPackages] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);
  return (
    <div>
      {/* Hero */}
      <section className="pt-[100px] md:pt-[120px] pb-16 md:pb-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-b from-purple-pale to-transparent opacity-50" />
        <div className="max-w-[1200px] mx-auto px-6 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="text-center md:text-left">
              <SectionTag>For Teams & Corporate</SectionTag>
              <h1 className="font-sans text-[32px] md:text-[52px] font-extrabold text-dark leading-[1.1] mt-5 mb-5">
                Build culture,<br />not just <span className="text-purple italic">lunch plans</span>
              </h1>
              <p className="font-sans text-[16px] md:text-[17px] text-gray leading-[1.7] mb-8 max-w-[460px] mx-auto md:mx-0">
                Ditch the awkward icebreakers. Our interactive cooking experiences bring teams together through creole
                flavors, real collaboration, and genuinely memorable moments.
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <CTAButton variant="primary" size="lg" onClick={() => setShowBookingForm(true)}>Chat with Joey</CTAButton>
                <CTAButton variant="secondary" size="lg" onClick={() => setShowPackages(true)}>View Packages</CTAButton>
              </div>
              <div className="flex gap-8 mt-10 pt-8 border-t border-border justify-center md:justify-start">
                {[
                  { num: "200+", label: "Events hosted" },
                  { num: "50+", label: "Companies" },
                  { num: "5.0", label: "Avg rating" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="font-sans text-3xl font-extrabold text-dark">{s.num}</p>
                    <p className="font-sans text-sm text-gray">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden md:block aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
              <img src={teamHeroImg} alt="Team cooking experience with Chef Joey" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Meet Chef Joey + Flexible Formats */}
      <section className="py-14 md:py-20 px-6 bg-cream">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img src={chefJoeyKitchen} alt="Chef Joey in the kitchen" className="w-full h-full object-cover" />
            </div>
            <div>
              <SectionTag>Meet Your Host</SectionTag>
              <h2 className="font-sans text-[26px] md:text-[36px] font-extrabold text-dark mt-3 mb-3 leading-[1.15]">
                Your team deserves more than <span className="text-purple italic">pizza in the boardroom</span>
              </h2>
              <p className="font-sans text-[15px] text-gray leading-[1.8] mb-6">
                I'm Chef Joey — I turn corporate events into hands-on cooking experiences people actually talk about. Whether you're onboarding new hires, entertaining clients, or celebrating a win, I'll get your team out of their comfort zone and into the kitchen. No experience required.
              </p>
              <div className="flex gap-3 flex-wrap">
                <CTAButton variant="primary" size="sm" onClick={() => setShowBookingForm(true)}>Chat with Joey</CTAButton>
                <CTAButton variant="secondary" size="sm" onClick={() => setShowPackages(true)}>View Packages</CTAButton>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-border/50">
            <div className="flex items-center gap-3 mb-5">
              <SectionTag>Flexible Formats</SectionTag>
              <span className="font-sans text-sm text-gray">Your kitchen or ours — every experience adapts to your team.</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                { icon: "🏠", title: "Our Kitchen", desc: "YW Calgary Community Kitchen in Inglewood. Everything provided.", detail: "Up to 20 · 2.5 hrs" },
                { icon: "🏢", title: "Your Location", desc: "We bring the full experience to your office or venue.", detail: "Up to 50 · Flexible" },
                { icon: "💻", title: "Virtual", desc: "Ingredient kits shipped out. Live-streamed cooking from anywhere.", detail: "Unlimited · 1.5–2 hrs" },
              ].map((f) => (
                <div key={f.title} className="bg-white rounded-xl p-6 text-center border border-border transition-all duration-300 hover:border-purple hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
                  <div className="text-3xl mb-2">{f.icon}</div>
                  <h3 className="font-sans text-lg font-bold text-dark mb-1.5">{f.title}</h3>
                  <p className="font-sans text-[13px] text-gray leading-[1.6] mb-3">{f.desc}</p>
                  <span className="font-sans text-[12px] font-semibold text-purple bg-purple-pale px-3 py-0.5 rounded-full">{f.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases – Tab Style */}
      <section className="py-24 px-6 bg-gray-light">
        <div className="max-w-[1200px] mx-auto">
          {/* Mobile pill bar */}
          <div className="flex md:hidden gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
            {occasions.map((o) => (
              <button
                key={o.id}
                onClick={() => setActiveId(o.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-full font-sans text-[13px] font-semibold border transition-colors duration-200 shrink-0 ${
                  activeId === o.id
                    ? "bg-purple text-white border-purple"
                    : "bg-white text-gray border-border hover:border-purple hover:text-purple"
                }`}
              >
                {o.sidebarLabel}
              </button>
            ))}
          </div>

          <div className="text-center mb-10">
            <SectionTag>Perfect For</SectionTag>
            <h2 className="font-sans text-[38px] font-extrabold text-dark mt-4">Pick your occasion</h2>
            <p className="font-sans text-base text-gray mt-3 max-w-[520px] mx-auto">From intimate team dinners to company-wide celebrations, we have the perfect culinary experience for every occasion.</p>
          </div>

          <div className="flex gap-10">
            {/* Sidebar */}
            <nav className="hidden md:block w-[220px] shrink-0 sticky top-32 self-start pt-[20px]">
              <p className="font-sans text-[11px] font-bold tracking-[2px] uppercase text-gray mb-4">Categories</p>
              <ul className="space-y-1">
                {occasions.map((o) => (
                  <li key={o.id}>
                    <button
                      onClick={() => setActiveId(o.id)}
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

              <p className="font-sans text-[11px] font-bold tracking-[2px] uppercase text-gray mb-4 mt-8">Example Experiences</p>
              <ul className="space-y-1">
                {[
                  { label: "Signature Creole", path: "/teams/example/signature-creole" },
                  { label: "Healthy Meal Prep", path: "/teams/example/healthy-meal-prep" },
                ].map((item) => (
                  <li key={item.path}>
                    <button
                      onClick={() => go(item.path)}
                      className="w-full text-left px-4 py-2.5 font-sans text-[15px] border-l-[3px] border-transparent text-gray hover:text-purple transition-colors duration-200"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Content Panel */}
            <div className="flex-1">
              {(() => {
                const o = occasions.find((x) => x.id === activeId)!;
                return (
                  <div key={o.id} className="bg-white rounded-[32px] border border-border overflow-hidden animate-fade-in">
                    {/* Photo Header */}
                    <div className="relative h-[220px] md:h-[260px] overflow-hidden">
                      <img src={o.image} alt={o.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-8 md:p-10 flex items-end gap-5">
                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-4xl shrink-0">{o.icon}</div>
                        <div>
                          <span className="inline-block font-sans text-[11px] font-bold tracking-[1.5px] uppercase text-white bg-purple/80 px-3 py-1 rounded-full mb-2">{o.tag}</span>
                          <h3 className="font-sans text-[28px] md:text-[32px] font-bold text-white leading-tight drop-shadow-lg">{o.title}</h3>
                        </div>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-8 md:p-10">
                      <p className="font-sans text-[16px] text-gray leading-[1.7] mb-8 max-w-[560px]">{o.description}</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Details */}
                        <div>
                          <h4 className="font-sans text-[20px] font-bold text-dark mb-5">Experience Details</h4>
                          {o.details.map((d, i) => (
                            <div key={i} className="flex items-start gap-4 py-3 border-b border-border last:border-b-0">
                              <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0 ${
                                d.color === "purple" ? "bg-purple/10" : "bg-sage/10"
                              }`}>{d.icon}</div>
                              <div>
                                <p className={`font-sans text-[12px] font-bold uppercase tracking-[1px] mb-0.5 ${
                                  d.color === "purple" ? "text-purple" : "text-sage"
                                }`}>{d.label}</p>
                                <p className="font-sans text-[14px] text-dark leading-snug">{d.value}</p>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Highlights */}
                        <div>
                          <h4 className="font-sans text-[20px] font-bold text-dark mb-5">What to Expect</h4>
                          <div className="bg-cream rounded-2xl p-6 border border-border">
                            {o.highlights.map((h, i) => (
                              <div key={i} className={`flex gap-3 items-start py-2.5 ${i < o.highlights.length - 1 ? "border-b border-border" : ""}`}>
                                <div className="w-6 h-6 rounded-full bg-green/10 flex items-center justify-center text-[11px] font-bold text-green font-sans shrink-0 mt-0.5">✓</div>
                                <p className="font-sans text-[14px] text-dark leading-snug">{h}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="flex flex-wrap items-center gap-3 mt-8 pt-6 border-t border-border">
                        <span className="font-sans text-[13px] font-semibold text-dark bg-cream px-3.5 py-1 rounded-full">👥 {o.groupSize}</span>
                        <span className="font-sans text-[13px] font-semibold text-dark bg-cream px-3.5 py-1 rounded-full">⏱ {o.duration}</span>
                        <div className="flex-1" />
                        <CTAButton variant="primary" size="md" onClick={() => setShowBookingForm(true)}>Chat with Joey</CTAButton>
                        <button onClick={() => go(o.path)} className="inline-flex items-center gap-1 font-sans text-[15px] font-semibold text-purple hover:underline cursor-pointer">
                          Learn More →
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* Format Options section removed — merged into Meet Chef Joey above */}

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple to-purple-dark text-center">
        <div className="max-w-[600px] mx-auto">
          <h2 className="font-sans text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to spice up your next team event?</h2>
          <p className="font-sans text-base text-white/70 mb-8">Book a free 15-minute call. We'll help you pick the perfect experience for your team.</p>
          <div className="flex gap-4 justify-center">
            <CTAButton variant="green" size="lg" onClick={() => setShowBookingForm(true)}>Chat with Joey</CTAButton>
            <CTAButton variant="ghost" size="lg">Request a Proposal</CTAButton>
          </div>
        </div>
      </section>

      <Footer />

      <PackagesModal
        eventType="corporate"
        isOpen={showPackages}
        onClose={() => setShowPackages(false)}
        onSubmit={() => setShowBookingForm(true)}
      />
      <TeamBookingFormModal
        isOpen={showBookingForm}
        onClose={() => { setShowBookingForm(false); setShowPackages(false); }}
      />
    </div>
  );
};

export default TeamsPage;
