import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import SectionNavigation from "./SectionNavigation";

interface StickyHeaderProps {
  children?: React.ReactNode;
}

const StickyHeader: React.FC<StickyHeaderProps> = ({ children }) => {
  // El estado para saber si el logo sticky está visible
  const [isStickyLogoVisible, setIsStickyLogoVisible] = useState(false);

  return (
    <div className="sticky top-0 z-20 bg-finance-background pt-2 pb-3">
      <ProgressBar onStickyChange={setIsStickyLogoVisible} />
      <SectionNavigation />
      {/* Pasamos el sticky state a los children si es que lo requieren */}
      {children &&
        React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(child, { isStickyLogoVisible })
            : child
        )}
    </div>
  );
};

export default StickyHeader;
