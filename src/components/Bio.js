import React from "react";
import image5 from "../assets/micah.jpg";

function Bio() {
  return (
    <div id="bio" className="text-center mt-16 mx-2 lg:mx-48">
      <h3 className="text-4xl mb-6">About Me</h3>
      {/* Image Div */}
      <div className="mx-2 md:px-2">
        <div className="rounded-xl bg-light md:mx-2 lg:px-40 py-4">
          <img
            className="rounded-md"
            width={"230px"}
            height={"320px"}
            src={image5}
          />
        </div>
      </div>
      {/* Bio text */}
      <p className="mx-2 md:px-2">
        Hello! My name is Micah Bottoms and I'm a software developer! I learned
        how to code through the University of Denver and I'm excited to begin my
        career. I have really enjoyed the problem solving that development
        brings, as it's an exciting challenge each time. I am based out of the
        United States, in Shreveport, Louisiana specifically. Some of my
        favorite languages and technologies include: Javascript, Mongoose,
        GraphQL and Tailwind CSS.
      </p>
    </div>
  );
}

export default Bio;
