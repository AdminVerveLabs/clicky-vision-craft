import { useNavigate } from "react-router-dom";
import SectionTag from "@/components/chef/SectionTag";
import CTAButton from "@/components/chef/CTAButton";
import Footer from "@/components/chef/Footer";

const OpenClassesPage = () => {
  const navigate = useNavigate();
  const go = (path: string) => { navigate(path); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <div>
      <section className="pt-[120px] pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-2">
            <span onClick={() => go("/classes")} className="font-sans text-[13px] text-gray cursor-pointer">Classes & Events</span>
            <span className="text-gray mx-2">›</span>
            <span className="font-sans text-[13px] text-orange font-semibold">Open Classes</span>
          </div>
          <div className="grid grid-cols-2 gap-16 items-center">
            <div>
              <SectionTag variant="orange">Open Classes</SectionTag>
              <h1 className="font-serif text-5xl font-extrabold text-dark leading-[1.1] mt-5 mb-5">
                Join the table, learn the <span className="text-orange italic">flavors</span>
              </h1>
              <p className="font-sans text-[17px] text-gray leading-[1.7] mb-8">
                Our open enrollment classes welcome everyone—solo adventurers, couples on date night, or friends looking
                for something different. New menus every week, no experience required.
              </p>
              <div className="flex gap-4">
                <CTAButton variant="orange" size="lg">Browse Classes</CTAButton>
                <CTAButton variant="secondary" size="lg">Gift a Class</CTAButton>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-orange-pale to-purple/10 flex items-center justify-center">
              <span className="text-7xl">👨‍🍳🔥</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-cream">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-[32px] font-extrabold text-dark mb-8">Class Details</h2>
              {[
                { icon: "⏱️", label: "Duration", value: "2 – 2.5 hours of hands-on cooking + dining", color: "orange" as const },
                { icon: "👥", label: "Group Size", value: "8 – 16 people per class", color: "purple" as const },
                { icon: "🍽️", label: "Cuisine", value: "Rotating Creole-inspired menus each week", color: "sage" as const },
                { icon: "📍", label: "Location", value: "YW Calgary Community Kitchen, Inglewood", color: "orange" as const },
                { icon: "💰", label: "Price", value: "From $89/person — all ingredients included", color: "purple" as const },
                { icon: "🌾", label: "Dietary", value: "Accommodations available for allergies & dietary needs", color: "sage" as const },
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
              <h2 className="font-serif text-[32px] font-extrabold text-dark mb-8">What to Expect</h2>
              <div className="bg-white rounded-2xl p-8 border border-border">
                {[
                  "Arrive, grab a drink, and meet your fellow cooks",
                  "Chef Joey introduces the menu and walks through techniques",
                  "Roll up your sleeves and cook alongside the group",
                  "Plate your creations like a pro",
                  "Sit down and feast on what you've made together",
                ].map((step, i) => (
                  <div key={i} className={`flex gap-4 items-start py-3 ${i < 4 ? "border-b border-gray-light" : ""}`}>
                    <div className="w-7 h-7 rounded-full bg-orange/10 flex items-center justify-center text-xs font-bold text-orange font-sans shrink-0">{i + 1}</div>
                    <p className="font-sans text-[15px] text-dark leading-snug">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-orange to-orange-dark text-center">
        <div className="max-w-[600px] mx-auto">
          <h2 className="font-serif text-4xl font-extrabold text-white mb-4">Ready to get cooking?</h2>
          <p className="font-sans text-base text-white/70 mb-8">Check out our upcoming classes and grab your spot before they fill up.</p>
          <CTAButton variant="primary" size="lg">View Upcoming Classes →</CTAButton>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OpenClassesPage;
