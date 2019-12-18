import { useState } from "react";
import { tabKeys } from "./utils";

export default () => {
  const [activeKey, setActiveKey] = useState(tabKeys.ALL);

  return {
    activeKey,
    setActiveKey
  };
};
