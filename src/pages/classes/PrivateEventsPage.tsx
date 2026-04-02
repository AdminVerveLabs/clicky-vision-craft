import { useNavigate } from "react-router-dom";
import SectionTag from "@/components/chef/SectionTag";
import CTAButton from "@/components/chef/CTAButton";
import Footer from "@/components/chef/Footer";

import heroImg from "@/assets/private-classes.jpg";

const PrivateEventsPage = () => {
  const navigate = useNavigate();
  const go = (path: string) => { navigate(path); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <div>
      <section className="pt-[100px] md:pt-[120px] pb-16 md:pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-2">
            <span onClick={() => go("/classes")} className="font-sans text-[13px] text-gray cursor-pointer">Classes & Events</span>
            <span className="text-gray mx-2">›</span>
            <span className="font-sans text-[13px] text-purple font-semibold">Private Events</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <SectionTag>Private Events</SectionTag>
              <h1 className="font-serif text-[32px] md:text-5xl font-extrabold text-dark leading-[1.1] mt-5 mb-5">
                Your party, your <span className="text-purple italic">menu</span>
              </h1>
              <p className="font-sans text-[16px] md:text-[17px] text-gray leading-[1.7] mb-8">
                Birthday bash? Anniversary dinner? Just because? We customize everything—the menu, the vibe, the whole
                experience. You show up ready to celebrate.
              </p>
              <div className="flex gap-4 flex-wrap">
                <CTAButton variant="primary" size="lg">Chat with Joey</CTAButton>
                <CTAButton variant="secondary" size="lg">Request Pricing</CTAButton>
              </div>
            </div>
            <div className="hidden md:block aspect-[4/3] rounded-3xl overflow-hidden">
              <img src={heroImg} alt="Private Events" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-cream">
        <div className="max-w-[1200px] mx-auto">
          <FormatTabs
            hasInPerson={true}
            hasVirtual={true}
            leftTitle="Event Details"
            inPersonContent={{
              details: [
                { icon: "⏱️", label: "Duration", value: "2.5 – 3 hours including cooking and dining", color: "purple" },
                { icon: "👥", label: "Group Size", value: "6 – 30 guests", color: "sage" },
                { icon: "🍽️", label: "Menu", value: "Fully customized to your tastes and occasion", color: "purple" },
                { icon: "📍", label: "Location", value: "Our Kitchen · Your Home · Any Venue", color: "sage" },
                { icon: "💰", label: "Price", value: "From $125/person — all-inclusive", color: "purple" },
                { icon: "🎂", label: "Add-Ons", value: "Custom cakes, wine pairings, décor packages available", color: "sage" },
              ],
              rightTitle: "Popular Occasions",
              rightItems: [
                { icon: "🎈", text: "Birthday celebrations" },
                { icon: "🎈", text: "Anniversary dinners" },
                { icon: "🎈", text: "Bachelorette & bachelor parties" },
                { icon: "🎈", text: "Girls' night out" },
                { icon: "🎈", text: "Retirement parties" },
              ],
            }}
            virtualContent={{
              details: [
                { icon: "⏱️", label: "Duration", value: "2.5 – 3 hours including cooking and dining", color: "purple" },
                { icon: "👥", label: "Group Size", value: "6 – 30 guests", color: "sage" },
                { icon: "🍽️", label: "Menu", value: "Fully customized to your tastes and occasion", color: "purple" },
                { icon: "💻", label: "Platform", value: "Zoom — ingredient list sent in advance", color: "sage" },
                { icon: "💰", label: "Price", value: "From $125/person — all-inclusive", color: "purple" },
                { icon: "🎂", label: "Add-Ons", value: "Custom cakes, wine pairings, décor packages available", color: "sage" },
              ],
              rightTitle: "Popular Occasions",
              rightItems: [
                { icon: "🎈", text: "Birthday celebrations" },
                { icon: "🎈", text: "Anniversary dinners" },
                { icon: "🎈", text: "Bachelorette & bachelor parties" },
                { icon: "🎈", text: "Girls' night out" },
                { icon: "🎈", text: "Retirement parties" },
              ],
            }}
          />
        </div>
      </section>

      <section className="py-16 md:py-20 px-6 bg-gradient-to-br from-purple to-purple-dark text-center">
        <div className="max-w-[600px] mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-white mb-4">Let's plan your perfect event</h2>
          <p className="font-sans text-sm md:text-base text-white/70 mb-8">Tell us about your occasion and we'll create a custom experience your guests will love.</p>
          <CTAButton variant="green" size="lg">Chat with Joey</CTAButton>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivateEventsPage;
