import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  console.log(user);

  return (
    <nav className="justify-between flex my-8 ">
      <Link to={isAuthenticated ? "/tasks" : "/"}>
        <h1 className="text-xl font-semibold">Task Creator</h1>
      </Link>
      <ul className="flex ">
        {isAuthenticated ? (
          <>
            <li>
              Welcome <span className="px-4">{user.username}</span>{" "}
            </li>
            <li>
              <Link to={"/add-task"}>Add Task</Link>
            </li>
            <button onClick={logout}>
              <Link to={"/add-task"}>Logout</Link>
            </button>
          </>
        ) : (
          <>
          <div className="flex justify-center items-center">

            <li className="mx-2 px-2 border-2 border-sky-500 rounded-full sm:hover:scale-105 duration-200 hover:border-sky-300 ">
              <Link to={"/login"}>Login</Link>
            </li>
            <li className="mx-2 px-2 border-2 border-sky-500 rounded-full sm:hover:scale-105 duration-200 hover:border-sky-300 ">
              <Link to={"/register"}>Register</Link>
            </li>
          </div>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
