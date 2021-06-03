import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
        </ul>
        <ul>
          <li><NavLink to="/actors">Actors</NavLink></li>
        </ul>
        <ul>
          <li><NavLink to="/directors">Directors</NavLink></li>
        </ul>
        <ul>
          <li><NavLink to="/movies">Movies</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar;
