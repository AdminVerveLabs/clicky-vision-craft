import { useNavigate } from "react-router-dom";
import SectionTag from "@/components/chef/SectionTag";
import CTAButton from "@/components/chef/CTAButton";
import Footer from "@/components/chef/Footer";
import heroImg from "@/assets/chef-joey-101.jpg";

const SpecialOccasionsPage = () => {
  const navigate = useNavigate();
  const go = (path: string) => { navigate(path); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <div>
      <section className="pt-[100px] md:pt-[120px] pb-16 md:pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-2">
            <span onClick={() => go("/classes")} className="font-sans text-[13px] text-gray cursor-pointer">Classes & Events</span>
            <span className="text-gray mx-2">›</span>
            <span className="font-sans text-[13px] text-purple font-semibold">Special Occasions</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <SectionTag>Special Occasions</SectionTag>
              <h1 className="font-serif text-[32px] md:text-5xl font-extrabold text-dark leading-[1.1] mt-5 mb-5">
                Make it <span className="text-orange italic">unforgettable</span>
              </h1>
              <p className="font-sans text-[16px] md:text-[17px] text-gray leading-[1.7] mb-8">
                Signature themed sessions, seasonal specials, and limited-edition experiences. From "Off to College" survival
                cooking to "Date Night: Creole Edition"—these are the ones people talk about.
              </p>
              <div className="flex gap-4 flex-wrap">
                <CTAButton variant="primary" size="lg">See Upcoming</CTAButton>
                <CTAButton variant="secondary" size="lg">Request Custom</CTAButton>
              </div>
            </div>
            <div className="hidden md:block aspect-[4/3] rounded-3xl overflow-hidden">
              <img src={heroImg} alt="Special Occasions" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-cream">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            <div>
              <h2 className="font-serif text-[24px] md:text-[32px] font-extrabold text-dark mb-6 md:mb-8">Experience Details</h2>
              {[
                { icon: "⏱️", label: "Duration", value: "2 – 3 hours depending on the experience", color: "purple" as const },
                { icon: "👥", label: "Group Size", value: "8 – 24 people per session", color: "sage" as const },
                { icon: "🍽️", label: "Themes", value: "Seasonal menus, life milestones, cultural explorations", color: "purple" as const },
                { icon: "📍", label: "Location", value: "Our Kitchen or your venue", color: "sage" as const },
                { icon: "💰", label: "Price", value: "From $99/person", color: "purple" as const },
                { icon: "🎁", label: "Includes", value: "All ingredients, recipes, aprons, and themed extras", color: "sage" as const },
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
              <h2 className="font-serif text-[24px] md:text-[32px] font-extrabold text-dark mb-6 md:mb-8">Signature Themes</h2>
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-border">
                {["Off to College — survival cooking for new adults", "Date Night: Creole Edition — cook together, dine together", "Basic Skills Bootcamp — knife skills, sauces, and confidence", "Holiday Specials — seasonal menus for every celebration", "Cultural Journey — explore cuisines from around the world"].map((item, i) => (
                  <div key={i} className={`flex gap-4 items-start py-3 ${i < 4 ? "border-b border-gray-light" : ""}`}>
                    <div className="w-7 h-7 rounded-full bg-green/10 flex items-center justify-center text-xs font-bold text-green font-sans shrink-0">✦</div>
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
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-white mb-4">Don't miss our next special session</h2>
          <p className="font-sans text-sm md:text-base text-white/70 mb-8">These sell out fast. Check the schedule and book your spot.</p>
          <CTAButton variant="green" size="lg">View Schedule →</CTAButton>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SpecialOccasionsPage;
