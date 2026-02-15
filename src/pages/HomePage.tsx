import { useNavigate } from "react-router-dom";
import SectionTag from "@/components/chef/SectionTag";
import CTAButton from "@/components/chef/CTAButton";
import TestimonialCard from "@/components/chef/TestimonialCard";
import NewsletterBanner from "@/components/chef/NewsletterBanner";
import Footer from "@/components/chef/Footer";

const HomePage = () => {
  const navigate = useNavigate();
  const go = (path: string) => { navigate(path); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <div>
      {/* Hero */}
      <section className="min-h-screen flex items-center relative overflow-hidden px-6 pt-[120px] pb-20" style={{ background: "linear-gradient(165deg, hsl(var(--purple-dark)) 0%, hsl(var(--purple)) 35%, hsl(var(--dark)) 100%)" }}>
        <div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] rounded-full" style={{ background: "radial-gradient(circle, rgba(232,89,12,0.15) 0%, transparent 70%)" }} />
        <div className="absolute bottom-[5%] left-[10%] w-[300px] h-[300px] rounded-full" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)" }} />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

        <div className="max-w-[1200px] mx-auto w-full relative">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 pl-2 mb-7 border border-white/15">
                <span className="text-sm">🔥</span>
                <span className="font-sans text-[13px] font-semibold text-white/80">Calgary's Creole Cooking Experience</span>
              </div>
              <h1 className="font-serif text-[62px] font-extrabold text-white leading-[1.08] mb-6">
                Soul food.<br />
                <span className="text-orange-light">Good times.</span><br />
                Real skills.
              </h1>
              <p className="font-sans text-lg text-white/70 leading-[1.7] max-w-[440px] mb-9">
                Interactive cooking experiences with a creole twist. Whether you're building team culture or hosting a party,
                we bring the flavor—you bring the appetite.
              </p>
              <div className="flex gap-4 flex-wrap">
                <CTAButton variant="orange" size="lg" onClick={() => go("/classes")}>Explore Classes</CTAButton>
                <CTAButton variant="ghost" size="lg" onClick={() => go("/teams")}>For Teams & Corporate</CTAButton>
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-5 mt-12 pt-8 border-t border-white/10">
                <div className="flex">
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i} className="w-9 h-9 rounded-full border-2 border-white/30 flex items-center justify-center text-sm" style={{ background: `hsl(${30 + i * 25}, 70%, ${60 + i * 5}%)`, marginLeft: i > 0 ? -10 : 0 }}>😊</div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5 mb-0.5">
                    {[...Array(5)].map((_, i) => (<span key={i} className="text-yellow-300 text-sm">★</span>))}
                  </div>
                  <span className="font-sans text-[13px] text-white/60">5.0 from 200+ Google Reviews</span>
                </div>
              </div>
            </div>

            {/* Hero visual */}
            <div className="relative">
              <div className="w-full aspect-[4/5] rounded-3xl border border-white/10 flex flex-col items-center justify-center gap-4 relative overflow-hidden" style={{ background: "linear-gradient(180deg, rgba(139,92,246,0.2) 0%, rgba(232,89,12,0.15) 100%)" }}>
                <div className="text-7xl">👨‍🍳</div>
                <p className="font-sans text-sm text-white/50 text-center">[Hero image: Chef Joey in action]</p>
              </div>
              <div className="absolute -bottom-5 -left-8 bg-white rounded-2xl px-5 py-4 shadow-[0_12px_32px_rgba(0,0,0,0.15)] flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-orange-pale flex items-center justify-center text-xl">🌶️</div>
                <div>
                  <p className="font-sans font-bold text-sm text-dark">Next Class: Sat Feb 21</p>
                  <p className="font-sans text-xs text-gray">Creole Comfort Classics · 3 spots left</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two-path section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <SectionTag>Choose Your Experience</SectionTag>
            <h2 className="font-serif text-[42px] font-extrabold text-dark mt-4 mb-3">What are you cookin' up?</h2>
            <p className="font-sans text-[17px] text-gray max-w-[500px] mx-auto leading-relaxed">
              From team-building to birthday bashes, we've got the perfect culinary experience for every occasion.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {/* Teams */}
            <div onClick={() => go("/teams")} className="rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 border border-border relative hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(107,33,168,0.1)]">
              <div className="h-[280px] bg-gradient-to-br from-purple-pale to-purple/[0.05] flex items-center justify-center relative">
                <span className="text-7xl">🏢</span>
                <div className="absolute top-5 right-5 bg-purple text-white text-xs font-bold px-3.5 py-1.5 rounded-full font-sans">For Teams</div>
              </div>
              <div className="p-8">
                <h3 className="font-serif text-[28px] font-bold text-dark mb-3">Corporate & Teams</h3>
                <p className="font-sans text-[15px] text-gray leading-[1.7] mb-6">
                  Team building events, all-hands experiences, onboarding activities, and culture-building moments that actually get people talking. Virtual or in-person.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Team Events", "All-Hands", "Onboarding", "Virtual"].map((tag) => (
                    <span key={tag} className="bg-purple-pale text-purple text-xs font-semibold px-3 py-1 rounded-full font-sans">{tag}</span>
                  ))}
                </div>
                <span className="text-purple font-sans text-[15px] font-semibold">Explore Team Experiences →</span>
              </div>
            </div>

            {/* Classes */}
            <div onClick={() => go("/classes")} className="rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 border border-border relative hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(232,89,12,0.1)]">
              <div className="h-[280px] bg-gradient-to-br from-orange-pale to-orange/[0.05] flex items-center justify-center relative">
                <span className="text-7xl">🎉</span>
                <div className="absolute top-5 right-5 bg-orange text-white text-xs font-bold px-3.5 py-1.5 rounded-full font-sans">For Foodies</div>
              </div>
              <div className="p-8">
                <h3 className="font-serif text-[28px] font-bold text-dark mb-3">Classes & Events</h3>
                <p className="font-sans text-[15px] text-gray leading-[1.7] mb-6">
                  Public classes, private parties, kids cooking adventures, and signature sessions. Learn real skills while having the time of your life.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Public Classes", "Private Parties", "Kids", "Signature"].map((tag) => (
                    <span key={tag} className="bg-orange-pale text-orange text-xs font-semibold px-3 py-1 rounded-full font-sans">{tag}</span>
                  ))}
                </div>
                <span className="text-orange font-sans text-[15px] font-semibold">Browse Classes & Events →</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Joey Quick */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-purple-pale to-orange-pale flex items-center justify-center relative overflow-hidden">
              <span className="text-[80px]">👨‍🍳</span>
              <p className="absolute bottom-5 font-sans text-[13px] text-gray">[Photo: Joey in his element]</p>
            </div>
            <div>
              <SectionTag>Meet the Chef</SectionTag>
              <h2 className="font-serif text-[42px] font-extrabold text-dark mt-4 mb-4 leading-[1.15]">
                Cooking should be fun. <span className="text-orange italic">Be brave</span> and try something new.
              </h2>
              <p className="font-sans text-base text-gray leading-[1.8] mb-6">
                I have a passion for food and I'd love to share that with you. I don't take myself too seriously and
                neither should you. Whether it's a corporate team event or a Saturday night with friends, my goal is
                simple: good food, good energy, and memories you'll actually remember.
              </p>
              <p className="font-sans text-base text-gray leading-[1.8] mb-8">
                Born and raised on creole flavors and southern hospitality, I bring that warmth to every class. Expect bold
                spices, big laughs, and zero pretension.
              </p>
              <CTAButton variant="primary" onClick={() => go("/about")}>More About Joey</CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <SectionTag>What People Say</SectionTag>
            <h2 className="font-serif text-[38px] font-extrabold text-dark mt-4">Don't take our word for it</h2>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <TestimonialCard quote="Amazing!! So delicious and we can't wait to join the next one!! Chef Joey made it so fun and easy." name="Michelle G." role="Public Class Attendee" />
            <TestimonialCard quote="Our team hasn't stopped talking about it. Best team building event we've ever done, hands down." name="Sarah T." role="People Ops, Tech Startup" />
            <TestimonialCard quote="My kids were engaged the entire time. They've been cooking dinner every night since. Life changing!" name="David R." role="Parent & Foodie" />
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 px-6 bg-gray-light">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-16">
            <SectionTag>How It Works</SectionTag>
            <h2 className="font-serif text-[38px] font-extrabold text-dark mt-4">Three steps to a great time</h2>
          </div>
          <div className="grid grid-cols-3 gap-10">
            {[
              { step: "01", icon: "📞", title: "Pick Your Vibe", desc: "Choose a public class, book a private event, or tell us what your team needs. We'll customize it." },
              { step: "02", icon: "🔪", title: "Cook Together", desc: "Roll up your sleeves for a hands-on experience. In-person, virtual, or at your location. Your call." },
              { step: "03", icon: "🍽️", title: "Feast & Celebrate", desc: "Sit down and enjoy what you've made. Take home skills, recipes, and stories worth sharing." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mx-auto mb-5 text-4xl shadow-[0_4px_16px_rgba(0,0,0,0.06)] relative">
                  {item.icon}
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-purple text-white text-[11px] font-bold flex items-center justify-center font-sans">{item.step}</span>
                </div>
                <h3 className="font-serif text-[22px] font-bold text-dark mb-2">{item.title}</h3>
                <p className="font-sans text-sm text-gray leading-[1.7]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsletterBanner />
      <Footer />
    </div>
  );
};

export default HomePage;
