import { useNavigate } from "react-router-dom";
import SectionTag from "@/components/chef/SectionTag";
import CTAButton from "@/components/chef/CTAButton";
import Footer from "@/components/chef/Footer";
import joeyPortrait from "@/assets/chef-joey-kitchen.jpg";

const AboutPage = () => {
  const navigate = useNavigate();
  const go = (path: string) => { navigate(path); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <div>
      <section className="pt-[120px] pb-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden">
              <img src={joeyPortrait} alt="Chef Joey in the kitchen" className="w-full h-full object-cover" />
            </div>
            <div>
              <SectionTag>About</SectionTag>
              <h1 className="font-serif text-5xl font-extrabold text-dark leading-[1.1] mt-5 mb-6">
                Hey, I'm <span className="text-purple">Joey</span>
              </h1>
              <p className="font-sans text-[17px] text-gray leading-[1.8] mb-5">
                I have a passion for food and I'd love to share that with you. I don't take myself too seriously
                and neither should you. Cooking should be fun—be brave and try something new.
              </p>
              <p className="font-sans text-[17px] text-gray leading-[1.8] mb-5">
                My roots are in creole and southern cooking—big bold flavors, community-style eating, and the kind of meals
                that bring people together. Whether you're a first-timer or you've been cooking for decades, I promise
                you'll leave my kitchen with new skills, a full belly, and a great story.
              </p>
              <p className="font-sans text-[17px] text-gray leading-[1.8] mb-8">
                Based in Calgary, I run interactive cooking experiences for everyone—from corporate teams looking to build
                culture, to families celebrating milestones, to solo foodies who just want to learn something new.
              </p>
              <div className="flex gap-4">
                <CTAButton variant="primary" onClick={() => go("/classes")}>Book a Class</CTAButton>
                <CTAButton variant="secondary">Get in Touch</CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
