import { useParams, useNavigate } from "react-router-dom";
import { getExperienceBySlug } from "@/data/experienceData";
import ExperienceContent from "@/components/chef/ExperienceContent";
import Footer from "@/components/chef/Footer";
import NotFound from "./NotFound";

const ExperiencePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const data = slug ? getExperienceBySlug(slug) : undefined;

  if (!data) return <NotFound />;

  const backLabel = data.segment === "classes" ? "← Back to Classes & Events" : "← Back to Teams & Corporate";
  const backHref = data.segment === "classes" ? "/classes" : "/teams";

  return (
    <div>
      <div className="max-w-[900px] mx-auto pt-24 px-6">
        <button
          onClick={() => { navigate(backHref); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="font-sans text-[14px] text-purple font-medium hover:underline cursor-pointer mb-4 inline-block"
        >
          {backLabel}
        </button>
        <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm">
          <ExperienceContent data={data} />
        </div>
      </div>
      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
};

export default ExperiencePage;
