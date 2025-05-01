
import React from "react";
import { useQuestionnaire } from "../context/QuestionnaireContext";

const SectionNavigation: React.FC = () => {
  const { sections, currentSectionIndex, setCurrentSectionIndex } = useQuestionnaire();

  return (
    <div className="section-nav">
      {sections.map((section, index) => (
        <button
          key={section.id}
          className={`section-nav-item ${
            index === currentSectionIndex ? "active" : ""
          }`}
          onClick={() => setCurrentSectionIndex(index)}
        >
          {section.id}
        </button>
      ))}
    </div>
  );
};

export default SectionNavigation;
