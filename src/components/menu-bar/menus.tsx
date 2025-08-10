import MenuItem from "./menu-item";

export interface Menu {
  title: string;
  to: string;
  children?: Menu[];
}

interface Props {
  menus: Menu[];
}

const Menus = ({ menus }: Props) => {
  if (menus.length === 0) return null;

  return (
    <ul className="menus">
      {menus.map((menu) => (
        <MenuItem key={menu.title} menu={menu} />
      ))}
    </ul>
  );
};

export default Menus;
