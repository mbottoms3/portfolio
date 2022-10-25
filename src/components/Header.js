import React from "react";

import Nav from "./Nav";

function Header() {
  return (
    <div className="bg-gradient-to-b from-skyBlue to-light">
      <div className="py-4">
        <h2 className="text-5xl text-center mx-2 py-5 bg-light rounded-full lg:mx-96">
          Micah Bottoms
        </h2>
      </div>
      <Nav />
    </div>
  );
}

export default Header;
