
import React from "react";
import ProgressBar from "./ProgressBar";
import SectionNavigation from "./SectionNavigation";

interface StickyHeaderProps {
  children?: React.ReactNode;
}

const StickyHeader: React.FC<StickyHeaderProps> = ({ children }) => (
  <div className="sticky top-0 z-20 bg-finance-background pt-2 pb-3">
    <ProgressBar />
    <SectionNavigation />
    {children}
  </div>
);

export default StickyHeader;
