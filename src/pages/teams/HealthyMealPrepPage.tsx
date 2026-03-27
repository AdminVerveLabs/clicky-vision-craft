import { useNavigate } from "react-router-dom";
import SectionTag from "@/components/chef/SectionTag";
import CTAButton from "@/components/chef/CTAButton";
import Footer from "@/components/chef/Footer";

import heroImg from "@/assets/example-meal-prep.jpg";
import galleryImg1 from "@/assets/ywca-kitchen-056.jpg";
import galleryImg2 from "@/assets/chef-joey-61.jpg";
import galleryImg3 from "@/assets/ywca-kitchen-074.jpg";

const highlights = [
  { stat: "18", label: "Participants" },
  { stat: "5", label: "Meals prepped" },
  { stat: "2hrs", label: "Session length" },
  { stat: "Zero", label: "Cooking experience needed" },
];

const meals = [
  { meal: "Mediterranean Quinoa Bowl", detail: "Grilled chicken, roasted vegetables, lemon tahini dressing — portioned for 4 lunches", emoji: "🥗" },
  { meal: "Teriyaki Salmon with Sesame Greens", detail: "Glazed salmon fillets with stir-fried bok choy and brown rice", emoji: "🐟" },
  { meal: "Turkey & Black Bean Burrito Bowls", detail: "Seasoned turkey, cilantro lime rice, fresh pico — grab and go", emoji: "🌯" },
  { meal: "Thai Peanut Noodle Jars", detail: "Mason jar lunches with rice noodles, crunchy veg, and peanut sauce", emoji: "🥜" },
  { meal: "Overnight Oats Three Ways", detail: "Berry, tropical, and chocolate — breakfast sorted for the week", emoji: "🫐" },
];

const gallery = [
  { src: heroImg, alt: "Healthy meal prep spread", span: "col-span-2 row-span-2" },
  { src: galleryImg1, alt: "Kitchen workspace", span: "col-span-1" },
  { src: galleryImg2, alt: "Team prepping ingredients", span: "col-span-1" },
  { src: galleryImg3, alt: "Portioned meals ready to go", span: "col-span-2" },
];

const HealthyMealPrepPage = () => {
  const navigate = useNavigate();
  const go = (path: string) => { navigate(path); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img src={heroImg} alt="Healthy Meal Prep Team Experience" className="w-full h-full object-cover" width={1280} height={832} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-[1200px] mx-auto">
            <span onClick={() => go("/teams")} className="font-sans text-[13px] text-white/70 cursor-pointer hover:text-white transition-colors">Teams & Corporate</span>
            <span className="text-white/50 mx-2">›</span>
            <span className="font-sans text-[13px] text-white/90 font-semibold">Healthy Meal Prep</span>
            <SectionTag>Example Experience</SectionTag>
            <h1 className="font-sans text-[42px] md:text-[56px] font-extrabold text-white leading-[1.1] mt-4">
              Healthy Meal Prep<br />Team Session
            </h1>
            <p className="font-sans text-lg text-white/80 mt-4 max-w-[500px]">
              A wellness-focused team experience where everyone went home with five prepped meals — and a new appreciation for their coworkers' knife skills.
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
          <h2 className="font-sans text-[34px] font-extrabold text-dark mt-4 mb-6">Wellness meets teamwork</h2>
          <div className="font-sans text-[16px] text-gray leading-[1.8] space-y-5">
            <p>When a local wellness company wanted a team activity that actually aligned with their values, the answer was obvious: get in the kitchen and cook real, healthy food together.</p>
            <p>Chef Joey designed a meal prep session where teams worked in pairs to prepare five different meals — enough for each person to take home a full week of lunches. The focus was on practical skills: batch cooking, smart portioning, flavor-building without relying on processed shortcuts.</p>
            <p>The best part? Coworkers who'd only ever shared a conference room were suddenly sharing cutting boards, debating the right amount of tahini, and discovering hidden talents (turns out the CFO makes the best peanut sauce in the office).</p>
          </div>
        </div>
      </section>

      {/* Meals */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-[800px] mx-auto">
          <SectionTag>The Meals</SectionTag>
          <h2 className="font-sans text-[34px] font-extrabold text-dark mt-4 mb-8">What we prepped</h2>
          <div className="space-y-4">
            {meals.map((item) => (
              <div key={item.meal} className="flex items-start gap-5 bg-white rounded-2xl p-6 border border-border">
                <span className="text-4xl mt-1">{item.emoji}</span>
                <div>
                  <p className="font-sans text-[18px] font-semibold text-dark mb-1">{item.meal}</p>
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
            <h2 className="font-sans text-[34px] font-extrabold text-dark mt-4">Fresh, colorful, collaborative</h2>
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
            "Everyone came back to the office on Monday eating their prepped meals. It started a whole healthy lunch movement on our team."
          </blockquote>
          <p className="font-sans text-sm text-gray">— Lisa K., People & Culture Lead</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-purple-pale">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="font-sans text-[34px] font-extrabold text-dark mb-4">Fuel your team</h2>
          <p className="font-sans text-[16px] text-gray mb-8">Book a healthy meal prep session for your next team wellness day.</p>
          <div className="flex gap-4 justify-center">
            <CTAButton variant="primary" size="lg" onClick={() => go("/teams")}>Team Packages</CTAButton>
            <CTAButton variant="secondary" size="lg" onClick={() => go("/teams/custom")}>Custom Experience</CTAButton>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HealthyMealPrepPage;
