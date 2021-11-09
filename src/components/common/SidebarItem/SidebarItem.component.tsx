import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

interface ISidebarItemProps {
  icon?: any;
  text: string;
  onClick?: () => void;
  selected?: boolean;
}

export const SidebarItemComponent: React.FC<ISidebarItemProps> = ({
  text,
  icon: Icon,
  onClick,
  selected,
}) => {
  return (
    <ListItem
      button
      key={text}
      onClick={onClick}
      selected={selected}
      className={`${selected ? "sidebar__item--active" : "sidebar__item"}`}
    >
      {Icon && (
        <ListItemIcon>
          {" "}
          <Icon />
        </ListItemIcon>
      )}
      <ListItemText
        primary={text}
        style={{ color: selected ? "#4d6cd1" : "#888ba3" }}
      />
    </ListItem>
  );
};
