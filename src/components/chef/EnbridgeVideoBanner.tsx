import SectionTag from "@/components/chef/SectionTag";

const EnbridgeVideoBanner = () => (
  <section className="py-10 px-6">
    <div className="max-w-[1200px] mx-auto">
      <SectionTag>Enbridge Team with Chef Joey</SectionTag>
      <div className="mt-4 rounded-2xl overflow-hidden shadow-lg">
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/Q9RCypt9kuQ"
            title="Enbridge Team with Chef Joey"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  </section>
);

export default EnbridgeVideoBanner;
