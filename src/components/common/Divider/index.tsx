import React from "react";
import Divider from "@mui/material/Divider";

interface IDividerProps {
  transparent?: boolean;
}

export const DividerComponent: React.FC<IDividerProps> = ({ transparent }) => {
  return (
    <Divider
      style={
        transparent
          ? { background: "transparent", borderColor: "transparent" }
          : {}
      }
    />
  );
};
