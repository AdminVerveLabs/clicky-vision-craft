import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SectionTag from "@/components/chef/SectionTag";
import CTAButton from "@/components/chef/CTAButton";
import ServiceCard from "@/components/chef/ServiceCard";
import ClassModal from "@/components/chef/ClassModal";
import NewsletterBanner from "@/components/chef/NewsletterBanner";
import Footer from "@/components/chef/Footer";
import { CLASS_DATA, FOOD_IMAGES, ClassData } from "@/data/classData";

const ClassesPage = () => {
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
      <section className="pt-[120px] pb-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[40%] h-full bg-gradient-to-b from-orange-pale to-transparent opacity-50" />
        <div className="max-w-[1200px] mx-auto px-6 relative">
          <div className="max-w-[700px] mx-auto text-center">
            <SectionTag variant="orange">Classes & Events</SectionTag>
            <h1 className="font-serif text-[52px] font-extrabold text-dark leading-[1.1] mt-5 mb-5">
              Your next great meal starts <span className="text-orange italic">here</span>
            </h1>
            <p className="font-sans text-lg text-gray leading-[1.7] mb-8">
              From open classes to private celebrations, we've got the perfect culinary adventure. No experience needed—just bring your appetite and a sense of fun.
            </p>
            <div className="flex gap-4 justify-center">
              <CTAButton variant="orange" size="lg">Browse Upcoming Classes</CTAButton>
              <CTAButton variant="secondary" size="lg" onClick={() => go("/public-classes")}>Book a Private Event</CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Types */}
      <section className="py-24 px-6 bg-gray-light">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <SectionTag variant="orange">Experiences</SectionTag>
            <h2 className="font-serif text-[38px] font-extrabold text-dark mt-4">Find your flavor</h2>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <ServiceCard title="Public Classes" subtitle="Open Enrollment" description="Join a group of fellow food lovers for a hands-on class. New menus every week. Perfect for date nights, solo adventures, or grabbing a friend." price="From $89/person" tag="OPEN" accentColor="orange" onClick={() => go("/public-classes")} />
            <ServiceCard title="Private Parties" subtitle="Adults & Celebrations" description="Birthday bash? Anniversary dinner? Girls' night? We customize the menu and the vibe. You show up ready to have a blast." price="From $125/person" accentColor="orange" onClick={() => go("/public-classes")} />
            <ServiceCard title="Kids Cooking" subtitle="Ages 4–15" description="Build kitchen confidence and creativity. Kids learn real skills in a safe, fun environment. Birthday parties and drop-in sessions available." price="From $65/kid" accentColor="orange" onClick={() => go("/public-classes")} />
          </div>
          <div className="grid grid-cols-2 gap-6 mt-6">
            <ServiceCard title="Signature Sessions" subtitle="Limited Edition" description="Special themed experiences: 'Off to College' survival cooking, 'Basic Skills Bootcamp', 'Date Night: Creole Edition', and seasonal specials." price="From $99/person" tag="LIMITED" onClick={() => {}} />
            <ServiceCard title="Gift Certificates" subtitle="The Perfect Gift" description="Give the gift of a great time. Available for any class or experience. Never expires. Because nobody wants another candle." accentColor="sage" onClick={() => {}} />
          </div>
        </div>
      </section>

      {/* Calendar */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <SectionTag variant="orange">Schedule</SectionTag>
            <h2 className="font-serif text-[38px] font-extrabold text-dark mt-4 mb-2">What's cooking this month</h2>
            <p className="font-sans text-base text-gray max-w-[480px] mx-auto">Click any class to see the full menu, details, and book your spot.</p>
          </div>

          {/* Month Nav */}
          <div className="flex items-center justify-center gap-8 mb-8">
            <button onClick={() => setCalMonth(Math.max(0, calMonth - 1))} className={`w-10 h-10 rounded-full border border-border bg-white flex items-center justify-center text-lg transition-all ${calMonth > 0 ? "cursor-pointer opacity-100" : "cursor-default opacity-30"}`}>‹</button>
            <h3 className="font-serif text-[28px] font-bold text-dark min-w-[220px] text-center">{monthNames[calMonth]} 2026</h3>
            <button onClick={() => setCalMonth(Math.min(2, calMonth + 1))} className={`w-10 h-10 rounded-full border border-border bg-white flex items-center justify-center text-lg transition-all ${calMonth < 2 ? "cursor-pointer opacity-100" : "cursor-default opacity-30"}`}>›</button>
          </div>

          {/* Calendar Grid */}
          <div className="border border-border rounded-2xl overflow-hidden bg-white">
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
                            <div
                              key={cls.id}
                              onClick={() => !isPast && setSelectedClass(cls)}
                              className={`mx-0.5 mb-1 px-2 py-1.5 rounded-lg transition-all duration-200 ${isPast ? "cursor-default" : "cursor-pointer hover:scale-[1.02] hover:shadow-[0_4px_12px_rgba(107,33,168,0.15)]"} ${cls.soldOut ? "bg-gray-light border border-border" : "border border-purple/20"}`}
                              style={{ background: cls.soldOut ? undefined : "linear-gradient(135deg, hsl(var(--purple) / 0.07), hsl(var(--orange) / 0.03))" }}
                            >
                              <div className={`font-sans text-[10px] font-bold mb-0.5 ${cls.soldOut ? "text-gray" : "text-purple"}`}>{cls.time}</div>
                              <div className={`font-sans text-[11px] font-semibold leading-tight ${cls.soldOut ? "text-gray line-through" : "text-dark"}`}>
                                {cls.soldOut ? "Sold Out " : ""}{cls.title}
                              </div>
                              {!cls.soldOut && cls.spots <= 4 && (
                                <div className="font-sans text-[9px] font-bold text-orange mt-0.5">🔥 {cls.spots} spots left</div>
                              )}
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex gap-6 justify-center mt-5 flex-wrap">
            {[
              { label: "Public Class", color: "bg-orange" },
              { label: "Couples / Date Night", color: "bg-purple" },
              { label: "Kids", color: "bg-sage" },
              { label: "Signature / Skills", color: "bg-dark" },
              { label: "Sold Out", color: "bg-gray" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-1.5">
                <div className={`w-2.5 h-2.5 rounded-full ${item.color}`} />
                <span className="font-sans text-xs text-gray font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-24 px-6 bg-gray-light">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <SectionTag variant="orange">How to Join</SectionTag>
            <h2 className="font-serif text-[38px] font-extrabold text-dark mt-4">Cook wherever suits you</h2>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {[
              { icon: "🏠", title: "At Our Kitchen", desc: "YW Calgary Community Kitchen in Inglewood. All ingredients, equipment, and aprons provided. Just show up hungry." },
              { icon: "📍", title: "At Your Place", desc: "We bring everything to you. Perfect for private parties at your home, a rented venue, or wherever the celebration is." },
              { icon: "💻", title: "Virtual", desc: "Ingredient list sent in advance. Live interactive cooking over Zoom. Great for long-distance celebrations." },
            ].map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-8 text-center border border-border">
                <div className="text-5xl mb-4">{f.icon}</div>
                <h3 className="font-serif text-[22px] font-bold text-dark mb-2">{f.title}</h3>
                <p className="font-sans text-sm text-gray leading-[1.7]">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsletterBanner />
      <Footer />
    </div>
  );
};

export default ClassesPage;
