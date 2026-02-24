import SectionTag from "./SectionTag";
import CTAButton from "./CTAButton";

const NewsletterBanner = () => (
  <section className="bg-gradient-to-br from-purple to-purple-dark py-16 md:py-20 px-6 text-center relative overflow-hidden">
    <div className="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full bg-white/5" />
    <div className="absolute -bottom-16 -left-16 w-[200px] h-[200px] rounded-full bg-white/[0.03]" />
    <div className="max-w-[600px] mx-auto relative">
      <SectionTag variant="orange">Stay in the loop</SectionTag>
      <h2 className="font-sans text-3xl md:text-4xl font-extrabold text-white mt-4 mb-3 leading-tight">
        Get first dibs on new classes
      </h2>
      <p className="font-sans text-sm md:text-base text-white/70 mb-8 leading-relaxed">
        Join the Chef Joey community for exclusive class announcements, recipes, and a whole lotta creole love.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 max-w-[460px] mx-auto">
        <input
          type="email"
          placeholder="your@email.com"
          className="flex-1 px-5 py-3.5 rounded-full border-none text-[15px] font-sans outline-none"
        />
        <CTAButton variant="orange">Subscribe</CTAButton>
      </div>
    </div>
  </section>
);

export default NewsletterBanner;
