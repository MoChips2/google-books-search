import React from "react";

function ViewCard(props) {
  return (
    <div className="card" 
      style={{ 
        backgroundColor: "#002A5E", 
        border: "3px solid #FFC20E"
        }}>
      <div className="card-body">
        <div className="card-title text-white">{props.children}</div>
      </div>
    </div>
  )
}

export default ViewCard;