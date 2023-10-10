import React from "react";
import { Link } from "react-router-dom";
import LogOutButton from "../LogOutButton/LogOutButton";
import "./Nav.css";
import { useSelector } from "react-redux";

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <ul>
        <li>
          {" "}
          <Link to="/home">
            <h2 className="nav-title">Kanji For You</h2>
          </Link>
        </li>

        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <li>
            <Link className="navLink" to="/login">
              Login / Register
            </Link>
          </li>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
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
              <Link className="navLink" to="/Dictionary">
                Dictionary
              </Link>
            </li>

            <li>
              <LogOutButton className="navLink" />
            </li>
          </>
        )}
        <li>
          {" "}
          <Link className="navLink" to="/about">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
