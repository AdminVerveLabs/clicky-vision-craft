import { useNavigate } from "react-router-dom";
import SectionTag from "@/components/chef/SectionTag";
import CTAButton from "@/components/chef/CTAButton";
import Footer from "@/components/chef/Footer";

import heroImg from "@/assets/example-kids-bake.jpg";
import galleryImg1 from "@/assets/example-kids-bake-2.jpg";
import galleryImg2 from "@/assets/chef-joey-58.jpg";
import galleryImg3 from "@/assets/chef-joey-79.jpg";

const highlights = [
  { stat: "14", label: "Kids attended" },
  { stat: "Ages 6–12", label: "Age range" },
  { stat: "2hrs", label: "Of baking fun" },
  { stat: "∞", label: "Sprinkles used" },
];

const bakes = [
  { item: "Chocolate Chip Cookies", detail: "From-scratch dough — kids measured, mixed, and scooped every one", emoji: "🍪" },
  { item: "Rainbow Cupcakes", detail: "Layered batter, buttercream frosting, and unlimited sprinkle access", emoji: "🧁" },
  { item: "Mini Cinnamon Rolls", detail: "Rolled, twisted, and glazed — the kitchen smelled incredible", emoji: "🥐" },
  { item: "Decorated Sugar Cookies", detail: "Royal icing, food coloring, and total creative freedom", emoji: "🎨" },
];

const gallery = [
  { src: heroImg, alt: "Kids showing off their cupcakes", span: "col-span-2 row-span-2" },
  { src: galleryImg1, alt: "Colorful decorated cookies", span: "col-span-2" },
  { src: galleryImg2, alt: "Hands-on baking instruction", span: "col-span-1" },
  { src: galleryImg3, alt: "Kids having fun in the kitchen", span: "col-span-1" },
];

const KidsBakePage = () => {
  const navigate = useNavigate();
  const go = (path: string) => { navigate(path); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img src={heroImg} alt="Kids Learn to Bake" className="w-full h-full object-cover" width={1280} height={832} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-[1200px] mx-auto">
            <span onClick={() => go("/classes")} className="font-sans text-[13px] text-white/70 cursor-pointer hover:text-white transition-colors">Classes & Events</span>
            <span className="text-white/50 mx-2">›</span>
            <span className="font-sans text-[13px] text-white/90 font-semibold">Kids Learn to Bake</span>
            <SectionTag>Example Experience</SectionTag>
            <h1 className="font-sans text-[42px] md:text-[56px] font-extrabold text-white leading-[1.1] mt-4">
              Kids Learn<br />to Bake
            </h1>
            <p className="font-sans text-lg text-white/80 mt-4 max-w-[500px]">
              Flour-covered aprons, rainbow frosting, and the proudest little bakers you've ever seen. Here's what went down.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-sage py-6">
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
          <h2 className="font-sans text-[34px] font-extrabold text-dark mt-4 mb-6">Tiny chefs, big smiles</h2>
          <div className="font-sans text-[16px] text-gray leading-[1.8] space-y-5">
            <p>Fourteen kids took over the kitchen for two hours of pure baking joy. They cracked eggs (mostly into the bowl), measured flour (some made it to the counter), and learned that patience is a real ingredient — even if the sprinkles went on before the frosting cooled.</p>
            <p>Chef Joey kept it fun, safe, and hands-on the whole time. Every kid got their own station, their own apron and chef hat, and total creative freedom when it came to decorating.</p>
            <p>Parents watched from the sidelines (some tried to sneak cookies) while their kids discovered that baking is basically edible arts and crafts. Every child went home with a box of their own creations and a recipe card to do it again.</p>
          </div>
        </div>
      </section>

      {/* What They Baked */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-[800px] mx-auto">
          <SectionTag>The Bakes</SectionTag>
          <h2 className="font-sans text-[34px] font-extrabold text-dark mt-4 mb-8">What they made</h2>
          <div className="space-y-4">
            {bakes.map((item) => (
              <div key={item.item} className="flex items-start gap-5 bg-white rounded-2xl p-6 border border-border">
                <span className="text-4xl mt-1">{item.emoji}</span>
                <div>
                  <p className="font-sans text-[18px] font-semibold text-dark mb-1">{item.item}</p>
                  <p className="font-sans text-[14px] text-gray leading-relaxed">{item.detail}</p>
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
            <h2 className="font-sans text-[34px] font-extrabold text-dark mt-4">The best kind of mess</h2>
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
          <h2 className="font-sans text-[34px] font-extrabold text-dark mb-4">Book a kids baking class</h2>
          <p className="font-sans text-[16px] text-gray mb-8">Perfect for birthdays, school breaks, or just a Saturday adventure.</p>
          <div className="flex gap-4 justify-center">
            <CTAButton variant="primary" size="lg" onClick={() => go("/classes/kids-party")}>Kids Classes</CTAButton>
            <CTAButton variant="secondary" size="lg" onClick={() => go("/classes")}>All Classes</CTAButton>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KidsBakePage;
