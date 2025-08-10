import "./style.css";
import { ReactNode, useState } from "react";
import TabItem from "./tab-item";

export interface Tab {
  title: string;
  content: string | ReactNode;
}

const tabs: Tab[] = [
  {
    title: "Tab 1",
    content: (
      <div>
        <p>Here is Tab 1 description</p>
      </div>
    ),
  },
  {
    title: "Tab 2",
    content: (
      <div>
        <p>Here is Tab 2 description</p>
      </div>
    ),
  },
  {
    title: "Tab 3",
    content: (
      <div>
        <p>
          Here is <b>Tab 3</b> description
        </p>
      </div>
    ),
  },
];

const Tabs = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const handleClickTab = (selectedIdx: number) => {
    if (selectedIdx !== activeIdx) setActiveIdx(selectedIdx);
  };

  return (
    <div className="container">
      <h3 className="heading">Tabs</h3>
      <div className="tabs">
        {tabs.map((tab, idx) => (
          <TabItem
            key={idx}
            tab={tab}
            idx={idx}
            activeIdx={activeIdx}
            onClickTab={(selectedIdx) => handleClickTab(selectedIdx)}
          />
        ))}
      </div>
      <div className="active-tab-details">{tabs[activeIdx].content}</div>
    </div>
  );
};

export default Tabs;
