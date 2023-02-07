import React from "react";
import { Link } from "react-router-dom";
import "../feedback/feedback.css";

function Nav() {
  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="navLogo">
          <Link className="navbar-brand" to="/">Logo</Link>
        </div>
        <ul className="navbar_ul">
          <li className="navbar_li">
            <Link className="navbar-brand" to="/">Topib oldim</Link>
          </li>
          <li className="navbar_li">
            <Link className="navbar-brand" to="/">Yo'qotdim</Link>
          </li>
          <li className="navbar_li">
            <Link className="navbar-brand" to="/">Ro'yhatdan o'tish</Link>
          </li>
          <li className="navbar_li">
            <Link className="navbar-brand" to="/">Kirish</Link>
          </li>
        </ul>
      </nav>

    </React.Fragment>

  );
}

export default Nav;
