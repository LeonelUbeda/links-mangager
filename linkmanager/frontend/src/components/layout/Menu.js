import React, { Component } from "react";
import { Link } from "react-router-dom";
export class Menu extends Component {
  render() {
    return (
      <div id="menu">
        <h1 className="ml-5"></h1>
        <nav className="flex flex-col  items-center text-2xl">
          <div className="element-nav h-full">
            <Link to="/">Crear</Link>
          </div>
          <div className="element-nav h-full">
            <Link to="/links">Links</Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Menu;
