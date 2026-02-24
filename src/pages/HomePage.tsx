import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CLASS_DATA } from "@/data/classData";
import ClassModal from "@/components/chef/ClassModal";
import chefJoeyHero from "@/assets/chef-joey-hero.png";
import publicClassesImg from "@/assets/public-classes.png";
import teamBuildingImg from "@/assets/team-building.png";
import privateClassesImg from "@/assets/private-classes.jpg";
import chefJoeyKitchen from "@/assets/chef-joey-kitchen.jpg";
import SectionTag from "@/components/chef/SectionTag";
import CTAButton from "@/components/chef/CTAButton";
import TestimonialCard from "@/components/chef/TestimonialCard";
import NewsletterBanner from "@/components/chef/NewsletterBanner";
import Footer from "@/components/chef/Footer";

const HomePage = () => {
  const navigate = useNavigate();
  const [showClassModal, setShowClassModal] = useState(false);
  const go = (path: string) => { navigate(path); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <div>
      {/* Hero */}
      <section className="min-h-screen flex items-center relative overflow-hidden px-6 pt-[100px] md:pt-[120px] pb-16 md:pb-20" style={{ background: "linear-gradient(165deg, #430073 0%, #430073 35%, hsl(var(--dark)) 100%)" }}>
        <div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] rounded-full" style={{ background: "radial-gradient(circle, rgba(232,89,12,0.15) 0%, transparent 70%)" }} />
        <div className="absolute bottom-[5%] left-[10%] w-[300px] h-[300px] rounded-full" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)" }} />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

        <div className="max-w-[1200px] mx-auto w-full relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="text-center md:text-left">
              <h1 className="font-sans text-[38px] md:text-[62px] font-extrabold text-white leading-[1.08] mb-6">
                Soul food.<br />
                <span className="text-orange-light">Good times.</span><br />
                Real skills.
              </h1>
              <div className="flex gap-4 flex-wrap justify-center md:justify-start">
                <CTAButton variant="orange" size="lg" onClick={() => go("/classes")}>Explore Classes</CTAButton>
                <CTAButton variant="ghost" size="lg" onClick={() => go("/teams")}>For Teams & Corporate</CTAButton>
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-5 mt-12 pt-8 border-t border-white/10 justify-center md:justify-start">
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

              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 pl-2 mt-6 border border-white/15">
                <span className="text-sm">🔥</span>
                <span className="font-sans text-[13px] font-semibold text-white/80">Calgary's Creole Cooking Experience</span>
              </div>
            </div>

            {/* Hero visual */}
            <div className="relative hidden md:block">
              <div className="w-full aspect-[4/5] rounded-3xl border border-white/10 relative overflow-hidden">
                <img src={chefJoeyHero} alt="Chef Joey cooking in kitchen" className="w-full h-full object-cover" />
              </div>
              <div onClick={() => setShowClassModal(true)} className="absolute -bottom-5 -left-8 bg-white rounded-2xl px-5 py-4 shadow-[0_12px_32px_rgba(0,0,0,0.15)] flex items-center gap-3 cursor-pointer hover:-translate-y-1 transition-transform">
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

      {/* About Joey Quick */}
      <section className="py-16 md:py-24 px-6 bg-cream">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="aspect-square rounded-3xl relative overflow-hidden">
              <img src={chefJoeyKitchen} alt="Chef Joey cooking in kitchen" className="w-full h-full object-cover" />
            </div>
            <div>
              <SectionTag>Meet the Chef</SectionTag>
              <h2 className="font-sans text-[28px] md:text-[42px] font-extrabold text-dark mt-4 mb-4 leading-[1.15]">
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

      {/* How it Works - Compact */}
      <section className="py-12 px-6 bg-gray-light">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-8">
            <SectionTag>How It Works</SectionTag>
            <h2 className="font-sans text-[24px] md:text-[28px] font-extrabold text-dark mt-4">Three steps to a great time</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { step: "01", icon: "📞", title: "Pick Your Vibe", desc: "Choose a public class, book a private event, or tell us what your team needs. We'll customize it." },
              { step: "02", icon: "🔪", title: "Cook Together", desc: "Roll up your sleeves for a hands-on experience. In-person, virtual, or at your location. Your call." },
              { step: "03", icon: "🍽️", title: "Feast & Celebrate", desc: "Sit down and enjoy what you've made. Take home skills, recipes, and stories worth sharing." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mx-auto mb-4 text-2xl shadow-[0_4px_16px_rgba(0,0,0,0.06)] relative">
                  {item.icon}
                  <span className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-purple text-white text-[10px] font-bold flex items-center justify-center font-sans">{item.step}</span>
                </div>
                <h3 className="font-sans text-[18px] font-bold text-dark mb-1.5">{item.title}</h3>
                <p className="font-sans text-sm text-gray leading-[1.7]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two-path section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <SectionTag>Choose Your Experience</SectionTag>
            <h2 className="font-sans text-[28px] md:text-[42px] font-extrabold text-dark mt-4 mb-3">What are you cookin' up?</h2>
            <p className="font-sans text-[15px] md:text-[17px] text-gray max-w-[500px] mx-auto leading-relaxed">
              From team-building to birthday bashes, we've got the perfect culinary experience for every occasion.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: "Public Classes", tag: "PUBLIC", category: "BOOKABLE", icon: "📅", desc: "Join a community of foodies. Perfect for solo cooks, couples, or small groups wanting to learn new skills.", link: "/classes", image: publicClassesImg },
              { title: "Team Building", tag: "FOR TEAMS", category: "BUILDERS", icon: "🏢", desc: "Interactive challenges and collaborative cooking to bring your corporate team closer together.", link: "/teams", image: teamBuildingImg },
              { title: "Private Classes", tag: "PRIVATE", category: "CUSTOM", icon: "🎉", desc: "Organize your own personalized experience with Chef Joey. Great for friends, events, special occasions, and anything else that calls for fun.", link: "/classes", image: privateClassesImg },
            ].map((card) => (
              <div key={card.title} onClick={() => go(card.link)} className="bg-white rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 border border-border hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
                <div className="h-[220px] md:h-[280px] bg-gray-light relative flex items-center justify-center">
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 bg-purple text-white text-[11px] font-bold px-3.5 py-1.5 rounded-full tracking-wide font-sans">{card.tag}</div>
                </div>
                <div className="p-6 md:p-7">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm">{card.icon}</span>
                    <span className="font-sans text-[11px] font-bold text-purple uppercase tracking-[2px]">{card.category}</span>
                  </div>
                  <h3 className="font-sans text-[20px] md:text-[24px] font-bold text-dark mb-3 leading-tight">{card.title}</h3>
                  <p className="font-sans text-sm text-gray leading-[1.7] mb-6">{card.desc}</p>
                  <span className="text-purple font-sans text-[13px] font-bold uppercase tracking-[1.5px]">View Details →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="pt-16 pb-20 md:pb-24 px-6 bg-gray-light">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <SectionTag>What People Say</SectionTag>
            <h2 className="font-sans text-[28px] md:text-[38px] font-extrabold text-dark mt-4">Don't take our word for it</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard quote="Amazing!! So delicious and we can't wait to join the next one!! Chef Joey made it so fun and easy." name="Michelle G." role="Public Class Attendee" />
            <TestimonialCard quote="Our team hasn't stopped talking about it. Best team building event we've ever done, hands down." name="Sarah T." role="People Ops, Tech Startup" />
            <TestimonialCard quote="My kids were engaged the entire time. They've been cooking dinner every night since. Life changing!" name="David R." role="Parent & Foodie" />
          </div>
        </div>
      </section>

      <NewsletterBanner />
      <Footer />
      {showClassModal && (
        <ClassModal cls={CLASS_DATA[0]} onClose={() => setShowClassModal(false)} />
      )}
    </div>
  );
};

export default HomePage;
