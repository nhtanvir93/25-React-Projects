import menus from "./data";
import Menus from "./menus";
import "./style.css";

const MenuBar = () => {
  return (
    <div className="menu-bar">
      <Menus menus={menus} />
    </div>
  );
};

export default MenuBar;
