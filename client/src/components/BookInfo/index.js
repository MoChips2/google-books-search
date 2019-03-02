import React from "react";
import "./style.css";

function BookInfo(props) {
  return (
    <div className="card text-dark">
      <div className="card-body">
        <h5 className="card-title">{props.title}
          <div className="buttons" style={{ float: "right" }}>{props.btnRight}</div>
          <div className="buttons" style={{ float: "right" }}>{props.btnLeft}</div>
        </h5>
        <p className="authors">{props.author}</p>
          {props.image}
          {props.desc}
      </div>
    </div>
  );
};


export function Image(props) {
  return (
    <img alt={props.name} src={`${props.image}`} className="images px-4 py-3" style={{ float: "left" }} />
  )
};

export function Desc(props) {
  return (
    <p className="desc px-3 py-3">{props.desc}</p>
  )
}


export default BookInfo;

