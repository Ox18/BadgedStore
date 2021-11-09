import * as React from "react";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import {
  ListItemSidebar,
  ListItemSidebarPersonal,
} from "../../../data/ListItemSidebar";

import { SidebarItemComponent } from "../../common/SidebarItem";
import { DividerComponent } from "../../common/Divider";

export const SidebarLayout = () => {
  const history = useHistory();

  const [itemSelected, setItemSelected] = useState("");

  const handleClick = (id: string, path: string) => {
    setItemSelected(id);
    history.push(path);
  };

  const isSelected = (id: string) => {
    return itemSelected === id;
  };

  return (
    <div>
      <Toolbar></Toolbar>
      <DividerComponent transparent />
      <List>
        <SidebarItemComponent text="Menu" />
        {ListItemSidebar.map((data, index) => (
          <SidebarItemComponent
            key={index}
            {...data}
            onClick={() => {
              handleClick(data.id, data.path);
            }}
            selected={isSelected(data.id)}
          />
        ))}
      </List>
      <DividerComponent transparent />
      <List>
        <SidebarItemComponent text="Otros" />
        {ListItemSidebarPersonal.map((data, index) => (
          <SidebarItemComponent
            key={index}
            {...data}
            onClick={() => {
              handleClick(data.id, data.path);
            }}
            selected={isSelected(data.id)}
          />
        ))}
      </List>
    </div>
  );
};
