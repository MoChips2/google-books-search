import React from "react";

function Jumbotron({ children }) {
  return (
    <div style={{
      textAlign: "center",
      border: "2px solid #002A5E",
      backgroundColor: "#FFC20E",
      color: "#002A5E"
      }}
      className="jumbotron mt-4">
      {children}
    </div>
  )
}

export default Jumbotron