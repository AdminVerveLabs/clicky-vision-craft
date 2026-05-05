import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SectionTag from "@/components/chef/SectionTag";
import CTAButton from "@/components/chef/CTAButton";
import Footer from "@/components/chef/Footer";
import AudienceRouterModal from "@/components/chef/AudienceRouterModal";
import TeamBookingFormModal from "@/components/chef/TeamBookingFormModal";
import PrivateEventBookingFormModal from "@/components/chef/PrivateEventBookingFormModal";
import joeyPortrait from "@/assets/chef-joey-kitchen.jpg";

const AboutPage = () => {
  const navigate = useNavigate();
  const go = (path: string) => { navigate(path); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const [showRouter, setShowRouter] = useState(false);
  const [showTeamForm, setShowTeamForm] = useState(false);
  const [showPrivateForm, setShowPrivateForm] = useState(false);
  const handleAudience = (audience: "b2c" | "b2b") => {
    setShowRouter(false);
    if (audience === "b2c") setShowPrivateForm(true);
    else setShowTeamForm(true);
  };

  return (
    <div>
      <section className="pt-[100px] md:pt-[120px] pb-16 md:pb-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden">
              <img src={joeyPortrait} alt="Chef Joey in the kitchen" className="w-full h-full object-cover" />
            </div>
            <div>
              <SectionTag>About</SectionTag>
              <h1 className="font-serif text-[36px] md:text-5xl font-extrabold text-dark leading-[1.1] mt-5 mb-6">
                Hey, I'm <span className="text-purple">Joey</span>
              </h1>
              <p className="font-sans text-[16px] md:text-[17px] text-gray leading-[1.8] mb-5">
                I have a passion for food and I'd love to share that with you. I don't take myself too seriously
                and neither should you. Cooking should be fun—be brave and try something new.
              </p>
              <p className="font-sans text-[16px] md:text-[17px] text-gray leading-[1.8] mb-5">
                My roots are in creole and southern cooking—big bold flavors, community-style eating, and the kind of meals
                that bring people together. Whether you're a first-timer or you've been cooking for decades, I promise
                you'll leave my kitchen with new skills, a full belly, and a great story.
              </p>
              <p className="font-sans text-[16px] md:text-[17px] text-gray leading-[1.8] mb-8">
                Based in Calgary, I run interactive cooking experiences for everyone—from corporate teams looking to build
                culture, to families celebrating milestones, to solo foodies who just want to learn something new.
              </p>
              <div className="flex gap-4 flex-wrap">
                <CTAButton variant="primary" onClick={() => setShowRouter(true)}>Chat with Joey</CTAButton>
                <CTAButton variant="secondary" onClick={() => setShowRouter(true)}>Get in Touch</CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Chef Joey Came to Be */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
            <div>
              <SectionTag>About Chef Joey</SectionTag>
              <h2 className="font-serif text-[32px] md:text-[42px] font-extrabold text-dark leading-[1.15] mt-5 mb-8">
                How Chef Joey Came to Be
              </h2>
              <div className="space-y-5 font-sans text-[16px] md:text-[17px] text-gray leading-[1.8] max-w-[65ch]">
                <p>
                  Joseph Bagnerise — better known as Chef Joey — grew up in New Orleans, Louisiana, where food isn't just something you eat, it's something you live. The sights, sounds, and smells of one of the world's most celebrated food cultures shaped everything about how he cooks and how he teaches. Raised by his Aunty "Ma" and his father, a librarian, he became a lifelong learner — and that's exactly how he built his career. By doing. His brother Charles carries the family calling in his own way — a chef with Amtrak, cooking his way across the country on the rails.
                </p>
                <p>
                  His career took him across North America, managing and cooking at restaurants and bistros in the U.S. and Canada, until a pivotal meeting changed everything. In 2005, he was hand-picked by Peter Boyd, CEO of Arcis, off a salmon seeker in the Queen Charlotte Islands. Boyd wanted to build a Google-like culture at his company and believed food was the way to do it. Joseph came to Calgary and built exactly that — a café woven into the fabric of the company. They won Calgary Inc.'s Best Place to Work award. Peter became a mentor and a friend, and Joseph feels his influence to this day.
                </p>
                <p>
                  In 2015, Joseph moved to Matrix Environmental Solutions, cooking daily for 150 employees. When COVID sent everyone home and closed the bistro, he didn't sit still. He set up a studio in his own kitchen, got the word out with help from family and friends, and Chef Joey was born.
                </p>
                <p>
                  The response was immediate. Five-star reviews. A write-up in Avenue Magazine. A feature by Food Network Canada. Named one of the best culinary experiences in Calgary by The Best Calgary.
                </p>
                <p>
                  Joseph currently lives in Calgary with his partner. He has three grown children — in Amsterdam, California, and Calgary — and is now a proud grandpa. He's a practicing Buddhist, a lifelong reader (the librarian's son never fell far from that tree), and picks up his guitar whenever the day allows.
                </p>
              </div>

              {/* Press logo strip — placeholders */}
              <div className="mt-10 pt-8 border-t border-border">
                <p className="font-sans text-[12px] uppercase tracking-[0.12em] text-gray mb-4">As featured in</p>
                <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                  {["Avenue Magazine", "Food Network Canada", "The Best Calgary", "Calgary Inc."].map((name) => (
                    <div
                      key={name}
                      className="px-4 py-2 rounded bg-gray-light/60 text-gray font-sans text-[13px] font-semibold"
                    >
                      {name}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="aspect-[4/5] rounded-3xl overflow-hidden md:sticky md:top-28">
              <img src={joeyPortrait} alt="Chef Joey at work" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Three Things That Set Chef Joey Apart */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex justify-center"><SectionTag>What Makes Us Different</SectionTag></div>
            <h2 className="font-serif text-[32px] md:text-[44px] font-extrabold text-dark leading-[1.15] mt-5 mb-5">
              Three Things That Set Chef Joey Apart
            </h2>
            <p className="font-sans text-[16px] md:text-[17px] text-gray max-w-[640px] mx-auto leading-[1.7]">
              Hundreds of places claim to teach cooking. Here's what Chef Joey does differently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {[
              {
                n: "01",
                title: "Hands-On from Minute One",
                body: "Every class is chopping, searing, tasting, and plating from the first 10 minutes. No demo-and-watch, no \u201Cchef does it, you record a video.\u201D You're cooking.",
              },
              {
                n: "02",
                title: "Real Food, Zero Gatekeeping",
                body: "Creole roots, seasonal ingredients, techniques you'll use Tuesday night. No French jargon, no \u201Conly-pros-need-apply\u201D attitude. Just food you'll want to make again immediately.",
              },
              {
                n: "03",
                title: "Built for Groups, Any Size",
                body: "200+ events across 50+ Calgary companies, plus private parties and public classes for groups of 6\u201350. Chef Joey knows group dynamics, dietary juggling, and how to keep everyone fed and engaged.",
              },
            ].map((item) => (
              <div key={item.n} className="text-center px-2">
                <div className="mx-auto w-12 h-12 rounded-full bg-purple flex items-center justify-center text-white font-sans font-semibold text-[15px] mb-6">
                  {item.n}
                </div>
                <h3 className="font-serif text-[22px] md:text-[24px] font-bold text-dark mb-4">
                  {item.title}
                </h3>
                <p className="font-sans text-[16px] text-gray leading-[1.7]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <AudienceRouterModal isOpen={showRouter} onClose={() => setShowRouter(false)} onSelect={handleAudience} />
      <TeamBookingFormModal isOpen={showTeamForm} onClose={() => setShowTeamForm(false)} />
      <PrivateEventBookingFormModal isOpen={showPrivateForm} onClose={() => setShowPrivateForm(false)} />
    </div>
  );
};

export default AboutPage;
