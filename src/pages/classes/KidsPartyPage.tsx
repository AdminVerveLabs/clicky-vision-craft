import { useNavigate } from "react-router-dom";
import SectionTag from "@/components/chef/SectionTag";
import CTAButton from "@/components/chef/CTAButton";
import Footer from "@/components/chef/Footer";
import heroImg from "@/assets/chef-joey-83.jpg";

const KidsPartyPage = () => {
  const navigate = useNavigate();
  const go = (path: string) => { navigate(path); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <div>
      <section className="pt-[120px] pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-2">
            <span onClick={() => go("/classes")} className="font-sans text-[13px] text-gray cursor-pointer">Classes & Events</span>
            <span className="text-gray mx-2">›</span>
            <span className="font-sans text-[13px] text-orange font-semibold">Kids Party</span>
          </div>
          <div className="grid grid-cols-2 gap-16 items-center">
            <div>
              <SectionTag variant="orange">Kids Party</SectionTag>
              <h1 className="font-serif text-5xl font-extrabold text-dark leading-[1.1] mt-5 mb-5">
                The coolest birthday party <span className="text-orange italic">ever</span>
              </h1>
              <p className="font-sans text-[17px] text-gray leading-[1.7] mb-8">
                Forget bounce houses. Kids ages 4–15 learn real cooking skills in a safe, fun environment. Birthday parties
                and drop-in sessions that build confidence and creativity.
              </p>
              <div className="flex gap-4">
                <CTAButton variant="orange" size="lg">Book a Kids Party</CTAButton>
                <CTAButton variant="secondary" size="lg">See Classes</CTAButton>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-3xl overflow-hidden">
              <img src={heroImg} alt="Kids Party" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-cream">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-[32px] font-extrabold text-dark mb-8">Party Details</h2>
              {[
                { icon: "⏱️", label: "Duration", value: "1.5 – 2 hours of hands-on fun", color: "orange" as const },
                { icon: "👧", label: "Ages", value: "4 – 15 years old", color: "purple" as const },
                { icon: "👥", label: "Group Size", value: "8 – 20 kids", color: "sage" as const },
                { icon: "📍", label: "Location", value: "Our Kitchen or your home", color: "orange" as const },
                { icon: "💰", label: "Price", value: "From $65/kid — all ingredients and supplies included", color: "purple" as const },
                { icon: "🎂", label: "Includes", value: "Chef-led cooking, aprons, recipes, and party vibes", color: "sage" as const },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 py-4 border-b border-border">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0 ${item.color === "purple" ? "bg-purple/10" : item.color === "orange" ? "bg-orange/10" : "bg-sage/10"}`}>{item.icon}</div>
                  <div>
                    <p className={`font-sans text-[13px] font-bold uppercase tracking-[1px] mb-0.5 ${item.color === "purple" ? "text-purple" : item.color === "orange" ? "text-orange" : "text-sage"}`}>{item.label}</p>
                    <p className="font-sans text-[15px] text-dark leading-snug">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h2 className="font-serif text-[32px] font-extrabold text-dark mb-8">Why Kids Love It</h2>
              <div className="bg-white rounded-2xl p-8 border border-border">
                {["They get to cook real food (not just decorate cupcakes)", "Hands-on and interactive — every kid participates", "Safe, supervised kitchen environment", "They eat what they make — and they're proud of it", "Take-home recipe cards to recreate at home"].map((item, i) => (
                  <div key={i} className={`flex gap-4 items-start py-3 ${i < 4 ? "border-b border-gray-light" : ""}`}>
                    <div className="w-7 h-7 rounded-full bg-orange/10 flex items-center justify-center text-xs font-bold text-orange font-sans shrink-0">⭐</div>
                    <p className="font-sans text-[15px] text-dark leading-snug">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-orange to-orange-dark text-center">
        <div className="max-w-[600px] mx-auto">
          <h2 className="font-serif text-4xl font-extrabold text-white mb-4">Give them a party they'll never forget</h2>
          <p className="font-sans text-base text-white/70 mb-8">Book a kids cooking party and watch their faces light up.</p>
          <CTAButton variant="primary" size="lg">Book a Party →</CTAButton>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KidsPartyPage;
