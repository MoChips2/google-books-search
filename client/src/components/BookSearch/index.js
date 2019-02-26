import React from "react";

function BookSearch(props) {
  return (
    <div className="card p-2 my-4 mx-5"
      style={{
        background: "linear-gradient(to bottom, white, #0080C6)",
        border: "1px solid black"
      }}>
      <div className="card-body">
        <h3 className="card-title">Book Search</h3>
        <p>Look up a book!</p>
        {props.children}
      </div>
    </div>
  );
};

export default BookSearch;