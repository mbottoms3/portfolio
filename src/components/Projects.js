import React from "react";
import image1 from "../assets/f00000d.jpeg";
import image2 from "../assets/blogSite.png";
import image3 from "../assets/kissTheCook.png";
import image4 from "../assets/tripSplit.png";

function Projects() {
  return (
    <div>
      <div id="projects">
        <h3 className="text-center text-4xl mb-4">Projects</h3>
        <p className="text-center mb-6">
          Projects I have worked on with links below
        </p>
        {/* Projects container */}
        <div className="flex flex-col md:flex-row lg:flex-row justify-center text-center">
          {/* Project 1 */}
          <div className="bg-light my-2 mx-4 py-2 shadow-md rounded-lg hover:shadow-xl lg:mx-4 lg:hover:shadow-xl">
            <div className="py-2 px-2">
              <a
                href="https://chuckfee23.github.io/project1-group5/"
                target="_blank"
              >
                <img
                  className="rounded-lg"
                  width={"350px"}
                  height={"200px"}
                  src={image1}
                />
              </a>
            </div>

            <h3 className="text-xl">F00000d</h3>
            <p className="text-sm">A single page API app</p>
            <a
              className="text-sm text-blue-600"
              href="https://github.com/chuckfee23/project1-group5"
              target="_blank"
            >
              Github Repository
            </a>
          </div>

          {/* Project 2 */}
          <div className="bg-light my-2 py-2 shadow-sm rounded-lg mx-4 hover:shadow-lg lg:mx-4 lg:hover:shadow-xl">
            <div className="py-2 px-2">
              <a
                href="https://enigmatic-meadow-07439.herokuapp.com/"
                target="_blank"
              >
                <img
                  className="rounded-lg"
                  width={"350px"}
                  height={"200px"}
                  src={image2}
                />
              </a>
            </div>
            <h3 className="text-xl">Tech Blog</h3>
            <p className="text-sm">A fullstack web app</p>
            <a
              className="text-sm text-blue-600"
              href="https://github.com/mbottoms3/CMS_Blog_Site"
              target="_blank"
            >
              Github Repository
            </a>
          </div>

          {/* Project 3 */}
          <div className="bg-light my-2 py-2 shadow-md rounded-lg mx-4 hover:shadow-sm lg:mx-4 lg:hover:shadow-xl">
            <div className="py-2 px-2">
              <a href="https://kiss-the-cook.herokuapp.com/" target="_blank">
                <img
                  className="rounded-lg"
                  width={"350px"}
                  height={"200px"}
                  src={image3}
                />
              </a>
            </div>

            <h3 className="text-xl">Kiss the Cook</h3>
            <p className="text-sm">A fullstack web app</p>
            <a
              className="text-sm text-blue-600"
              href="https://github.com/madrodgerflynn/Kiss_The_Cook"
              target="_blank"
            >
              Github Repository
            </a>
          </div>

          {/* Project 4 */}
          <div className="bg-light my-2 py-2 shadow-lg rounded-lg mx-4 hover:shadow-sm lg:mx-4 lg:hover:shadow-xl">
            <div className="py-2 px-2">
              <a href="https://trip-split-atoz.herokuapp.com/" target="_blank">
                <img
                  className="rounded-lg"
                  width={"350px"}
                  height={"200px"}
                  src={image4}
                />
              </a>
            </div>

            <h3 className="text-xl">TripSplit</h3>
            <p className="text-sm">A fullstack web app</p>
            <a
              className="text-sm text-blue-600"
              href="https://github.com/mbottoms3/trip_split"
              target="_blank"
            >
              Github Repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
