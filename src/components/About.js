import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-my h-[100vh]">
      <div className="flex flex-col  bg-my">
        <div className="flex items-center justify-center">
          <img src="/logo.jpg" alt="" className="h-24 mt-3" />
          <p className="text-5xl mx-2 text-red-700">Kreeda Verse</p>
        </div>
        <div className="text-white flex justify-center">
          <ul className="flex my-4">
            <Link to="/">
              <li className="mx-4 hover:bg-white px-8 text-lg py-1  hover:text-black hover:rounded-lg cursor-pointer">
                Home
              </li>
            </Link>
            <Link to="/about">
              <li className="mx-4 hover:bg-white px-8 text-lg py-1  hover:text-black hover:rounded-lg cursor-pointer">
                About
              </li>
            </Link>
            <Link to="/gallery">
              <li className="mx-4 hover:bg-white px-8 text-lg py-1  hover:text-black hover:rounded-lg cursor-pointer">
                Gallery
              </li>
            </Link>
            <Link to="/contact">
              <li className="mx-4 hover:bg-white px-8 text-lg py-1  hover:text-black hover:rounded-lg cursor-pointer">
                Contact Us
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="flex mx-auto justify-center items-center text-white">
        <div className="flex mx-80 mt-5 text-2xl mb-8">
          <p>
            There are thousands of students in our college who are deeply
            interested in sports. But there is no certain platform through which
            they can be updated about the scores and information about the
            sporting events going on in the university. Every time they want to
            get an update about any sport or sporting event happening in the
            college, they must get it through circulars which might or might not
            reach them at times or walk to the sports block. The idea of this
            project hit us when we ourselves were the victims of the same when
            we had to walk to the sports block every time we wanted an update.
            There were times when we even wanted to skip the class to keep track
            of our team’s performance. To solve all these issues and not wanting
            to hold the urge of skipping classes and see how our team is doing,
            we came up with the idea of creating a website with all the sports
            and games updates of our college. Our project helps all those sports
            enthusiasts of Chaitanya Bharathi Institute of Technology in getting
            complete information about all the sporting events happening in the
            college. This website is built using Front-End web development and
            more features can be added using backend web development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
