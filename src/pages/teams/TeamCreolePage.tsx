import { useNavigate } from "react-router-dom";
import SectionTag from "@/components/chef/SectionTag";
import CTAButton from "@/components/chef/CTAButton";
import Footer from "@/components/chef/Footer";

import heroImg from "@/assets/example-team-creole.jpg";
import galleryImg1 from "@/assets/chef-joey-41.jpg";
import galleryImg2 from "@/assets/chef-joey-114.jpg";
import galleryImg3 from "@/assets/example-creole-2.jpg";
import galleryImg4 from "@/assets/chef-joey-113.jpg";

const highlights = [
  { stat: "24", label: "Team members" },
  { stat: "4", label: "Cooking stations" },
  { stat: "2.5hrs", label: "Of collaboration" },
  { stat: "5.0★", label: "Team rating" },
];

const menu = [
  { course: "Team Challenge", dish: "Gumbo Cook-Off — each team made their own version", emoji: "🏆" },
  { course: "Collaborative", dish: "Jambalaya with each station contributing a component", emoji: "🍲" },
  { course: "Skills Station", dish: "Cornbread bake-off with creative mix-ins", emoji: "🌽" },
  { course: "Finale", dish: "Beignets & chicory coffee — made together, eaten together", emoji: "☕" },
];

const gallery = [
  { src: heroImg, alt: "Team cooking together", span: "col-span-2 row-span-2" },
  { src: galleryImg1, alt: "Teams at their stations", span: "col-span-1" },
  { src: galleryImg2, alt: "Plating competition", span: "col-span-1" },
  { src: galleryImg3, alt: "The finished spread", span: "col-span-1" },
  { src: galleryImg4, alt: "Team celebration", span: "col-span-1" },
];

const TeamCreolePage = () => {
  const navigate = useNavigate();
  const go = (path: string) => { navigate(path); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img src={heroImg} alt="Signature Creole Team Experience" className="w-full h-full object-cover" width={1280} height={832} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-[1200px] mx-auto">
            <span onClick={() => go("/teams")} className="font-sans text-[13px] text-white/70 cursor-pointer hover:text-white transition-colors">Teams & Corporate</span>
            <span className="text-white/50 mx-2">›</span>
            <span className="font-sans text-[13px] text-white/90 font-semibold">Signature Creole</span>
            <SectionTag>Example Experience</SectionTag>
            <h1 className="font-sans text-[42px] md:text-[56px] font-extrabold text-white leading-[1.1] mt-4">
              Signature Creole<br />Team Experience
            </h1>
            <p className="font-sans text-lg text-white/80 mt-4 max-w-[500px]">
              When a tech company wanted to break down silos, we put their team in aprons and let the gumbo do the talking.
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
          <h2 className="font-sans text-[34px] font-extrabold text-dark mt-4 mb-6">From coworkers to co-chefs</h2>
          <div className="font-sans text-[16px] text-gray leading-[1.8] space-y-5">
            <p>A 24-person engineering team arrived expecting a cooking class. They left with inside jokes, shared playlists, and a genuine sense of connection that their manager said "no escape room ever achieved."</p>
            <p>We split them into four teams, each with their own cooking station. The challenge? Build the best gumbo from scratch. Chef Joey taught them the fundamentals — roux technique, seasoning by taste, the art of the slow simmer — then let them compete.</p>
            <p>The energy was electric. Teams named themselves, trash-talked each other's cornbread, and cheered when their roux hit the perfect color. At the end, everyone sat down family-style to taste all four gumbos and vote for a winner.</p>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-[800px] mx-auto">
          <SectionTag>The Activities</SectionTag>
          <h2 className="font-sans text-[34px] font-extrabold text-dark mt-4 mb-8">How the session flowed</h2>
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
            <h2 className="font-sans text-[34px] font-extrabold text-dark mt-4">Team in action</h2>
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
            "Our team is still talking about this three months later. The gumbo cook-off has become legendary in our Slack channels."
          </blockquote>
          <p className="font-sans text-sm text-gray">— Marcus T., Engineering Manager</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-purple-pale">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="font-sans text-[34px] font-extrabold text-dark mb-4">Book your team experience</h2>
          <p className="font-sans text-[16px] text-gray mb-8">Get your team out of the boardroom and into the kitchen.</p>
          <div className="flex gap-4 justify-center">
            <CTAButton variant="primary" size="lg" onClick={() => go("/teams")}>Team Packages</CTAButton>
            <CTAButton variant="secondary" size="lg" onClick={() => go("/teams/team-events")}>Learn More</CTAButton>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TeamCreolePage;
