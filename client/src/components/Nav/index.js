import React from "react";

function Nav() {
  return (
    <nav className="navbar sticky-top navbar-expand-sm navbar-dark bg-primary">
          <span className="navbar-brand mb-0 p-3 h2 text-dark">Google Books</span>
          <a className="navbar-link text-white p-3" href="/">Search</a>
          <a className="navbar-link text-white p-3" href="#">Saved</a>
    </nav>
  );
}

export default Nav;