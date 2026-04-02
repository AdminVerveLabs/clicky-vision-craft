import { useState } from "react";
import { Star, Quote, Trophy, Award } from "lucide-react";
import publicClassesImg from "@/assets/public-classes.png";
import { useNavigate } from "react-router-dom";
import SectionTag from "@/components/chef/SectionTag";
import CTAButton from "@/components/chef/CTAButton";
import ClassModal from "@/components/chef/ClassModal";
import FormatTabs from "@/components/chef/FormatTabs";

import PackagesModal from "@/components/chef/PackagesModal";
import PrivateEventBookingFormModal from "@/components/chef/PrivateEventBookingFormModal";
import NewsletterBanner from "@/components/chef/NewsletterBanner";
import Footer from "@/components/chef/Footer";
import { CLASS_DATA, FOOD_IMAGES, ClassData } from "@/data/classData";

import classImg1 from "@/assets/chef-joey-116.jpg";
import classImg2 from "@/assets/chef-joey-106.jpg";
import classImg3 from "@/assets/chef-joey-58.jpg";
import classImg4 from "@/assets/chef-joey-85.jpg";
import classImg5 from "@/assets/chef-joey-83.jpg";

const classExperiences = [
  {
    id: "private-parties", sidebarLabel: "Private Parties", tag: "CELEBRATIONS", title: "Private Parties",
    description: "Birthday bash? Anniversary dinner? Girls' night? We customize the menu and the vibe. You show up ready to have a blast.",
    icon: "🎉", path: "/classes/private-events", price: "From $125/person", image: classImg2,
    hasInPerson: true, hasVirtual: true,
    details: [
      { icon: "⏱️", label: "Duration", value: "2.5–3 hours, tailored to your event", color: "purple" },
      { icon: "👥", label: "Group Size", value: "6–30 people", color: "sage" },
      { icon: "🍽️", label: "Menu", value: "Fully customized to your preferences", color: "purple" },
      { icon: "📍", label: "Location", value: "Our Kitchen · Your Place · Any Venue", color: "sage" },
      { icon: "🎯", label: "Vibe", value: "We match the energy to your celebration", color: "purple" },
      { icon: "✅", label: "Includes", value: "Custom menu, décor options, all supplies", color: "sage" },
    ],
    highlights: [
      "Birthdays, anniversaries, bachelorettes & more",
      "Custom menus designed around your guest of honor",
      "We handle setup and cleanup — you just celebrate",
      "Photo-worthy plating and presentation",
      "Dietary accommodations always included",
    ],
  },
  {
    id: "public-classes", sidebarLabel: "Public Classes", tag: "OPEN", title: "Public Classes",
    description: "Different cuisines to choose from. Food included for in-person classes and shopping lists provided for virtual classes.",
    hasCalendarLink: true,
    icon: "🍳", path: "/classes/open-classes", price: "From $89/person", image: classImg1,
    hasInPerson: true, hasVirtual: true,
    details: [
      { icon: "⏱️", label: "Duration", value: "2–3 hours of hands-on cooking", color: "purple" },
      { icon: "👥", label: "Group Size", value: "8–16 people per class", color: "sage" },
      { icon: "🍽️", label: "Cuisine", value: "Creole, Italian, Vietnamese & more", color: "purple" },
      { icon: "📍", label: "Location", value: "YW Calgary Community Kitchen, Inglewood", color: "sage" },
      { icon: "🎯", label: "Format", value: "Hands-on cooking with Chef Joey", color: "purple" },
      { icon: "✅", label: "Includes", value: "All ingredients, equipment, aprons & recipe cards", color: "sage" },
    ],
    highlights: [
      "New menus every week — never the same class twice",
      "No experience needed — Chef Joey guides every step",
      "Perfect for date nights, solo, or with friends",
      "You eat everything you cook at the end",
      
    ],
  },
  {
    id: "kids-cooking", sidebarLabel: "Kids Cooking", tag: "AGES 4–15", title: "Kids Cooking",
    description: "Build kitchen confidence and creativity. Kids learn real skills in a safe, fun environment. Birthday parties and drop-in sessions available.",
    icon: "👧", path: "/classes/kids-party", price: "From $65/kid", image: classImg3,
    hasInPerson: true, hasVirtual: false,
    details: [
      { icon: "⏱️", label: "Duration", value: "1.5–2 hours of hands-on fun", color: "purple" },
      { icon: "👥", label: "Group Size", value: "6–20 kids per session", color: "sage" },
      { icon: "🍽️", label: "Menus", value: "Pizza, pasta, tacos, desserts & more", color: "purple" },
      { icon: "📍", label: "Location", value: "Our Kitchen · Your Home", color: "sage" },
      { icon: "🎂", label: "Parties", value: "Birthday party packages available", color: "purple" },
      { icon: "✅", label: "Includes", value: "Chef hat, apron, recipe card to keep", color: "sage" },
    ],
    highlights: [
      "Real cooking skills in a safe, supervised kitchen",
      "Age-appropriate tasks for every skill level",
      "Birthday party packages with custom themes",
      "Kids eat everything they make",
      "Builds confidence, creativity, and independence",
    ],
  },
  {
    id: "signature-sessions", sidebarLabel: "Signature Sessions", tag: "LIMITED", title: "Signature Sessions",
    description: "Special themed experiences: 'Off to College' survival cooking, 'Basic Skills Bootcamp', 'Date Night: Creole Edition', and seasonal specials.",
    icon: "⭐", path: "/classes/special-occasions", price: "From $99/person", image: classImg4,
    hasInPerson: true, hasVirtual: true,
    details: [
      { icon: "⏱️", label: "Duration", value: "2.5–3 hours of immersive cooking", color: "purple" },
      { icon: "👥", label: "Group Size", value: "8–20 people", color: "sage" },
      { icon: "🍽️", label: "Themes", value: "Seasonal specials, skill bootcamps, date nights", color: "purple" },
      { icon: "📍", label: "Location", value: "YW Calgary Community Kitchen", color: "sage" },
      { icon: "🔥", label: "Limited", value: "Special editions — book before they sell out", color: "purple" },
      { icon: "✅", label: "Includes", value: "All ingredients, wine pairings (adult classes)", color: "sage" },
    ],
    highlights: [
      "'Off to College' — survival cooking for young adults",
      "'Basic Skills Bootcamp' — knife skills, sauces, timing",
      "'Date Night: Creole Edition' — cook with your partner",
      "Seasonal menus that rotate quarterly",
      "Limited availability — these sell out fast",
    ],
  },
  {
    id: "gift-certificates", sidebarLabel: "Gift Certificates", tag: "PERFECT GIFT", title: "Gift Certificates",
    description: "Give the gift of a great time. Available for any class or experience. Never expires. Because nobody wants another candle.",
    icon: "🎁", path: "/classes/gift-cards", price: "From $65", image: classImg5,
    details: [
      { icon: "🎫", label: "Options", value: "Any class, any experience, any amount", color: "purple" },
      { icon: "📧", label: "Delivery", value: "Instant digital or printed gift card", color: "sage" },
      { icon: "📅", label: "Validity", value: "Never expires — use anytime", color: "purple" },
      { icon: "🔄", label: "Flexible", value: "Recipient chooses their own class", color: "sage" },
      { icon: "💝", label: "Personal", value: "Add a custom message and wrapping", color: "purple" },
      { icon: "✅", label: "Includes", value: "Full class experience — nothing extra to pay", color: "sage" },
    ],
    highlights: [
      "Perfect for birthdays, holidays, thank-yous",
      "Recipient picks their own class and date",
      "Never expires — no pressure to book immediately",
      "Digital delivery for last-minute gifting",
      "Corporate bulk options available",
    ],
  },
];

