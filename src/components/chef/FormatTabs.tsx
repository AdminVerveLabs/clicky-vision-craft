import { useState } from "react";

export interface DetailItem {
  icon: string;
  label: string;
  value: string;
  color: "purple" | "sage";
}

export interface RightItem {
  icon: string;
  text: string;
}

export interface ExperienceContent {
  details: DetailItem[];
  rightTitle: string;
  rightItems: RightItem[];
}

interface FormatTabsProps {
  hasInPerson: boolean;
  hasVirtual: boolean;
  inPersonContent: ExperienceContent;
  virtualContent: ExperienceContent;
  leftTitle?: string;
}

const ContentGrid = ({ content, leftTitle }: { content: ExperienceContent; leftTitle: string }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
    <div>
      <h2 className="font-serif text-[24px] md:text-[32px] font-extrabold text-dark mb-6 md:mb-8">{leftTitle}</h2>
      {content.details.map((item, i) => (
        <div key={i} className="flex items-start gap-4 py-4 border-b border-border">
          <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0 ${item.color === "purple" ? "bg-purple/10" : "bg-sage/10"}`}>
            {item.icon}
          </div>
          <div>
            <p className={`font-sans text-[13px] font-bold uppercase tracking-[1px] mb-0.5 ${item.color === "purple" ? "text-purple" : "text-sage"}`}>
              {item.label}
            </p>
            <p className="font-sans text-[15px] text-dark leading-snug">{item.value}</p>
          </div>
        </div>
      ))}
    </div>
    <div>
      <h2 className="font-serif text-[24px] md:text-[32px] font-extrabold text-dark mb-6 md:mb-8">{content.rightTitle}</h2>
      <div className="bg-white rounded-2xl p-6 md:p-8 border border-border">
        {content.rightItems.map((item, i) => (
          <div key={i} className={`flex gap-4 items-start py-3 ${i < content.rightItems.length - 1 ? "border-b border-gray-light" : ""}`}>
            <div className="w-7 h-7 rounded-full bg-green/10 flex items-center justify-center text-xs font-bold text-green font-sans shrink-0">
              {item.icon}
            </div>
            <p className="font-sans text-[15px] text-dark leading-snug">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const FormatTabs = ({
  hasInPerson,
  hasVirtual,
  inPersonContent,
  virtualContent,
  leftTitle = "Experience Details",
}: FormatTabsProps) => {
  const [activeTab, setActiveTab] = useState<"in-person" | "virtual">("in-person");
  const showTabs = hasInPerson && hasVirtual;
  const content = activeTab === "in-person" ? inPersonContent : virtualContent;

  return (
    <>
      {showTabs && (
        <div className="border-b border-border mb-10">
          <div className="flex">
            <button
              onClick={() => setActiveTab("in-person")}
              className={`font-sans text-[15px] py-3 px-6 border-b-2 transition-colors ${
                activeTab === "in-person"
                  ? "border-purple text-purple font-medium"
                  : "border-transparent text-gray hover:text-dark"
              }`}
            >
              📍 In-Person
            </button>
            <button
              onClick={() => setActiveTab("virtual")}
              className={`font-sans text-[15px] py-3 px-6 border-b-2 transition-colors ${
                activeTab === "virtual"
                  ? "border-purple text-purple font-medium"
                  : "border-transparent text-gray hover:text-dark"
              }`}
            >
              💻 Virtual
            </button>
          </div>
        </div>
      )}
      <div className="transition-opacity duration-200">
        <ContentGrid content={content} leftTitle={leftTitle} />
      </div>
    </>
  );
};

export default FormatTabs;
