import { useNavigate } from "react-router-dom";
import SectionTag from "@/components/chef/SectionTag";
import CTAButton from "@/components/chef/CTAButton";
import Footer from "@/components/chef/Footer";

import heroImg from "@/assets/chef-joey-106.jpg";

const CateringPage = () => {
  const navigate = useNavigate();
  const go = (path: string) => { navigate(path); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <div>
      <section className="pt-[100px] md:pt-[120px] pb-16 md:pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-2">
            <span onClick={() => go("/classes")} className="font-sans text-[13px] text-gray cursor-pointer">Classes & Events</span>
            <span className="text-gray mx-2">›</span>
            <span className="font-sans text-[13px] text-purple font-semibold">Catering</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <SectionTag>Catering</SectionTag>
              <h1 className="font-serif text-[32px] md:text-5xl font-extrabold text-dark leading-[1.1] mt-5 mb-5">
                Creole flavors, <span className="text-purple italic">delivered</span>
              </h1>
              <p className="font-sans text-[16px] md:text-[17px] text-gray leading-[1.7] mb-8">
                From intimate dinner parties to large gatherings, Chef Joey's catering brings bold Creole flavors to your
                event. Full-service or drop-off—we make it easy and delicious.
              </p>
              <div className="flex gap-4 flex-wrap">
                <CTAButton variant="primary" size="lg">Get a Quote</CTAButton>
                <CTAButton variant="secondary" size="lg">See Menus</CTAButton>
              </div>
            </div>
            <div className="hidden md:block aspect-[4/3] rounded-3xl overflow-hidden">
              <img src={heroImg} alt="Catering" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-cream">
        <div className="max-w-[1200px] mx-auto">
          <FormatTabs
            hasInPerson={true}
            hasVirtual={false}
            leftTitle="Catering Details"
            inPersonContent={{
              details: [
                { icon: "👥", label: "Group Size", value: "10 – 200+ guests", color: "purple" },
                { icon: "🍽️", label: "Style", value: "Buffet, family-style, plated, or food stations", color: "sage" },
                { icon: "📍", label: "Service", value: "Full-service with staff or convenient drop-off", color: "purple" },
                { icon: "🌾", label: "Dietary", value: "Fully customizable for all dietary requirements", color: "sage" },
                { icon: "💰", label: "Price", value: "Custom pricing based on menu and guest count", color: "purple" },
                { icon: "📋", label: "Planning", value: "Menu tasting available for events over 50 guests", color: "sage" },
              ],
              rightTitle: "Popular Menus",
              rightItems: [
                { icon: "🍴", text: "Creole Classics — gumbo, jambalaya, étouffée" },
                { icon: "🍴", text: "Southern Comfort — fried chicken, mac & cheese, collards" },
                { icon: "🍴", text: "Brunch Spread — beignets, shrimp & grits, mimosas" },
                { icon: "🍴", text: "Light Bites — appetizer platters and passed hors d'oeuvres" },
                { icon: "🍴", text: "Custom Menu — designed around your event and tastes" },
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
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-white mb-4">Let us cater your next event</h2>
          <p className="font-sans text-sm md:text-base text-white/70 mb-8">Tell us about your event and we'll put together a custom menu and quote.</p>
          <CTAButton variant="green" size="lg">Request a Quote →</CTAButton>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CateringPage;
