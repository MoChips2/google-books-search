import React from "react";

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props}/>
    </div>
  )
}

export function SearchBtn(props) {
  return (
    <button {...props} style={{float: "right"}} 
    type="button" className="btn btn-danger search-btn px-3">
      Search
    </button>
  )
}