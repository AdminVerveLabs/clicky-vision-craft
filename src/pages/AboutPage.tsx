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

      <Footer />
      <AudienceRouterModal isOpen={showRouter} onClose={() => setShowRouter(false)} onSelect={handleAudience} />
      <TeamBookingFormModal isOpen={showTeamForm} onClose={() => setShowTeamForm(false)} />
      <PrivateEventBookingFormModal isOpen={showPrivateForm} onClose={() => setShowPrivateForm(false)} />
    </div>
  );
};

export default AboutPage;
