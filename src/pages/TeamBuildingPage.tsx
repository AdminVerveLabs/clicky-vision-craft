import { useNavigate } from "react-router-dom";
import SectionTag from "@/components/chef/SectionTag";
import CTAButton from "@/components/chef/CTAButton";
import Footer from "@/components/chef/Footer";
import heroImg from "@/assets/chef-joey-66.jpg";

const TeamBuildingPage = () => {
  const navigate = useNavigate();
  const go = (path: string) => { navigate(path); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <div>
      <section className="pt-[120px] pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-2">
            <span onClick={() => go("/teams")} className="font-sans text-[13px] text-gray cursor-pointer">For Teams</span>
            <span className="text-gray mx-2">›</span>
            <span className="font-sans text-[13px] text-purple font-semibold">Team Building Events</span>
          </div>

          <div className="grid grid-cols-2 gap-16 items-center">
            <div>
              <SectionTag>Team Building</SectionTag>
              <h1 className="font-serif text-5xl font-extrabold text-dark leading-[1.1] mt-5 mb-5">
                Team building that doesn't feel like <span className="text-purple italic">team building</span>
              </h1>
              <p className="font-sans text-[17px] text-gray leading-[1.7] mb-8">
                No trust falls. No awkward icebreakers. Just great food, real conversations, and a shared experience your
                team will actually enjoy. Teams cook together, problem-solve together, and feast together.
              </p>
              <div className="flex gap-4">
                <CTAButton variant="primary" size="lg">Book a Call</CTAButton>
                <CTAButton variant="secondary" size="lg">Request Pricing</CTAButton>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-3xl overflow-hidden">
              <img src={heroImg} alt="Team Building" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-[32px] font-extrabold text-dark mb-8">Experience Details</h2>
              {[
                { icon: "⏱️", label: "Duration", value: "2.5 – 3 hours of hands-on cooking + dining", color: "purple" as const },
                { icon: "👥", label: "Group Size", value: "8 – 30 people (larger groups available on request)", color: "orange" as const },
                { icon: "🍽️", label: "Cuisine", value: "Creole-inspired with customizable menus", color: "sage" as const },
                { icon: "📍", label: "Location", value: "Our Kitchen · Your Office · Your Venue · Virtual", color: "purple" as const },
                { icon: "🎒", label: "What's Included", value: "All ingredients, equipment, aprons, recipes to take home", color: "orange" as const },
                { icon: "🌾", label: "Dietary", value: "Fully customizable for allergies and dietary needs", color: "sage" as const },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 py-4 border-b border-border">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0 ${
                    item.color === "purple" ? "bg-purple/10" : item.color === "orange" ? "bg-orange/10" : "bg-sage/10"
                  }`}>{item.icon}</div>
                  <div>
                    <p className={`font-sans text-[13px] font-bold uppercase tracking-[1px] mb-0.5 ${
                      item.color === "purple" ? "text-purple" : item.color === "orange" ? "text-orange" : "text-sage"
                    }`}>{item.label}</p>
                    <p className="font-sans text-[15px] text-dark leading-snug">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h2 className="font-serif text-[32px] font-extrabold text-dark mb-8">What to Expect</h2>
              <div className="bg-white rounded-2xl p-8 border border-border mb-6">
                {[
                  "Arrive and get settled with drinks and introductions",
                  "Chef Joey walks you through the menu and divides into cooking stations",
                  "Hands-on cooking with guidance, tips, and plenty of banter",
                  "Teams plate their creations and sit down to feast together",
                  "Take home recipes, skills, and stories worth retelling",
                ].map((step, i) => (
                  <div key={i} className={`flex gap-4 items-start py-3 ${i < 4 ? "border-b border-gray-light" : ""}`}>
                    <div className="w-7 h-7 rounded-full bg-purple-pale flex items-center justify-center text-xs font-bold text-purple font-sans shrink-0">{i + 1}</div>
                    <p className="font-sans text-[15px] text-dark leading-snug">{step}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-2xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-[10px] bg-purple-pale flex items-center justify-center text-lg">📍</div>
                  <div>
                    <p className="font-sans text-[15px] font-bold text-dark">In-House Location</p>
                    <p className="font-sans text-[13px] text-gray">YW Calgary Community Kitchen</p>
                  </div>
                </div>
                <p className="font-sans text-sm text-gray leading-relaxed">
                  1715 – 17 Avenue SE, Calgary, AB T2G 5J1<br />
                  Inglewood · Free parking available · Arrive 10 min early
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple to-purple-dark text-center">
        <div className="max-w-[600px] mx-auto">
          <h2 className="font-serif text-4xl font-extrabold text-white mb-4">Let's cook up something great for your team</h2>
          <p className="font-sans text-base text-white/70 mb-8">Every event is custom. Book a quick call so we can learn about your team and build the perfect experience.</p>
          <CTAButton variant="orange" size="lg">Book a Free Call →</CTAButton>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TeamBuildingPage;
