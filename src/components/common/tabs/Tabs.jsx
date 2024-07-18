import { useState } from "react";

const Tabs = ({ tabs, children }) => {
  const [activeTab, setActivTab] = useState(tabs[0].id);
  const selectTab = (tabName) => {
    setActivTab(tabName);
  };
  return (
    <div>
      <div className="tabs">
        <div className="tabs_header">
          <ul>
            {tabs.length > 0 &&
              tabs.map((tab, index) => (
                <li
                  className={activeTab === tab.id ? "active" : ""}
                  key={index}
                  onClick={() => selectTab(tab.id)}
                >
                  {tab.title}
                </li>
              ))}
          </ul>
        </div>
        <div className="tabs_body">
          {children.length > 0 &&
            children.map(
              (child, index) => activeTab === tabs[index].id && child
            )}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
