import { useState } from "react";
import teamHeroImg from "@/assets/chef-joey-116.jpg";
import chefJoeyKitchen from "@/assets/chef-joey-kitchen.jpg";
import { useNavigate } from "react-router-dom";
import SectionTag from "@/components/chef/SectionTag";
import CTAButton from "@/components/chef/CTAButton";
import Footer from "@/components/chef/Footer";
import PackagesModal from "@/components/chef/PackagesModal";
import TeamBookingFormModal from "@/components/chef/TeamBookingFormModal";

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

          {/* Video Section */}
          <div className="mt-10 pt-8 border-t border-border/50">
            <SectionTag>Enbridge Team with Chef Joey</SectionTag>
            <div className="mt-4 rounded-2xl overflow-hidden shadow-lg">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/Q9RCypt9kuQ"
                  title="Enbridge Team with Chef Joey"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
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

      {/* Catalogue Header */}
      <section className="py-8 px-6 bg-[hsla(105,48%,46%,0.08)]">
        <div className="max-w-[1200px] mx-auto text-center">
          <SectionTag>Perfect For</SectionTag>
          <h2 className="font-sans text-[38px] font-extrabold text-dark mt-4">Pick your occasion</h2>
          <p className="font-sans text-base text-gray mt-3 max-w-[520px] mx-auto">From intimate team dinners to company-wide celebrations, we have the perfect culinary experience for every occasion.</p>
        </div>
      </section>

      {/* Use Cases – Card Grid */}
      <section className="py-14 md:py-20 px-6 bg-cream">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
            {occasions.map((o) => (
              <button
                key={o.id}
                onClick={() => go(o.path)}
                className="group bg-white rounded-[20px] overflow-hidden flex flex-col border border-border shadow-[0_2px_12px_rgba(22,24,44,0.04)] hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(22,24,44,0.1)] transition-all duration-200 text-left"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img src={o.image} alt={o.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 font-sans text-[11px] font-bold tracking-[1.5px] uppercase text-white bg-white/15 backdrop-blur-md border border-white/25 px-3 py-1.5 rounded-full">
                    {o.title}
                  </span>
                </div>

                <div className="p-6 pb-7 flex flex-col flex-1">
                  <h3 className="font-sans text-[22px] font-bold text-dark leading-[1.2] tracking-[-0.015em] mb-2.5">
                    {o.title}
                  </h3>
                  <p className="font-sans text-[15px] text-gray leading-[1.5] mb-5 flex-1">
                    {o.description.split(".")[0]}.
                  </p>
                  <div className="font-sans text-[13px] font-semibold text-dark bg-cream rounded-[10px] px-3.5 py-2.5 mb-5 flex flex-wrap items-center gap-1">
                    <span>⏱ {o.duration}</span>
                    <span className="text-gray opacity-50 mx-1">·</span>
                    <span>👥 {o.groupSize}</span>
                  </div>
                  <span className="self-start inline-flex items-center gap-1.5 font-sans text-[14px] font-bold px-5 py-3 rounded-full border-[1.5px] border-purple text-purple group-hover:bg-purple group-hover:text-white transition-colors">
                    Learn More →
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="relative bg-white border border-border rounded-[24px] px-6 py-12 md:px-10 md:py-14 mt-16 md:mt-20 text-center overflow-hidden shadow-[0_4px_32px_rgba(22,24,44,0.06)]">
            <div className="absolute -top-24 -right-20 w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,_hsl(var(--purple-pale))_0%,_transparent_70%)]" />
            <div className="absolute -bottom-24 -left-20 w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,_hsla(105,48%,46%,0.1)_0%,_transparent_70%)]" />
            <div className="relative">
              <h3 className="font-sans text-[26px] md:text-[32px] font-extrabold text-dark tracking-[-0.02em] leading-[1.15] mb-3">
                Ready to spice up your team event?
              </h3>
              <p className="font-sans text-[15px] md:text-[17px] text-gray max-w-[480px] mx-auto mb-7">
                Tell Joey a bit about your group and we'll put together something that fits — no generic templates.
              </p>
              <CTAButton variant="primary" size="lg" onClick={() => setShowBookingForm(true)}>Chat with Joey</CTAButton>
            </div>
          </div>
        </div>
      </section>


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
