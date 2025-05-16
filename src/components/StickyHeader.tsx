import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import SectionNavigation from "./SectionNavigation";

interface StickyHeaderProps {
  // Now receives the setter directly and doesn't handle children with cloneElement
  onStickyLogoVisibleChange?: (visible: boolean) => void;
  children?: React.ReactNode;
}

const StickyHeader: React.FC<StickyHeaderProps> = ({ onStickyLogoVisibleChange, children }) => {
  return (
    <div className="sticky top-0 z-20 bg-finance-background pt-2 pb-3">
      <ProgressBar onStickyChange={onStickyLogoVisibleChange} />
      <SectionNavigation />
      {/* Render children normally; do NOT attempt to pass extra props */}
      {children}
    </div>
  );
};

export default StickyHeader;
