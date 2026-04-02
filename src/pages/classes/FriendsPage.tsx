import { useNavigate } from "react-router-dom";
import SectionTag from "@/components/chef/SectionTag";
import CTAButton from "@/components/chef/CTAButton";
import Footer from "@/components/chef/Footer";

import heroImg from "@/assets/chef-joey-61.jpg";

const FriendsPage = () => {
  const navigate = useNavigate();
  const go = (path: string) => { navigate(path); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <div>
      <section className="pt-[100px] md:pt-[120px] pb-16 md:pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-2">
            <span onClick={() => go("/classes")} className="font-sans text-[13px] text-gray cursor-pointer">Classes & Events</span>
            <span className="text-gray mx-2">›</span>
            <span className="font-sans text-[13px] text-purple font-semibold">Friends</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <SectionTag>Friends</SectionTag>
              <h1 className="font-serif text-[32px] md:text-5xl font-extrabold text-dark leading-[1.1] mt-5 mb-5">
                The best nights start in the <span className="text-purple italic">kitchen</span>
              </h1>
              <p className="font-sans text-[16px] md:text-[17px] text-gray leading-[1.7] mb-8">
                Grab your crew and cook something amazing together. Way better than another bar night. Perfect for
                friend groups, girls' night, couples' night, or just because.
              </p>
              <div className="flex gap-4 flex-wrap">
                <CTAButton variant="primary" size="lg">Chat with Joey</CTAButton>
                <CTAButton variant="secondary" size="lg">See Options</CTAButton>
              </div>
            </div>
            <div className="hidden md:block aspect-[4/3] rounded-3xl overflow-hidden">
              <img src={heroImg} alt="Friends" className="w-full h-full object-cover" />
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
                { icon: "⏱️", label: "Duration", value: "2.5 hours of cooking, laughing, and dining", color: "purple" },
                { icon: "👥", label: "Group Size", value: "6 – 20 friends", color: "sage" },
                { icon: "🍽️", label: "Menu", value: "Choose from our menus or customize your own", color: "purple" },
                { icon: "📍", label: "Location", value: "Our Kitchen · Your Home · Any Venue", color: "sage" },
                { icon: "💰", label: "Price", value: "From $95/person — everything included", color: "purple" },
                { icon: "🥂", label: "Add-Ons", value: "Wine pairings available", color: "sage" },
              ],
              rightTitle: "Perfect For",
              rightItems: [
                { icon: "💛", text: "Girls' night out (but in)" },
                { icon: "💛", text: "Couples cooking date night" },
                { icon: "💛", text: "Birthday celebrations with your crew" },
                { icon: "💛", text: "Reunions and catch-ups" },
                { icon: "💛", text: "Just because you deserve great food and great company" },
              ],
            }}
            virtualContent={{
              details: [
                { icon: "⏱️", label: "Duration", value: "2.5 hours of cooking, laughing, and dining", color: "purple" },
                { icon: "👥", label: "Group Size", value: "6 – 20 friends", color: "sage" },
                { icon: "🍽️", label: "Menu", value: "Choose from our menus or customize your own", color: "purple" },
                { icon: "💻", label: "Platform", value: "Zoom — ingredient list sent in advance", color: "sage" },
                { icon: "💰", label: "Price", value: "From $95/person — everything included", color: "purple" },
                { icon: "🥂", label: "Add-Ons", value: "Wine pairings available", color: "sage" },
              ],
              rightTitle: "Perfect For",
              rightItems: [
                { icon: "💛", text: "Girls' night out (but in)" },
                { icon: "💛", text: "Couples cooking date night" },
                { icon: "💛", text: "Birthday celebrations with your crew" },
                { icon: "💛", text: "Reunions and catch-ups" },
                { icon: "💛", text: "Just because you deserve great food and great company" },
              ],
            }}
          />
        </div>
      </section>

      <section className="py-16 md:py-20 px-6 bg-gradient-to-br from-purple to-purple-dark text-center">
        <div className="max-w-[600px] mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-white mb-4">Round up your crew</h2>
          <p className="font-sans text-sm md:text-base text-white/70 mb-8">Pick a date, pick a menu, and we'll handle the rest. It's that easy.</p>
          <CTAButton variant="green" size="lg">Chat with Joey</CTAButton>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FriendsPage;
