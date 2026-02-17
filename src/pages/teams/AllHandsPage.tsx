import { useNavigate } from "react-router-dom";
import SectionTag from "@/components/chef/SectionTag";
import CTAButton from "@/components/chef/CTAButton";
import Footer from "@/components/chef/Footer";
import heroImg from "@/assets/ywca-kitchen-074.jpg";

const AllHandsPage = () => {
  const navigate = useNavigate();
  const go = (path: string) => { navigate(path); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <div>
      <section className="pt-[120px] pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-2">
            <span onClick={() => go("/teams")} className="font-sans text-[13px] text-gray cursor-pointer">For Teams</span>
            <span className="text-gray mx-2">›</span>
            <span className="font-sans text-[13px] text-purple font-semibold">All Hands & Townhalls</span>
          </div>
          <div className="grid grid-cols-2 gap-16 items-center">
            <div>
              <SectionTag>All Hands & Townhalls</SectionTag>
              <h1 className="font-serif text-5xl font-extrabold text-dark leading-[1.1] mt-5 mb-5">
                Company gatherings that <span className="text-purple italic">connect</span>
              </h1>
              <p className="font-sans text-[17px] text-gray leading-[1.7] mb-8">
                Make your next all-hands unforgettable. Live cooking demos, interactive challenges, and food that brings
                people together across offices—virtual or in person.
              </p>
              <div className="flex gap-4">
                <CTAButton variant="primary" size="lg">Book a Call</CTAButton>
                <CTAButton variant="secondary" size="lg">Learn More</CTAButton>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-3xl overflow-hidden">
              <img src={heroImg} alt="All Hands & Townhalls" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-cream">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-[32px] font-extrabold text-dark mb-8">Experience Details</h2>
              {[
                { icon: "⏱️", label: "Duration", value: "1.5 – 3 hours, flexible to your agenda", color: "purple" as const },
                { icon: "👥", label: "Group Size", value: "20 – 200+ people", color: "orange" as const },
                { icon: "💻", label: "Format", value: "In-person, virtual, or hybrid", color: "sage" as const },
                { icon: "📍", label: "Location", value: "Your office, event venue, or online", color: "purple" as const },
                { icon: "🎯", label: "Activities", value: "Live demos, cooking challenges, team competitions", color: "orange" as const },
                { icon: "📦", label: "Virtual Kit", value: "Ingredient kits shipped to each participant", color: "sage" as const },
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
              <h2 className="font-serif text-[32px] font-extrabold text-dark mb-8">Why It Works</h2>
              <div className="bg-white rounded-2xl p-8 border border-border">
                {["Breaks down silos between departments and offices", "Works for both in-person and remote employees", "Interactive format keeps everyone engaged", "Creates shared memories beyond the usual slides", "Scales from 20 to 200+ without losing the magic"].map((item, i) => (
                  <div key={i} className={`flex gap-4 items-start py-3 ${i < 4 ? "border-b border-gray-light" : ""}`}>
                    <div className="w-7 h-7 rounded-full bg-purple-pale flex items-center justify-center text-xs font-bold text-purple font-sans shrink-0">✓</div>
                    <p className="font-sans text-[15px] text-dark leading-snug">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-purple to-purple-dark text-center">
        <div className="max-w-[600px] mx-auto">
          <h2 className="font-serif text-4xl font-extrabold text-white mb-4">Make your next all-hands one to remember</h2>
          <p className="font-sans text-base text-white/70 mb-8">We'll work with your team to design the perfect experience for your company gathering.</p>
          <CTAButton variant="orange" size="lg">Book a Free Call →</CTAButton>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AllHandsPage;
