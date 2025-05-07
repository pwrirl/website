import React from "react";

interface IconProps {
  icon: string;
  width?: number;
  height?: number;
  color?: string;
  className?: string;
  ariaHidden?: boolean;
}

const Icon: React.FC<IconProps> = ({ icon, width = 24, height = 24, color, className, ariaHidden }) => {
  return (
    <span
      className={`icon ${className || ""}`}
      style={{ width, height, color }}
      aria-hidden={ariaHidden}
    >
      {icon}
    </span>
  );
};

export default Icon; 