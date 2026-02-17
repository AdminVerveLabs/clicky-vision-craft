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
      <section className="pt-[120px] pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-2">
            <span onClick={() => go("/classes")} className="font-sans text-[13px] text-gray cursor-pointer">Classes & Events</span>
            <span className="text-gray mx-2">›</span>
            <span className="font-sans text-[13px] text-orange font-semibold">Catering</span>
          </div>
          <div className="grid grid-cols-2 gap-16 items-center">
            <div>
              <SectionTag variant="orange">Catering</SectionTag>
              <h1 className="font-serif text-5xl font-extrabold text-dark leading-[1.1] mt-5 mb-5">
                Creole flavors, <span className="text-orange italic">delivered</span>
              </h1>
              <p className="font-sans text-[17px] text-gray leading-[1.7] mb-8">
                From intimate dinner parties to large gatherings, Chef Joey's catering brings bold Creole flavors to your
                event. Full-service or drop-off—we make it easy and delicious.
              </p>
              <div className="flex gap-4">
                <CTAButton variant="orange" size="lg">Get a Quote</CTAButton>
                <CTAButton variant="secondary" size="lg">See Menus</CTAButton>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-3xl overflow-hidden">
              <img src={heroImg} alt="Catering" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-cream">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-[32px] font-extrabold text-dark mb-8">Catering Details</h2>
              {[
                { icon: "👥", label: "Group Size", value: "10 – 200+ guests", color: "orange" as const },
                { icon: "🍽️", label: "Style", value: "Buffet, family-style, plated, or food stations", color: "purple" as const },
                { icon: "📍", label: "Service", value: "Full-service with staff or convenient drop-off", color: "sage" as const },
                { icon: "🌾", label: "Dietary", value: "Fully customizable for all dietary requirements", color: "orange" as const },
                { icon: "💰", label: "Price", value: "Custom pricing based on menu and guest count", color: "purple" as const },
                { icon: "📋", label: "Planning", value: "Menu tasting available for events over 50 guests", color: "sage" as const },
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
              <h2 className="font-serif text-[32px] font-extrabold text-dark mb-8">Popular Menus</h2>
              <div className="bg-white rounded-2xl p-8 border border-border">
                {["Creole Classics — gumbo, jambalaya, étouffée", "Southern Comfort — fried chicken, mac & cheese, collards", "Brunch Spread — beignets, shrimp & grits, mimosas", "Light Bites — appetizer platters and passed hors d'oeuvres", "Custom Menu — designed around your event and tastes"].map((item, i) => (
                  <div key={i} className={`flex gap-4 items-start py-3 ${i < 4 ? "border-b border-gray-light" : ""}`}>
                    <div className="w-7 h-7 rounded-full bg-orange/10 flex items-center justify-center text-xs font-bold text-orange font-sans shrink-0">🍴</div>
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
          <h2 className="font-serif text-4xl font-extrabold text-white mb-4">Let us cater your next event</h2>
          <p className="font-sans text-base text-white/70 mb-8">Tell us about your event and we'll put together a custom menu and quote.</p>
          <CTAButton variant="primary" size="lg">Request a Quote →</CTAButton>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CateringPage;
