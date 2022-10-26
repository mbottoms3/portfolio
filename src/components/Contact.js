import React from "react";

// require icons
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

function Contact() {
  return (
    <div className="pt-20 pb-8 bg-gradient-to-b from-light to-skyBlue">
      <h3 className="text-4xl text-center mb-10">
        Find me with the links below!
      </h3>
      {/* Container with icons/links */}
      <div id="contact" className="text-4xl flex justify-center gap-12 m-2">
        <a
          className="hover:shadow-md hover:shadow-black"
          href="https://www.linkedin.com/in/micah-bottoms-09a096246/"
          target="_blank"
        >
          <AiFillLinkedin />
        </a>

        <a
          className="hover:shadow-md hover:shadow-black"
          href="https://github.com/mbottoms3"
          target="_blank"
        >
          <AiFillGithub />
        </a>

        <a
          className="hover:shadow-md hover:shadow-black"
          href="mailto: bottoms.micah.3@gmail.com"
        >
          <AiOutlineMail />
        </a>
      </div>
    </div>
  );
}

export default Contact;
