import React from "react";

interface LabelProps {
  text: string;
  type: "s" | "m" | "l";
}

export const LabelComponent: React.FC<LabelProps> = ({ text, type }) => {
  return (
    <div>
      <label className={type}>{text}</label>
    </div>
  );
};
