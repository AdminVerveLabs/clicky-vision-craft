import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SectionTag from "@/components/chef/SectionTag";
import CTAButton from "@/components/chef/CTAButton";
import Footer from "@/components/chef/Footer";
import TeamBookingFormModal from "@/components/chef/TeamBookingFormModal";
import heroImg from "@/assets/chef-joey-113.jpg";

const ClientEntertainmentPage = () => {
  const navigate = useNavigate();
  const go = (path: string) => { navigate(path); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const [showBookingForm, setShowBookingForm] = useState(false);

  return (
    <div>
      <section className="pt-[100px] md:pt-[120px] pb-16 md:pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-2">
            <span onClick={() => go("/teams")} className="font-sans text-[13px] text-gray cursor-pointer">For Teams</span>
            <span className="text-gray mx-2">›</span>
            <span className="font-sans text-[13px] text-purple font-semibold">Client Entertainment</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <SectionTag>Client Entertainment</SectionTag>
              <h1 className="font-serif text-[32px] md:text-5xl font-extrabold text-dark leading-[1.1] mt-5 mb-5">
                Skip the steakhouse, <span className="text-purple italic">impress them</span>
              </h1>
              <p className="font-sans text-[16px] md:text-[17px] text-gray leading-[1.7] mb-8">
                Host clients in an interactive environment that breaks down walls and builds real relationships.
                Way more memorable than another business dinner.
              </p>
              <div className="flex gap-4 flex-wrap">
                <CTAButton variant="primary" size="lg" onClick={() => setShowBookingForm(true)}>Chat with Joey</CTAButton>
                <CTAButton variant="secondary" size="lg">Request Proposal</CTAButton>
              </div>
            </div>
            <div className="hidden md:block aspect-[4/3] rounded-3xl overflow-hidden">
              <img src={heroImg} alt="Client Entertainment" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-cream">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            <div>
              <h2 className="font-serif text-[24px] md:text-[32px] font-extrabold text-dark mb-6 md:mb-8">Experience Details</h2>
              {[
                { icon: "⏱️", label: "Duration", value: "2.5 – 3 hours of cooking and dining", color: "purple" as const },
                { icon: "👥", label: "Group Size", value: "6 – 20 guests", color: "orange" as const },
                { icon: "🍽️", label: "Cuisine", value: "Premium Creole-inspired menus", color: "sage" as const },
                { icon: "📍", label: "Location", value: "Our Kitchen · Private venues · Your office", color: "purple" as const },
                { icon: "🥂", label: "Add-Ons", value: "Wine pairings, cocktail service, branded touches", color: "orange" as const },
                { icon: "🎯", label: "Vibe", value: "Relaxed, interactive, relationship-building", color: "sage" as const },
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
              <h2 className="font-serif text-[24px] md:text-[32px] font-extrabold text-dark mb-6 md:mb-8">Why Clients Love It</h2>
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-border">
                {["Unique and memorable — they'll talk about it for months", "Natural conversation flows while cooking together", "No awkward silences or stiff formality", "Shows your company's creative, people-first culture", "Builds genuine connections that translate to business"].map((item, i) => (
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

      <section className="py-16 md:py-20 px-6 bg-gradient-to-br from-purple to-purple-dark text-center">
        <div className="max-w-[600px] mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-white mb-4">Impress your most important clients</h2>
          <p className="font-sans text-sm md:text-base text-white/70 mb-8">Let's create an experience that strengthens your client relationships.</p>
          <CTAButton variant="orange" size="lg" onClick={() => setShowBookingForm(true)}>Chat with Joey</CTAButton>
        </div>
      </section>

      <Footer />

      <TeamBookingFormModal
        isOpen={showBookingForm}
        onClose={() => setShowBookingForm(false)}
      />
    </div>
  );
};

export default ClientEntertainmentPage;
