import { useNavigate } from "react-router-dom";
import SectionTag from "@/components/chef/SectionTag";
import CTAButton from "@/components/chef/CTAButton";
import FormatTabs from "@/components/chef/FormatTabs";
import Footer from "@/components/chef/Footer";

import heroImg from "@/assets/chef-joey-83.jpg";

const KidsPartyPage = () => {
  const navigate = useNavigate();
  const go = (path: string) => { navigate(path); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <div>
      <section className="pt-[100px] md:pt-[120px] pb-16 md:pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-2">
            <span onClick={() => go("/classes")} className="font-sans text-[13px] text-gray cursor-pointer">Classes & Events</span>
            <span className="text-gray mx-2">›</span>
            <span className="font-sans text-[13px] text-purple font-semibold">Kids Party</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <SectionTag>Kids Party</SectionTag>
              <h1 className="font-serif text-[32px] md:text-5xl font-extrabold text-dark leading-[1.1] mt-5 mb-5">
                The coolest birthday party <span className="text-purple italic">ever</span>
              </h1>
              <p className="font-sans text-[16px] md:text-[17px] text-gray leading-[1.7] mb-8">
                Forget bounce houses. Kids ages 4–15 learn real cooking skills in a safe, fun environment. Birthday parties
                and drop-in sessions that build confidence and creativity.
              </p>
              <div className="flex gap-4 flex-wrap">
                <CTAButton variant="primary" size="lg">Chat with Joey</CTAButton>
                <CTAButton variant="secondary" size="lg">See Classes</CTAButton>
              </div>
            </div>
            <div className="hidden md:block aspect-[4/3] rounded-3xl overflow-hidden">
              <img src={heroImg} alt="Kids Party" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-cream">
        <div className="max-w-[1200px] mx-auto">
          <FormatTabs
            hasInPerson={true}
            hasVirtual={false}
            leftTitle="Party Details"
            inPersonContent={{
              details: [
                { icon: "⏱️", label: "Duration", value: "1.5 – 2 hours of hands-on fun", color: "purple" },
                { icon: "👧", label: "Ages", value: "4 – 15 years old", color: "sage" },
                { icon: "👥", label: "Group Size", value: "8 – 20 kids", color: "purple" },
                { icon: "📍", label: "Location", value: "Our Kitchen or your home", color: "sage" },
                { icon: "💰", label: "Price", value: "From $65/kid — all ingredients and supplies included", color: "purple" },
                { icon: "🎂", label: "Includes", value: "Chef-led cooking, aprons, recipes, and party vibes", color: "sage" },
              ],
              rightTitle: "Why Kids Love It",
              rightItems: [
                { icon: "⭐", text: "They get to cook real food (not just decorate cupcakes)" },
                { icon: "⭐", text: "Hands-on and interactive — every kid participates" },
                { icon: "⭐", text: "Safe, supervised kitchen environment" },
                { icon: "⭐", text: "They eat what they make — and they're proud of it" },
                { icon: "⭐", text: "Take-home recipe cards to recreate at home" },
              ],
            }}
            virtualContent={{
              details: [],
              rightTitle: "",
              rightItems: [],
            }}
          />
        </div>
      </section>

      <section className="py-16 md:py-20 px-6 bg-gradient-to-br from-purple to-purple-dark text-center">
        <div className="max-w-[600px] mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-white mb-4">Give them a party they'll never forget</h2>
          <p className="font-sans text-sm md:text-base text-white/70 mb-8">Book a kids cooking party and watch their faces light up.</p>
          <CTAButton variant="green" size="lg">Chat with Joey</CTAButton>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KidsPartyPage;
