import { useNavigate } from "react-router-dom";
import SectionTag from "@/components/chef/SectionTag";
import CTAButton from "@/components/chef/CTAButton";
import FormatTabs from "@/components/chef/FormatTabs";
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
                Make it <span className="text-purple italic">unforgettable</span>
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
          <FormatTabs
            hasInPerson={true}
            hasVirtual={true}
            leftTitle="Experience Details"
            inPersonContent={{
              details: [
                { icon: "⏱️", label: "Duration", value: "2 – 3 hours depending on the experience", color: "purple" },
                { icon: "👥", label: "Group Size", value: "8 – 24 people per session", color: "sage" },
                { icon: "🍽️", label: "Themes", value: "Seasonal menus, life milestones, cultural explorations", color: "purple" },
                { icon: "📍", label: "Location", value: "Our Kitchen or your venue", color: "sage" },
                { icon: "💰", label: "Price", value: "From $99/person", color: "purple" },
                { icon: "🎁", label: "Includes", value: "All ingredients, recipes, aprons, and themed extras", color: "sage" },
              ],
              rightTitle: "Signature Themes",
              rightItems: [
                { icon: "✦", text: "Off to College — survival cooking for new adults" },
                { icon: "✦", text: "Date Night: Creole Edition — cook together, dine together" },
                { icon: "✦", text: "Basic Skills Bootcamp — knife skills, sauces, and confidence" },
                { icon: "✦", text: "Holiday Specials — seasonal menus for every celebration" },
                { icon: "✦", text: "Cultural Journey — explore cuisines from around the world" },
              ],
            }}
            virtualContent={{
              details: [
                { icon: "⏱️", label: "Duration", value: "2 – 3 hours depending on the experience", color: "purple" },
                { icon: "👥", label: "Group Size", value: "8 – 24 people per session", color: "sage" },
                { icon: "🍽️", label: "Themes", value: "Seasonal menus, life milestones, cultural explorations", color: "purple" },
                { icon: "💻", label: "Platform", value: "Zoom — ingredient list sent in advance", color: "sage" },
                { icon: "💰", label: "Price", value: "From $99/person", color: "purple" },
                { icon: "🎁", label: "Includes", value: "All ingredients, recipes, aprons, and themed extras", color: "sage" },
              ],
              rightTitle: "Signature Themes",
              rightItems: [
                { icon: "✦", text: "Off to College — survival cooking for new adults" },
                { icon: "✦", text: "Date Night: Creole Edition — cook together, dine together" },
                { icon: "✦", text: "Basic Skills Bootcamp — knife skills, sauces, and confidence" },
                { icon: "✦", text: "Holiday Specials — seasonal menus for every celebration" },
                { icon: "✦", text: "Cultural Journey — explore cuisines from around the world" },
              ],
            }}
          />
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
