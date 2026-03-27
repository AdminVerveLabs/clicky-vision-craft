import { useNavigate } from "react-router-dom";
import SectionTag from "@/components/chef/SectionTag";
import CTAButton from "@/components/chef/CTAButton";
import Footer from "@/components/chef/Footer";

import heroImg from "@/assets/example-valentines.jpg";
import galleryImg1 from "@/assets/example-valentines-2.jpg";
import galleryImg2 from "@/assets/chef-joey-106.jpg";
import galleryImg3 from "@/assets/chef-joey-85.jpg";

const highlights = [
  { stat: "12", label: "Couples attended" },
  { stat: "4", label: "Courses prepared" },
  { stat: "3hrs", label: "Of cooking & dining" },
  { stat: "100%", label: "Would come again" },
];

const menu = [
  { course: "Appetizer", dish: "Seared Scallops with Citrus Beurre Blanc", emoji: "🍽️" },
  { course: "Main", dish: "Lobster Risotto with Truffle Oil", emoji: "🦞" },
  { course: "Side", dish: "Roasted Asparagus with Parmesan Crisps", emoji: "🌿" },
  { course: "Dessert", dish: "Tiramisu for Two with Espresso Cream", emoji: "🍰" },
];

const gallery = [
  { src: heroImg, alt: "Couples cooking together on Valentine's Day", span: "col-span-2 row-span-2" },
  { src: galleryImg1, alt: "Heart-shaped chocolate desserts", span: "col-span-1" },
  { src: galleryImg2, alt: "Hands-on cooking instruction", span: "col-span-1" },
  { src: galleryImg3, alt: "Plated dishes from the evening", span: "col-span-2" },
];

const ValentinesDayPage = () => {
  const navigate = useNavigate();
  const go = (path: string) => { navigate(path); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img src={heroImg} alt="Valentine's Day Cooking Experience" className="w-full h-full object-cover" width={1280} height={832} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-[1200px] mx-auto">
            <span onClick={() => go("/classes")} className="font-sans text-[13px] text-white/70 cursor-pointer hover:text-white transition-colors">Classes & Events</span>
            <span className="text-white/50 mx-2">›</span>
            <span className="font-sans text-[13px] text-white/90 font-semibold">Valentine's Day</span>
            <SectionTag>Example Experience</SectionTag>
            <h1 className="font-sans text-[42px] md:text-[56px] font-extrabold text-white leading-[1.1] mt-4">
              Valentine's Day<br />Couples Class
            </h1>
            <p className="font-sans text-lg text-white/80 mt-4 max-w-[500px]">
              A romantic evening of cooking, wine, and candle-lit dining. Here's what happened when 12 couples joined Chef Joey for Valentine's.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
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
          <h2 className="font-sans text-[34px] font-extrabold text-dark mt-4 mb-6">An evening to remember</h2>
          <div className="font-sans text-[16px] text-gray leading-[1.8] space-y-5">
            <p>What started as a Valentine's Day cooking class became a full-on romantic experience. Couples arrived to a kitchen filled with roses, soft music, and the aroma of butter hitting hot pans.</p>
            <p>Chef Joey walked everyone through a four-course menu — from perfectly seared scallops to a decadent tiramisu. Partners worked side by side, laughing through pasta mishaps and celebrating every perfectly plated dish.</p>
            <p>The night ended with candle-lit dining, wine pairings, and the kind of evening you actually want to post about. Several couples have already booked their next date night class.</p>
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
            <h2 className="font-sans text-[34px] font-extrabold text-dark mt-4">Moments from the night</h2>
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

      {/* CTA */}
      <section className="py-20 px-6 bg-purple-pale">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="font-sans text-[34px] font-extrabold text-dark mb-4">Want an experience like this?</h2>
          <p className="font-sans text-[16px] text-gray mb-8">Book a couples class or private event with Chef Joey.</p>
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

export default ValentinesDayPage;
