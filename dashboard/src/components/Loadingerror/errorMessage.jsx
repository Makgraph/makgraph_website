import React from "react";

const Message = ({ variant, children }) => {
  return <div className={`px-4 py-2 rounded ${variant}`}>{children}</div>;
};

Message.defaultProps = {
  variant: "bg-[#dbeafe] text-[#1e40af]", // Défaut variant Tailwind CSS
};

export default Message;

// // Message.jsx
// import React from "react";

// const Message = ({ variant, children }) => {
//   return <div className={`alert ${variant}`}>{children}</div>;
// };

// Message.defultProps = {
//   variant: "alert-info",
// };
// export default Message;
