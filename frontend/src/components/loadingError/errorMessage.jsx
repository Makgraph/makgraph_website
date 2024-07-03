// Message.jsx
import React from "react";

const Message = ({ variant, children }) => {
  return <div className={`alert ${variant}`}>{children}</div>;
};

export default Message;
