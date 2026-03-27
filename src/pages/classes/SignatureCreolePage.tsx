import { useNavigate } from "react-router-dom";
import SectionTag from "@/components/chef/SectionTag";
import CTAButton from "@/components/chef/CTAButton";
import Footer from "@/components/chef/Footer";

import heroImg from "@/assets/example-creole.jpg";
import galleryImg1 from "@/assets/example-creole-2.jpg";
import galleryImg2 from "@/assets/chef-joey-116.jpg";
import galleryImg3 from "@/assets/chef-joey-58.jpg";
import galleryImg4 from "@/assets/chef-joey-83.jpg";

const highlights = [
  { stat: "16", label: "Guests" },
  { stat: "5", label: "Dishes prepared" },
  { stat: "2.5hrs", label: "Hands-on cooking" },
  { stat: "4.9★", label: "Average rating" },
];

const menu = [
  { course: "Starter", dish: "Chicken & Andouille Sausage Gumbo", emoji: "🍲" },
  { course: "Main", dish: "Blackened Catfish with Cajun Butter", emoji: "🐟" },
  { course: "Side", dish: "Dirty Rice with Trinity Vegetables", emoji: "🍚" },
  { course: "Bread", dish: "Cast-Iron Skillet Cornbread", emoji: "🌽" },
  { course: "Dessert", dish: "Bananas Foster Flambé", emoji: "🍌" },
];

const gallery = [
  { src: heroImg, alt: "Creole cooking spread", span: "col-span-2 row-span-2" },
  { src: galleryImg1, alt: "Shrimp and grits close-up", span: "col-span-1" },
  { src: galleryImg2, alt: "Chef Joey teaching technique", span: "col-span-1" },
  { src: galleryImg3, alt: "Guests cooking together", span: "col-span-1" },
  { src: galleryImg4, alt: "Plating the final dish", span: "col-span-1" },
];

const SignatureCreolePage = () => {
  const navigate = useNavigate();
  const go = (path: string) => { navigate(path); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img src={heroImg} alt="Signature Creole Cooking Experience" className="w-full h-full object-cover" width={1280} height={832} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-[1200px] mx-auto">
            <span onClick={() => go("/classes")} className="font-sans text-[13px] text-white/70 cursor-pointer hover:text-white transition-colors">Classes & Events</span>
            <span className="text-white/50 mx-2">›</span>
            <span className="font-sans text-[13px] text-white/90 font-semibold">Signature Creole</span>
            <SectionTag>Example Experience</SectionTag>
            <h1 className="font-sans text-[42px] md:text-[56px] font-extrabold text-white leading-[1.1] mt-4">
              Signature Creole<br />Cooking Experience
            </h1>
            <p className="font-sans text-lg text-white/80 mt-4 max-w-[500px]">
              The heart and soul of Chef Joey's kitchen — a deep dive into authentic southern creole cooking with 16 adventurous home cooks.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-purple py-6">
        <div className="max-w-[1200px] mx-auto px-6 flex justify-around">
          {highlights.map((h) => (
            <div key={h.label} className="text-center">
              <p className="font-sans text-[28px] font-extrabold text-white">{h.stat}</p>
              <p className="font-sans text-[13px] text-white/70">{h.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[800px] mx-auto">
          <SectionTag>The Experience</SectionTag>
          <h2 className="font-sans text-[34px] font-extrabold text-dark mt-4 mb-6">Southern soul in every bite</h2>
          <div className="font-sans text-[16px] text-gray leading-[1.8] space-y-5">
            <p>This is the class that started it all. Chef Joey's signature creole experience brings the flavors of Louisiana to Calgary — from a slow-simmered gumbo to a dramatic tableside bananas foster flambé.</p>
            <p>Guests learned to build a roux from scratch, season cast iron like a pro, and master the "holy trinity" of creole cooking. The kitchen was loud, the laughs were big, and the food was absolutely incredible.</p>
            <p>By the end, everyone sat down together family-style to enjoy what they'd created — because in creole culture, cooking is only half the experience. The other half is sharing it.</p>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-[800px] mx-auto">
          <SectionTag>The Menu</SectionTag>
          <h2 className="font-sans text-[34px] font-extrabold text-dark mt-4 mb-8">What we cooked</h2>
          <div className="space-y-4">
            {menu.map((item) => (
              <div key={item.course} className="flex items-center gap-5 bg-white rounded-2xl p-6 border border-border">
                <span className="text-4xl">{item.emoji}</span>
                <div>
                  <p className="font-sans text-[12px] font-bold uppercase tracking-[1.5px] text-purple mb-1">{item.course}</p>
                  <p className="font-sans text-[18px] font-semibold text-dark">{item.dish}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-10">
            <SectionTag>Gallery</SectionTag>
            <h2 className="font-sans text-[34px] font-extrabold text-dark mt-4">From the kitchen</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
            {gallery.map((img, i) => (
              <div key={i} className={`${img.span} rounded-2xl overflow-hidden`}>
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-6 bg-gray-light">
        <div className="max-w-[700px] mx-auto text-center">
          <span className="text-5xl mb-4 block">💬</span>
          <blockquote className="font-sans text-[22px] text-dark font-semibold italic leading-[1.6] mb-4">
            "I've taken cooking classes in New York and Paris — this one in Calgary was hands down the most fun. Chef Joey's energy is unmatched."
          </blockquote>
          <p className="font-sans text-sm text-gray">— Sarah M., Class Attendee</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-purple-pale">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="font-sans text-[34px] font-extrabold text-dark mb-4">Ready to get cooking?</h2>
          <p className="font-sans text-[16px] text-gray mb-8">Join an upcoming creole class or book a private session.</p>
          <div className="flex gap-4 justify-center">
            <CTAButton variant="primary" size="lg" onClick={() => go("/classes")}>Browse Classes</CTAButton>
            <CTAButton variant="secondary" size="lg" onClick={() => go("/classes/private-events")}>Private Events</CTAButton>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SignatureCreolePage;
