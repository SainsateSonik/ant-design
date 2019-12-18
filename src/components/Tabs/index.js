import React from "react";
import { Tabs } from "antd";

import "./index.scss";
import useStore from "./useStore";
import { tabData } from "./utils";
import TabPane from "./TabPane";

export default () => {
  const { activeKey, setActiveKey } = useStore();
  const tabPanes = tabData.map(data => <TabPane {...data} />);

  return (
    <div>
      <Tabs activeKey={activeKey} onChange={setActiveKey}>
        {tabPanes}
      </Tabs>
    </div>
  );
};
