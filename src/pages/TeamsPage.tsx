import { useNavigate } from "react-router-dom";
import SectionTag from "@/components/chef/SectionTag";
import CTAButton from "@/components/chef/CTAButton";
import ServiceCard from "@/components/chef/ServiceCard";
import Footer from "@/components/chef/Footer";

const TeamsPage = () => {
  const navigate = useNavigate();
  const go = (path: string) => { navigate(path); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <div>
      {/* Hero */}
      <section className="pt-[120px] pb-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-b from-purple-pale to-transparent opacity-50" />
        <div className="max-w-[1200px] mx-auto px-6 relative">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div>
              <SectionTag>For Teams & Corporate</SectionTag>
              <h1 className="font-serif text-[52px] font-extrabold text-dark leading-[1.1] mt-5 mb-5">
                Build culture,<br />not just <span className="text-purple italic">lunch plans</span>
              </h1>
              <p className="font-sans text-[17px] text-gray leading-[1.7] mb-8 max-w-[460px]">
                Ditch the awkward icebreakers. Our interactive cooking experiences bring teams together through creole
                flavors, real collaboration, and genuinely memorable moments.
              </p>
              <div className="flex gap-4">
                <CTAButton variant="primary" size="lg">Book a Call</CTAButton>
                <CTAButton variant="secondary" size="lg">View Packages</CTAButton>
              </div>
              <div className="flex gap-8 mt-10 pt-8 border-t border-border">
                {[
                  { num: "200+", label: "Events hosted" },
                  { num: "50+", label: "Companies" },
                  { num: "5.0", label: "Avg rating" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="font-serif text-3xl font-extrabold text-dark">{s.num}</p>
                    <p className="font-sans text-sm text-gray">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-purple-pale to-purple/[0.05] flex items-center justify-center">
              <div className="text-center">
                <span className="text-7xl">👥🍳</span>
                <p className="font-sans text-[13px] text-gray mt-2">[Photo: Team cooking together]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 px-6 bg-gray-light">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <SectionTag>Perfect For</SectionTag>
            <h2 className="font-serif text-[38px] font-extrabold text-dark mt-4">Pick your occasion</h2>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <ServiceCard title="Team Building Events" subtitle="Most Popular" description="Get your team cooking (literally). Hands-on, collaborative, and way more fun than trust falls. Perfect for teams of 8-30." tag="POPULAR" onClick={() => go("/team-building")} />
            <ServiceCard title="All-Hands & Townhalls" subtitle="Virtual + In-Person" description="Make your next company gathering unforgettable. Live cooking demos, interactive challenges, and food that brings people together across offices." onClick={() => go("/team-building")} />
            <ServiceCard title="Onboarding & Culture" subtitle="New Hire Favorite" description="Welcome new team members with an experience they'll actually remember. Set the tone for your culture from day one." onClick={() => go("/team-building")} />
            <ServiceCard title="Client Entertainment" subtitle="Impress & Connect" description="Skip the steakhouse. Host clients in an interactive environment that breaks down walls and builds real relationships." onClick={() => {}} />
            <ServiceCard title="Holiday & Celebrations" subtitle="Seasonal" description="Year-end party? Summer kickoff? We create seasonal menus and themed experiences that feel special without the planning headache." onClick={() => {}} />
            <ServiceCard title="Custom Experiences" subtitle="Tailored to You" description="Have something specific in mind? We'll design a bespoke culinary experience around your goals, dietary needs, and team size." onClick={() => {}} />
          </div>
        </div>
      </section>

      {/* Format Options */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <SectionTag>Flexible Formats</SectionTag>
            <h2 className="font-serif text-[38px] font-extrabold text-dark mt-4 mb-3">Your kitchen or ours</h2>
            <p className="font-sans text-base text-gray max-w-[500px] mx-auto">Every experience is available in the format that works best for your team.</p>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {[
              { icon: "🏠", title: "At Our Kitchen", desc: "Join us at the YW Calgary Community Kitchen in Inglewood. All equipment and ingredients provided.", detail: "Up to 20 people · 2.5 hours" },
              { icon: "🏢", title: "At Your Location", desc: "We bring the full experience to your office, venue, or chosen space. Chef Joey comes to you.", detail: "Up to 50 people · Flexible timing" },
              { icon: "💻", title: "Virtual", desc: "Ingredient kits shipped to each participant. Live-streamed cooking with your team from anywhere.", detail: "Unlimited size · 1.5–2 hours" },
            ].map((f) => (
              <div key={f.title} className="bg-cream rounded-2xl p-8 text-center border border-border transition-all duration-300 hover:border-purple">
                <div className="text-5xl mb-4">{f.icon}</div>
                <h3 className="font-serif text-[22px] font-bold text-dark mb-2">{f.title}</h3>
                <p className="font-sans text-sm text-gray leading-[1.7] mb-4">{f.desc}</p>
                <span className="font-sans text-[13px] font-semibold text-purple bg-purple-pale px-3.5 py-1 rounded-full">{f.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple to-purple-dark text-center">
        <div className="max-w-[600px] mx-auto">
          <h2 className="font-serif text-4xl font-extrabold text-white mb-4">Ready to spice up your next team event?</h2>
          <p className="font-sans text-base text-white/70 mb-8">Book a free 15-minute call. We'll help you pick the perfect experience for your team.</p>
          <div className="flex gap-4 justify-center">
            <CTAButton variant="orange" size="lg">Book a Call</CTAButton>
            <CTAButton variant="ghost" size="lg">Request a Proposal</CTAButton>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TeamsPage;