const ClassesPage = () => {
  const navigate = useNavigate();
  const go = (path: string) => { navigate(path); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const [selectedClass, setSelectedClass] = useState<ClassData | null>(null);
  const [activeExpId, setActiveExpId] = useState(classExperiences[0].id);
  const [showPackages, setShowPackages] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [calMonth, setCalMonth] = useState(1);
  const monthNames = ["January", "February", "March"];

  const year = 2026;
  const firstDay = new Date(year, calMonth, 1).getDay();
  const daysInMonth = new Date(year, calMonth + 1, 0).getDate();
  const today = calMonth === 1 ? 13 : -1;

  const calDays: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) calDays.push(null);
  for (let d = 1; d <= daysInMonth; d++) calDays.push(d);
  while (calDays.length % 7 !== 0) calDays.push(null);

  const getClassesForDay = (day: number | null) => {
    if (!day || calMonth !== 1) return [];
    return CLASS_DATA.filter((c) => c.day === day);
  };

  const getDayImage = (day: number | null) => {
    if (!day) return null;
    return FOOD_IMAGES[(day * 7 + calMonth * 3) % FOOD_IMAGES.length];
  };

  return (
    <div>
      {selectedClass && <ClassModal cls={selectedClass} onClose={() => setSelectedClass(null)} />}

      {/* Hero */}
      <section className="pt-[120px] pb-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[40%] h-full bg-gradient-to-b from-purple-pale to-transparent opacity-50" />

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <SectionTag>Classes & Events</SectionTag>
              <h1 className="font-sans text-[52px] font-extrabold text-dark leading-[1.1] mt-5 mb-5">
                Your next great meal starts <span className="text-purple italic">here</span>
              </h1>
              <p className="font-sans text-lg text-gray leading-[1.7] mb-8">
                From open classes to private celebrations, we've got the perfect culinary adventure. No experience needed—just bring your appetite and a sense of fun.
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <CTAButton variant="primary" size="lg" onClick={() => {
                  const el = document.getElementById('class-calendar');
                  if (!el) return;
                  const start = window.scrollY;
                  const end = el.getBoundingClientRect().top + start;
                  const duration = 1800;
                  const startTime = performance.now();
                  const ease = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
                  const animate = (now: number) => {
                    const t = Math.min((now - startTime) / duration, 1);
                    window.scrollTo(0, start + (end - start) * ease(t));
                    if (t < 1) requestAnimationFrame(animate);
                  };
                  requestAnimationFrame(animate);
                }}>Browse Upcoming Classes</CTAButton>
                <CTAButton variant="secondary" size="lg" onClick={() => setShowPackages(true)}>Private Event</CTAButton>
              </div>
            </div>
            <div className="hidden md:block aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
              <img src={publicClassesImg} alt="Public cooking class with Chef Joey" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Types – Tab Style */}
      <section className="py-24 px-6 bg-gray-light">
        <div className="max-w-[1200px] mx-auto">
          {/* Mobile pill bar */}
          <div className="flex md:hidden gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
            {classExperiences.map((o) => (
              <button
                key={o.id}
                onClick={() => setActiveExpId(o.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-full font-sans text-[13px] font-semibold border transition-colors duration-200 shrink-0 ${
                  activeExpId === o.id
                    ? "bg-purple text-white border-purple"
                    : "bg-white text-gray border-border hover:border-purple hover:text-purple"
                }`}
              >
                {o.sidebarLabel}
              </button>
            ))}
          </div>

          <div className="text-center mb-10">
            <SectionTag>Experiences</SectionTag>
            <h2 className="font-sans text-[38px] font-extrabold text-dark mt-4">Find your flavor</h2>
            <p className="font-sans text-base text-gray mt-3 max-w-[520px] mx-auto">From open enrollment classes to private celebrations, find the perfect culinary experience for you.</p>
          </div>

          <div className="flex gap-10">
            {/* Sidebar */}
            <nav className="hidden md:block w-[220px] shrink-0 sticky top-32 self-start pt-[20px]">
              <p className="font-sans text-[11px] font-bold tracking-[2px] uppercase text-gray mb-4">Categories</p>
              <ul className="space-y-1">
                {classExperiences.map((o) => (
                  <li key={o.id}>
                    <button
                      onClick={() => setActiveExpId(o.id)}
                      className={`w-full text-left px-4 py-2.5 font-sans text-[15px] border-l-[3px] transition-colors duration-200 ${
                        activeExpId === o.id
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
                  { label: "Valentine's Day", path: "/classes/example/valentines-day" },
                  { label: "Signature Creole", path: "/classes/example/signature-creole" },
                  { label: "Kids Learn to Bake", path: "/classes/example/kids-bake" },
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
                const o = classExperiences.find((x) => x.id === activeExpId)!;
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
                      <p className="font-sans text-[16px] text-gray leading-[1.7] mb-8 max-w-[560px]">
                        {o.description}
                        {(o as any).hasCalendarLink && (
                          <>
                            {" "}
                            <button
                              onClick={() => {
                                const el = document.getElementById('class-calendar');
                                if (!el) return;
                                const start = window.scrollY;
                                const end = el.getBoundingClientRect().top + start;
                                const duration = 1800;
                                const startTime = performance.now();
                                const ease = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
                                const animate = (now: number) => {
                                  const t = Math.min((now - startTime) / duration, 1);
                                  window.scrollTo(0, start + (end - start) * ease(t));
                                  if (t < 1) requestAnimationFrame(animate);
                                };
                                requestAnimationFrame(animate);
                              }}
                              className="text-purple font-semibold underline underline-offset-2 hover:text-purple-dark transition-colors cursor-pointer bg-transparent border-none p-0 font-sans text-[16px]"
                            >
                              Checkout our upcoming classes here
                            </button>
                          </>
                        )}
                      </p>

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
                        <span className="font-sans text-[13px] font-semibold text-dark bg-cream px-3.5 py-1 rounded-full">💰 {o.price}</span>
                        <div className="flex-1" />
                        <CTAButton variant="primary" size="md">Chat with Joey</CTAButton>
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

      {/* Social Credibility Banner */}
      <section className="bg-[hsla(105,48%,46%,0.08)] py-16 px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Google Reviews */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-orange fill-orange" />
              ))}
            </div>
            <p className="font-sans text-[42px] font-extrabold text-dark leading-none mb-1">4.9<span className="text-lg font-bold text-gray">/5</span></p>
            <p className="font-sans text-sm font-semibold text-dark mb-0.5">Google Reviews</p>
            <p className="font-sans text-[13px] text-gray">120+ verified reviews</p>
          </div>

          {/* Testimonial */}
          <div className="flex flex-col items-center text-center px-4">
            <Quote className="w-8 h-8 text-purple-light mb-3 opacity-60" />
            <p className="font-sans text-base text-dark italic leading-[1.7] mb-4 max-w-[320px]">
              "Best date night ever! Joey made the whole experience fun, interactive, and the food was incredible."
            </p>
            <p className="font-sans text-sm font-bold text-dark">— Sarah K.</p>
            <p className="font-sans text-[13px] text-gray">Calgary, AB</p>
          </div>

          {/* Awards */}
          <div className="flex flex-col items-center text-center">
            <Trophy className="w-10 h-10 text-purple mb-3" />
            <p className="font-sans text-lg font-extrabold text-dark mb-1">Consumer Choice Award</p>
            <p className="font-sans text-[13px] text-gray mb-3">Winner 2024 & 2025</p>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-purple" />
              <p className="font-sans text-sm text-dark font-semibold">Top-Rated Experience in Calgary</p>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar */}
      <section id="class-calendar" className="py-24 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <SectionTag>Schedule</SectionTag>
            <h2 className="font-sans text-[28px] md:text-[38px] font-extrabold text-dark mt-4 mb-2">What's cooking this month</h2>
            <p className="font-sans text-base text-gray max-w-[480px] mx-auto">Click any class to see the full menu, details, and book your spot.</p>
          </div>

          {/* Month Nav */}
          <div className="flex items-center justify-center gap-8 mb-4">
            <button onClick={() => setCalMonth(Math.max(0, calMonth - 1))} className={`w-10 h-10 rounded-full border border-border bg-white flex items-center justify-center text-lg transition-all ${calMonth > 0 ? "cursor-pointer opacity-100" : "cursor-default opacity-30"}`}>‹</button>
            <h3 className="font-sans text-[28px] font-bold text-dark min-w-[220px] text-center">{monthNames[calMonth]} 2026</h3>
            <button onClick={() => setCalMonth(Math.min(2, calMonth + 1))} className={`w-10 h-10 rounded-full border border-border bg-white flex items-center justify-center text-lg transition-all ${calMonth < 2 ? "cursor-pointer opacity-100" : "cursor-default opacity-30"}`}>›</button>
          </div>

          {/* Legend */}
          <div className="flex gap-6 justify-center mb-6 flex-wrap">
            {[
              { label: "Public Class", color: "bg-purple" },
              { label: "Couples / Date Night", color: "bg-purple" },
              { label: "Kids", color: "bg-sage" },
              { label: "Private / Corporate", color: "bg-sage" },
              { label: "Sold Out", color: "bg-gray" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-1.5">
                <div className={`w-2.5 h-2.5 rounded-full ${item.color}`} />
                <span className="font-sans text-xs text-gray font-medium">{item.label}</span>
              </div>
            ))}
            {[
              { label: "In-Person", symbol: "📍" },
              { label: "Virtual", symbol: "💻" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-1">
                <span className="text-xs">{item.symbol}</span>
                <span className="font-sans text-xs text-gray font-medium">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="overflow-x-auto -mx-6 px-6">
          <div className="border border-border rounded-2xl overflow-hidden bg-white min-w-[700px]">
            <div className="grid grid-cols-7 border-b border-border">
              {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((d) => (
                <div key={d} className="py-3.5 px-2 text-center font-sans text-[11px] font-bold tracking-[1.5px] text-gray bg-cream">{d}</div>
              ))}
            </div>
            {Array.from({ length: calDays.length / 7 }, (_, week) => (
              <div key={week} className={`grid grid-cols-7 ${week < calDays.length / 7 - 1 ? "border-b border-border" : ""}`}>
                {calDays.slice(week * 7, week * 7 + 7).map((day, di) => {
                  const classes = getClassesForDay(day);
                  const hasClass = classes.length > 0;
                  const isToday = day === today;
                  const isPast = day !== null && day < today;
                  const dayEmoji = getDayImage(day);

                  return (
                    <div key={di} className={`min-h-[130px] p-1.5 relative transition-colors ${di < 6 ? "border-r border-border" : ""} ${isToday ? "bg-purple-pale" : day ? "bg-white" : "bg-gray-light/30"}`} style={{ opacity: isPast ? 0.55 : 1 }}>
                      {day && (
                        <>
                          <div className="flex items-center justify-between px-1.5 pt-1 pb-1.5">
                            <span className={`font-sans text-[13px] ${isToday ? "font-extrabold text-purple" : "font-semibold text-dark"}`}>{day}</span>
                            {isToday && <span className="text-[9px] font-bold text-purple font-sans tracking-wide">TODAY</span>}
                          </div>
                          {!hasClass && dayEmoji && (
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[28px] opacity-15 pointer-events-none">{dayEmoji}</div>
                          )}
                          {classes.map((cls) => (
                            cls.private ? (
                              <div key={cls.id} className="mx-0.5 mb-1 px-2 py-1.5 rounded-lg bg-sage/10 border border-sage/20">
                                <div className="font-sans text-[10px] font-bold mb-0.5 text-sage">{cls.type}</div>
                                <div className="font-sans text-[11px] font-medium leading-tight text-sage italic">{cls.title}</div>
                              </div>
                            ) : (
                            <div
                              key={cls.id}
                              onClick={() => !isPast && setSelectedClass(cls)}
                              className={`mx-0.5 mb-1 px-2 py-1.5 rounded-lg transition-all duration-200 ${isPast ? "cursor-default" : "cursor-pointer hover:scale-[1.02] hover:shadow-[0_4px_12px_rgba(107,33,168,0.15)]"} ${cls.soldOut ? "bg-gray-light border border-border" : "border border-purple/20"}`}
                              style={{ background: cls.soldOut ? undefined : "linear-gradient(135deg, hsl(var(--purple) / 0.07), hsl(var(--orange) / 0.03))" }}
                            >
                              <div className={`font-sans text-[10px] font-bold mb-0.5 ${cls.soldOut ? "text-gray" : "text-purple"}`}>{cls.time} {cls.virtual ? "💻" : "📍"}</div>
                              <div className={`font-sans text-[11px] font-semibold leading-tight ${cls.soldOut ? "text-gray line-through" : "text-dark"}`}>
                                {cls.soldOut ? "Sold Out " : ""}{cls.title}
                              </div>
                              {!cls.soldOut && cls.spots <= 4 && (
                                <div className="font-sans text-[9px] font-bold text-orange mt-0.5">🔥 {cls.spots} spots left</div>
                              )}
                            </div>
                            )
                          ))}
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
          </div>

        </div>
      </section>

      {/* How to Join */}
      <section className="py-24 px-6 bg-gray-light">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <SectionTag>How to Join</SectionTag>
            <h2 className="font-sans text-[28px] md:text-[38px] font-extrabold text-dark mt-4">Cook wherever suits you</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: "🏠", title: "At Our Kitchen", desc: "YW Calgary Community Kitchen in Inglewood. All ingredients, equipment, and aprons provided. Just show up hungry." },
              { icon: "📍", title: "At Your Place", desc: "We bring everything to you. Perfect for private parties at your home, a rented venue, or wherever the celebration is." },
              { icon: "💻", title: "Virtual", desc: "Ingredient list sent in advance. Live interactive cooking over Zoom. Great for long-distance celebrations." },
            ].map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-8 text-center border border-border">
                <div className="text-5xl mb-4">{f.icon}</div>
                <h3 className="font-sans text-[22px] font-bold text-dark mb-2">{f.title}</h3>
                <p className="font-sans text-sm text-gray leading-[1.7]">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PackagesModal
        eventType="private"
        isOpen={showPackages}
        onClose={() => setShowPackages(false)}
        onSubmit={() => { setShowPackages(false); setShowBookingForm(true); }}
      />
      <PrivateEventBookingFormModal
        isOpen={showBookingForm}
        onClose={() => setShowBookingForm(false)}
      />

      <NewsletterBanner />
      <Footer />
    </div>
  );
};

export default ClassesPage;
