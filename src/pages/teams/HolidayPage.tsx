import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SectionTag from "@/components/chef/SectionTag";
import CTAButton from "@/components/chef/CTAButton";
import Footer from "@/components/chef/Footer";
import TeamBookingFormModal from "@/components/chef/TeamBookingFormModal";
import EnbridgeVideoBanner from "@/components/chef/EnbridgeVideoBanner";
import heroImg from "@/assets/chef-joey-114.jpg";

const HolidayPage = () => {
  const navigate = useNavigate();
  const go = (path: string) => { navigate(path); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const [showBookingForm, setShowBookingForm] = useState(false);

  return (
    <div>
      <section className="pt-[100px] md:pt-[120px] pb-16 md:pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-2">
            <span onClick={() => go("/teams")} className="font-sans text-[13px] text-gray cursor-pointer">For Teams</span>
            <span className="text-gray mx-2">›</span>
            <span className="font-sans text-[13px] text-purple font-semibold">Holiday & Celebrations</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <SectionTag>Holiday & Celebrations</SectionTag>
              <h1 className="font-serif text-[32px] md:text-5xl font-extrabold text-dark leading-[1.1] mt-5 mb-5">
                Celebrate the season, <span className="text-purple italic">together</span>
              </h1>
              <p className="font-sans text-[16px] md:text-[17px] text-gray leading-[1.7] mb-8">
                Year-end party? Summer kickoff? We create seasonal menus and themed experiences that feel special
                without the planning headache.
              </p>
              <div className="flex gap-4 flex-wrap">
                <CTAButton variant="primary" size="lg" onClick={() => setShowBookingForm(true)}>Plan Our Party</CTAButton>
                <CTAButton variant="secondary" size="lg">See Themes</CTAButton>
              </div>
            </div>
            <div className="hidden md:block aspect-[4/3] rounded-3xl overflow-hidden">
              <img src={heroImg} alt="Holiday & Celebrations" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <EnbridgeVideoBanner />

      <section className="py-16 md:py-24 px-6 bg-cream">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            <div>
              <h2 className="font-serif text-[24px] md:text-[32px] font-extrabold text-dark mb-6 md:mb-8">Event Details</h2>
              {[
                { icon: "⏱️", label: "Duration", value: "2.5 – 3 hours of cooking and celebration", color: "purple" as const },
                { icon: "👥", label: "Group Size", value: "10 – 50+ people", color: "sage" as const },
                { icon: "🍽️", label: "Menus", value: "Seasonal and themed menus for every occasion", color: "purple" as const },
                { icon: "📍", label: "Location", value: "Our Kitchen · Your Venue · Virtual", color: "sage" as const },
                { icon: "🎄", label: "Themes", value: "Holiday, summer, spring, cultural celebrations", color: "purple" as const },
                { icon: "🎁", label: "Extras", value: "Décor, music, team competitions, prizes", color: "sage" as const },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 py-4 border-b border-border">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0 ${item.color === "purple" ? "bg-purple/10" : "bg-sage/10"}`}>{item.icon}</div>
                  <div>
                    <p className={`font-sans text-[13px] font-bold uppercase tracking-[1px] mb-0.5 ${item.color === "purple" ? "text-purple" : "text-sage"}`}>{item.label}</p>
                    <p className="font-sans text-[15px] text-dark leading-snug">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h2 className="font-serif text-[24px] md:text-[32px] font-extrabold text-dark mb-6 md:mb-8">Popular Celebrations</h2>
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-border">
                {["Holiday party — festive menus and team competitions", "Summer kickoff — light, fresh, outdoor-friendly", "Year-end celebration — reflect and feast together", "Cultural celebrations — Lunar New Year, Diwali, and more", "Milestone events — anniversaries, launches, achievements"].map((item, i) => (
                  <div key={i} className={`flex gap-4 items-start py-3 ${i < 4 ? "border-b border-gray-light" : ""}`}>
                    <div className="w-7 h-7 rounded-full bg-green/10 flex items-center justify-center text-xs font-bold text-green font-sans shrink-0">🎉</div>
                    <p className="font-sans text-[15px] text-dark leading-snug">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-6 bg-gradient-to-br from-purple to-purple-dark text-center">
        <div className="max-w-[600px] mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-white mb-4">Let's make this season unforgettable</h2>
          <p className="font-sans text-sm md:text-base text-white/70 mb-8">Tell us about your celebration and we'll handle the rest.</p>
          <CTAButton variant="green" size="lg" onClick={() => setShowBookingForm(true)}>Start Planning →</CTAButton>
        </div>
      </section>

      <Footer />

      <TeamBookingFormModal
        isOpen={showBookingForm}
        onClose={() => setShowBookingForm(false)}
      />
    </div>
  );
};

export default HolidayPage;
