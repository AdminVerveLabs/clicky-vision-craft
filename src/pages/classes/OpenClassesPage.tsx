import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SectionTag from "@/components/chef/SectionTag";
import CTAButton from "@/components/chef/CTAButton";
import ClassModal from "@/components/chef/ClassModal";
import Footer from "@/components/chef/Footer";
import { CLASS_DATA, FOOD_IMAGES, ClassData } from "@/data/classData";

import heroImg from "@/assets/chef-joey-38.jpg";

const OpenClassesPage = () => {
  const navigate = useNavigate();
  const go = (path: string) => { navigate(path); window.scrollTo({ top: 0, behavior: "smooth" }); };

  const [selectedClass, setSelectedClass] = useState<ClassData | null>(null);
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
      <section className="pt-[120px] pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-2">
            <span onClick={() => go("/classes")} className="font-sans text-[13px] text-gray cursor-pointer">Classes & Events</span>
            <span className="text-gray mx-2">›</span>
            <span className="font-sans text-[13px] text-purple font-semibold">Open Classes</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <SectionTag>Open Classes</SectionTag>
              <h1 className="font-serif text-[32px] md:text-5xl font-extrabold text-dark leading-[1.1] mt-5 mb-5">
                Join the table, learn the <span className="text-purple italic">flavors</span>
              </h1>
              <p className="font-sans text-[17px] text-gray leading-[1.7] mb-8">
                Our open enrollment classes welcome everyone—solo adventurers, couples on date night, or friends looking
                for something different. New menus every week, no experience required.
              </p>
              <div className="flex gap-4">
                <CTAButton variant="primary" size="lg">Browse Classes</CTAButton>
                <CTAButton variant="secondary" size="lg">Gift a Class</CTAButton>
              </div>
            </div>
            <div className="hidden md:block aspect-[4/3] rounded-3xl overflow-hidden">
              <img src={heroImg} alt="Open Classes" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Class Details & What to Expect */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-[1200px] mx-auto">
          <FormatTabs
            hasInPerson={true}
            hasVirtual={true}
            leftTitle="Class Details"
            inPersonContent={{
              details: [
                { icon: "⏱️", label: "Duration", value: "2 – 2.5 hours of hands-on cooking + dining", color: "purple" },
                { icon: "👥", label: "Group Size", value: "8 – 16 people per class", color: "sage" },
                { icon: "🍽️", label: "Cuisine", value: "Rotating Creole-inspired menus each week", color: "purple" },
                { icon: "📍", label: "Location", value: "YW Calgary Community Kitchen, Inglewood", color: "sage" },
                { icon: "💰", label: "Price", value: "From $89/person — all ingredients included", color: "purple" },
                { icon: "🌾", label: "Dietary", value: "Accommodations available for allergies & dietary needs", color: "sage" },
              ],
              rightTitle: "What to Expect",
              rightItems: [
                { icon: "1", text: "Arrive, grab a drink, and meet your fellow cooks" },
                { icon: "2", text: "Chef Joey introduces the menu and walks through techniques" },
                { icon: "3", text: "Roll up your sleeves and cook alongside the group" },
                { icon: "4", text: "Plate your creations like a pro" },
                { icon: "5", text: "Sit down and feast on what you've made together" },
              ],
            }}
            virtualContent={{
              details: [
                { icon: "⏱️", label: "Duration", value: "2 – 2.5 hours of hands-on cooking + dining", color: "purple" },
                { icon: "👥", label: "Group Size", value: "8 – 16 people per class", color: "sage" },
                { icon: "🍽️", label: "Cuisine", value: "Rotating Creole-inspired menus each week", color: "purple" },
                { icon: "💻", label: "Platform", value: "Zoom — ingredient list sent in advance", color: "sage" },
                { icon: "💰", label: "Price", value: "From $89/person — all ingredients included", color: "purple" },
                { icon: "🌾", label: "Dietary", value: "Accommodations available for allergies & dietary needs", color: "sage" },
              ],
              rightTitle: "What to Expect",
              rightItems: [
                { icon: "1", text: "Arrive, grab a drink, and meet your fellow cooks" },
                { icon: "2", text: "Chef Joey introduces the menu and walks through techniques" },
                { icon: "3", text: "Roll up your sleeves and cook alongside the group" },
                { icon: "4", text: "Plate your creations like a pro" },
                { icon: "5", text: "Sit down and feast on what you've made together" },
              ],
            }}
          />
        </div>
      </section>

      {/* Calendar */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <SectionTag>Schedule</SectionTag>
            <h2 className="font-serif text-[38px] font-extrabold text-dark mt-4 mb-2">What's cooking this month</h2>
            <p className="font-sans text-base text-gray max-w-[480px] mx-auto">Click any class to see the full menu, details, and book your spot.</p>
          </div>

          {/* Month Nav */}
          <div className="flex items-center justify-center gap-8 mb-4">
            <button onClick={() => setCalMonth(Math.max(0, calMonth - 1))} className={`w-10 h-10 rounded-full border border-border bg-white flex items-center justify-center text-lg transition-all ${calMonth > 0 ? "cursor-pointer opacity-100" : "cursor-default opacity-30"}`}>‹</button>
            <h3 className="font-serif text-[28px] font-bold text-dark min-w-[220px] text-center">{monthNames[calMonth]} 2026</h3>
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

      {/* Bottom CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple to-purple-dark text-center">
        <div className="max-w-[600px] mx-auto">
          <h2 className="font-serif text-4xl font-extrabold text-white mb-4">Ready to get cooking?</h2>
          <p className="font-sans text-base text-white/70 mb-8">Check out our upcoming classes and grab your spot before they fill up.</p>
          <CTAButton variant="green" size="lg">View Upcoming Classes →</CTAButton>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OpenClassesPage;
