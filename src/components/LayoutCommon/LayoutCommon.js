import React from "react";

import "./layoutCommon.scss";

const LayoutCommon = (props) => {
  const { children = null } = props;

  return <div className="LayoutCommon">{children}</div>;
};

export default LayoutCommon;
