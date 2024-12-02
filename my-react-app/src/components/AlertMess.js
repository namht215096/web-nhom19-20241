import React from "react";
import { Alert } from "antd";

const AlertMess = ({ message }) => {
  return (
    <div style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}>
      <Alert
        message={message}
        type="info"
        closable
        banner
      />
    </div>
  );
};

export default AlertMess;
