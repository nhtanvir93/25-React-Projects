import { useState } from "react";
import { Menu } from "./menus";
import Menus from "./menus";

interface Props {
  menu: Menu;
}

const MenuItem = ({ menu }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="menu-item">
      <span className="menu-item-title">{menu.title}</span>
      {menu.children && (
        <span
          onClick={() => setOpen((prev) => !prev)}
          className="menu-item-toggle-icon"
        >
          {open ? "-" : "+"}
        </span>
      )}
      {menu.children && open ? <Menus menus={menu.children} /> : null}
    </li>
  );
};

export default MenuItem;
