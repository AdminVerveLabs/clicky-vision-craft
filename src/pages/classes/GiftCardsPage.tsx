import { useNavigate } from "react-router-dom";
import SectionTag from "@/components/chef/SectionTag";
import CTAButton from "@/components/chef/CTAButton";
import Footer from "@/components/chef/Footer";

const GiftCardsPage = () => {
  const navigate = useNavigate();
  const go = (path: string) => { navigate(path); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <div>
      <section className="pt-[100px] md:pt-[120px] pb-16 md:pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-2">
            <span onClick={() => go("/classes")} className="font-sans text-[13px] text-gray cursor-pointer">Classes & Events</span>
            <span className="text-gray mx-2">›</span>
            <span className="font-sans text-[13px] text-purple font-semibold">Gift Cards</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <SectionTag variant="green">Perfect Gift</SectionTag>
              <h1 className="font-serif text-[32px] md:text-5xl font-extrabold text-dark leading-[1.1] mt-5 mb-5">
                Give the gift of a <span className="text-purple italic">great time</span>
              </h1>
              <p className="font-sans text-[16px] md:text-[17px] text-gray leading-[1.7] mb-8">
                Skip the stuff they don't need. A Chef Joey gift card lets them pick any class, any experience,
                any time. It never expires — because good gifts shouldn't come with pressure.
              </p>
              <div className="flex gap-4 flex-wrap">
                <CTAButton variant="green" size="lg">Buy a Gift Card</CTAButton>
                <CTAButton variant="secondary" size="lg">Chat with Joey</CTAButton>
              </div>
            </div>
            <div className="hidden md:block aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-green/20 to-purple/10 flex items-center justify-center">
              <div className="w-full h-full flex items-center justify-center text-[120px]">🎁</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-cream">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            <div>
              <h2 className="font-serif text-[24px] md:text-[32px] font-extrabold text-dark mb-6 md:mb-8">Gift Card Details</h2>
              {[
                { icon: "🎫", label: "Options", value: "Any class, any experience, any amount", color: "purple" as const },
                { icon: "📧", label: "Delivery", value: "Instant digital or printed gift card", color: "sage" as const },
                { icon: "📅", label: "Validity", value: "Never expires — use anytime", color: "purple" as const },
                { icon: "🔄", label: "Flexible", value: "Recipient chooses their own class and date", color: "sage" as const },
                { icon: "💝", label: "Personal", value: "Add a custom message and wrapping", color: "purple" as const },
                { icon: "✅", label: "Includes", value: "Full class experience — nothing extra to pay", color: "sage" as const },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 py-4 border-b border-border">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0 ${item.color === "purple" ? "bg-purple/10" : "bg-sage/10"}`}>{item.icon}</div>
                  <div>
                    <p className={`font-sans text-[13px] font-bold uppercase tracking-[1px] mb-0.5 ${item.color === "purple" ? "text-purple" : "text-sage"}`}>{item.label}</p>
                    <p className="font-sans text-[15px] text-dark leading-snug">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h2 className="font-serif text-[24px] md:text-[32px] font-extrabold text-dark mb-6 md:mb-8">Popular Occasions</h2>
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-border">
                {["Birthday celebrations", "Holiday gifts", "Thank-you presents", "Last-minute surprises", "Corporate gifts & rewards"].map((item, i) => (
                  <div key={i} className={`flex gap-4 items-start py-3 ${i < 4 ? "border-b border-gray-light" : ""}`}>
                    <div className="w-7 h-7 rounded-full bg-green/10 flex items-center justify-center text-xs font-bold text-green font-sans shrink-0">🎁</div>
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
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-white mb-4">The gift they'll actually love</h2>
          <p className="font-sans text-sm md:text-base text-white/70 mb-8">Pick an amount or choose a specific class. Either way, they're in for an unforgettable experience.</p>
          <CTAButton variant="green" size="lg">Buy a Gift Card</CTAButton>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GiftCardsPage;
