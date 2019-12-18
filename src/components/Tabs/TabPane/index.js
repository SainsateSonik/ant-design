import React from "react";
import { Tabs } from "antd";

const { TabPane } = Tabs;

export default ({ tab, key }) => {
  return (
    <TabPane tab={tab} key={key}>
      wsupp
    </TabPane>
  );
};
