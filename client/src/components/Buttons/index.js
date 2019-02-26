import React from "react";

export function ViewBtn(props) {
  return (
    <button {...props}
      type="button" className="btn view-btn mx-1 px-4"
      style={{ backgroundColor: "#FFC20E" }}>
      View
   </button>
  );
};

export function DeleteBtn(props) {
  return (
    <button {...props}
      type="button" className="btn btn-danger delete-btn mx-1 px-4">
      Delete
    </button>
  );
};

export function SaveBtn(props) {
  return (
    <button {...props}
      type="button" className="btn btn-danger saved-btn mx-1 px-4">
      Save
  </button>
  );
};