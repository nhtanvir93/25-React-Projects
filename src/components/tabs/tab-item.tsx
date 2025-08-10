import { Tab } from ".";

interface Props {
  tab: Tab;
  idx: number;
  activeIdx: number;
  onClickTab: (selectedIdx: number) => void;
}

const TabItem = ({ tab, idx, activeIdx, onClickTab }: Props) => {
  return (
    <div
      className={`tab-item ${activeIdx === idx ? "active" : ""}`}
      onClick={() => onClickTab(idx)}
    >
      {tab.title}
    </div>
  );
};

export default TabItem;
