import React from "react";

import "./message.scss";

const Message = (props) => {
  return <div className="Message">{props.children}</div>;
};

export default Message;
