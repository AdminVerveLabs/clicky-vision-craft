import { useNavigate } from "react-router-dom";
import SectionTag from "@/components/chef/SectionTag";
import NewsletterBanner from "@/components/chef/NewsletterBanner";
import Footer from "@/components/chef/Footer";

const PublicClassesPage = () => {
  const navigate = useNavigate();
  const go = (path: string) => { navigate(path); window.scrollTo({ top: 0, behavior: "smooth" }); };

  const classes = [
    { date: "Sat, Feb 21", title: "Creole Comfort Classics", desc: "Gumbo, dirty rice, and cornbread. The heart of southern cooking in one unforgettable session.", price: "$89", spots: 3 },
    { date: "Sat, Feb 28", title: "Date Night: Pasta from Scratch", desc: "Hand-rolled fettuccine, creamy cajun alfredo, and a killer dessert. Romance not required but encouraged.", price: "$99", spots: 6 },
    { date: "Sat, Mar 7", title: "Brunch Like You Mean It", desc: "Shrimp & grits, beignets, chicory coffee. Weekend brunch will never be the same.", price: "$89", spots: 10 },
    { date: "Sat, Mar 14", title: "Knife Skills + Quick Meals", desc: "Master the fundamentals. Proper technique, speed, and three 30-minute meals you'll cook forever.", price: "$79", spots: 12 },
    { date: "Sat, Mar 21", title: "Taco Night: Creole Edition", desc: "Blackened fish tacos, creole slaw, chipotle crema, and fried plantains. Taco Tuesday, upgraded.", price: "$89", spots: 8 },
    { date: "Sat, Mar 28", title: "The Crawfish Boil", desc: "A full southern crawfish boil experience. Community-style cooking at its finest. Bring your bib.", price: "$109", spots: 4 },
  ];

  return (
    <div>
      <section className="pt-[120px] pb-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-2">
            <span onClick={() => go("/classes")} className="font-sans text-[13px] text-gray cursor-pointer">Classes & Events</span>
            <span className="text-gray mx-2">›</span>
            <span className="font-sans text-[13px] text-orange font-semibold">Public Classes</span>
          </div>
          <div className="max-w-[700px]">
            <SectionTag variant="orange">Public Classes</SectionTag>
            <h1 className="font-serif text-5xl font-extrabold text-dark leading-[1.1] mt-5 mb-5">
              Grab a spot. Learn something new. <span className="text-orange italic">Eat well.</span>
            </h1>
            <p className="font-sans text-[17px] text-gray leading-[1.7] mb-8">
              Open enrollment classes with rotating menus. No experience necessary. Come solo, bring a date, or rally the
              crew. Each class is a full hands-on cooking experience with creole soul.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-3 gap-6">
            {classes.map((cls) => (
              <div key={cls.date + cls.title} className="bg-cream rounded-2xl overflow-hidden border border-border transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(0,0,0,0.06)]">
                <div className="h-40 bg-gradient-to-br from-orange/[0.06] to-purple/[0.04] flex items-center justify-center relative">
                  <span className="text-5xl">🍲</span>
                  {cls.spots <= 4 && (
                    <div className="absolute top-3 right-3 bg-orange text-white text-[11px] font-bold px-2.5 py-1 rounded-full font-sans">Almost Full</div>
                  )}
                </div>
                <div className="p-6">
                  <div className="font-sans text-xs font-semibold text-orange mb-2 tracking-wide">{cls.date}</div>
                  <h3 className="font-serif text-xl font-bold text-dark mb-2 leading-tight">{cls.title}</h3>
                  <p className="font-sans text-sm text-gray leading-relaxed mb-4">{cls.desc}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-sans text-xl font-bold text-dark">{cls.price}</span>
                    <button className="bg-orange text-white border-none px-5 py-2 rounded-full text-[13px] font-semibold cursor-pointer font-sans">Book Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Details Bar */}
      <section className="py-20 px-6 bg-gray-light">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="font-serif text-[32px] font-extrabold text-dark text-center mb-10">What every class includes</h2>
          <div className="grid grid-cols-4 gap-6">
            {[
              { icon: "⏱️", title: "2.5 Hours", desc: "Hands-on cooking" },
              { icon: "🥘", title: "Full Meal", desc: "Appetizer, entrée, dessert" },
              { icon: "📖", title: "Recipes", desc: "Take-home recipe cards" },
              { icon: "👨‍🍳", title: "Expert Guidance", desc: "Chef-led, all levels welcome" },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-3 text-3xl shadow-[0_2px_8px_rgba(0,0,0,0.05)]">{item.icon}</div>
                <h4 className="font-sans text-[15px] font-bold text-dark mb-1">{item.title}</h4>
                <p className="font-sans text-[13px] text-gray">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsletterBanner />
      <Footer />
    </div>
  );
};

export default PublicClassesPage;
