import React from "react";
import "./style.css";

export function BookInfo(props) {
  return (
    <div className="card text-dark">
      <div className="card-body">
        <h5 className="card-title">{props.title}
          <div className="buttons" style={{ float: "right" }}>
            <button
              type="button" className="btn btn-danger saved-btn mx-1 px-4"
              onClick={() => props.savebook(props)}
            >
              Save
            </button>
          </div>
          <div className="buttons" style={{ float: "right" }}>
            <a className="info-link" href={props.link}>
              <button
                type="button" className="btn view-btn mx-1 px-4"
                style={{ backgroundColor: "#FFC20E" }}
              >
                View
              </button>
            </a>
          </div>
        </h5>
        <p className="authors">{props.author}</p>
        <img alt={props.name} src={`${props.image}`} className="images px-4 py-3" style={{ float: "left" }} />
        <p className="desc px-3 py-3">{props.desc}</p>
      </div>
    </div>
  );
};


export function StoredBooks(props) {
  return (
    <div className="card text-dark">
      <div className="card-body">
        <h5 className="card-title">{props.title}
          <div className="buttons" style={{ float: "right" }}>
            <button
              type="button" id={`${props._id}`} className="btn btn-danger delete-btn mx-1 px-4"
              onClick={() => props.deletebook(props._id)}>
              Delete
            </button>
          </div>
          <div className="buttons" style={{ float: "right" }}>
            <a className="info-link" href={props.link}>
              <button
                type="button" className="btn view-btn mx-1 px-4"
                style={{ backgroundColor: "#FFC20E" }}
              >
                View
              </button>
            </a>
          </div>
        </h5>
        <p className="authors">{props.author}</p>
        <img alt={props.name} src={`${props.image}`} className="images px-4 py-3" style={{ float: "left" }} />
        <p className="desc px-3 py-3">{props.desc}</p>
      </div>
    </div>
  );
};


