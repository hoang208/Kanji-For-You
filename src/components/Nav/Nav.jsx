import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { useDispatch, useSelector } from "react-redux";

function Nav() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  return (
    <div className="nav">
      <ul>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <>
            <li>
              <Link to="/welcome">Kanji For You</Link>
            </li>
            <li>
              <Link className="navLink" to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link className="navLink" to="/about">
                About
              </Link>
            </li>
          </>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <li>
              <Link to="/About">Kanji For You</Link>
            </li>
            <li>
              <Link className="navLink" to="/user">
                Home
              </Link>
            </li>

            <li>
              <Link className="navLink" to="/collection">
                Collection
              </Link>
            </li>

            <li>
              <Link className="navLink" to="/dictionary">
                Dictionary
              </Link>
            </li>
            <li>
              <Link className="navLink" to="/stats">
                Stats
              </Link>
            </li>
            <li>
              <Link className="navLink" to="/study">
                Study
              </Link>
            </li>
            <li>
              <Link className="navLink" to="/about">
                About
              </Link>
            </li>
            <li onClick={() => dispatch({ type: "LOGOUT" })}>
              <Link className="navLink" to="/login">
                Log Out
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default Nav;
