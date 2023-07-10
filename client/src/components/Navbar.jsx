import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  console.log(user);

  return (
    <nav className="justify-between flex">
      <Link>
        <h1>Tasks Manager</h1>
      </Link>
      <ul className="flex ">
        {isAuthenticated ? (
          <>
            <li>Welcome {user.username}</li>
            <li>
              <Link to={"/add-task"}>Add Task</Link>
            </li>
            <button onClick={logout}>
              <Link to={"/add-task"}>Logout</Link>
            </button>
          </>
        ) : (
          <>
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
            <li>
              <Link to={"/register"}>Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
