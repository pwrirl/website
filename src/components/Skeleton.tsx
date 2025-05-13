import React from "react";

interface SkeletonProps {
  variant?: "circle" | "text" | "card";
  width?: number | string;
  height?: number | string;
  className?: string;
}

export default function Skeleton({ variant = "text", width, height, className = "" }: SkeletonProps) {
  let style: React.CSSProperties = {};
  if (width) style.width = width;
  if (height) style.height = height;

  let base =
    "bg-gradient-to-r from-[#23232b] via-[#29293a] to-[#23232b] animate-pulse";

  if (variant === "circle") {
    base += " rounded-full";
    if (!width) style.width = 48;
    if (!height) style.height = 48;
  } else if (variant === "card") {
    base += " rounded-2xl";
    if (!width) style.width = "100%";
    if (!height) style.height = 180;
  } else {
    // text
    base += " rounded-md";
    if (!width) style.width = "100%";
    if (!height) style.height = 20;
  }

  return <div className={`${base} ${className}`} style={style} />;
} 