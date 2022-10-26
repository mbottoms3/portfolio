import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="flex justify-between">
      <button className="px-12 mx-2 my-24 lg:px-20 lg:mx-8 rounded-full bg-light hover:shadow-xl">
        <a
          href={require("../assets/MicahBottomsResume22.pdf")}
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </button>
      <nav className="py-4 mb-8 flex justify-between">
        <div className="bg-yellow-200 rounded-full py-20 mr-2 md:mr-6 lg:mr-8">
          <ul className="flex">
            <Link
              className="ml-3 hover:shadow-md hover:shadow-yellow-400"
              to={"/about"}
            >
              Bio
            </Link>
            <Link
              className="mx-4 hover:shadow-md hover:shadow-yellow-400"
              to={"/projects"}
            >
              Projects
            </Link>
            <Link
              className="mr-3 hover:shadow-md hover:shadow-yellow-400"
              to={"/contact"}
            >
              Find Me
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
