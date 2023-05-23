import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-my h-[100vh] text-red-800">
        <div className='flex flex-col  bg-black'>
        <div className='flex items-center justify-center'>
            <img src="/logo.jpg" alt='' className='h-24 mt-3'/>
            <p className='text-5xl mx-2 text-red-700'>Kreeda Verse</p>
        </div>
        <div className='text-white flex justify-center'>
            <ul className='flex my-4'>
                <Link to='/'><li className='mx-4 hover:bg-white px-8 text-lg py-1  hover:text-black hover:rounded-lg cursor-pointer'>Home</li></Link>
                <Link to='/about'><li className='mx-4 hover:bg-white px-8 text-lg py-1  hover:text-black hover:rounded-lg cursor-pointer'>About</li></Link>
                <Link to='/gallery'><li className='mx-4 hover:bg-white px-8 text-lg py-1  hover:text-black hover:rounded-lg cursor-pointer'>Gallery</li></Link>
                <Link to='/contact'><li className='mx-4 hover:bg-white px-8 text-lg py-1  hover:text-black hover:rounded-lg cursor-pointer'>Contact Us</li></Link>
                <Link to='/form'><li className='mx-4 hover:bg-white px-8 text-lg py-1  hover:text-black hover:rounded-lg cursor-pointer'>Add a Score</li></Link>
            </ul>
        </div>
    </div>
      <div className="p-4 flex flex-col justify-center">
        <div className="pb-8 flex justify-center ">
          <h6 className="text-6xl">Sports</h6>
        </div>
        <div className="grid grid-cols-4 mx-32 gap-12 text-white text-3xl">
          <Link to='/cricket'><div className="bg-cricket h-40 flex justify-center items-center rounded-lg">
            <p>Cricket</p>
          </div></Link>
          <Link to='/football'><div className="bg-football h-40 flex justify-center items-center rounded-lg">
            <p>FootBall</p>
          </div></Link>
          <Link to = '/volleyball'><div className="bg-volleyball h-40 flex justify-center items-center rounded-lg">
            <p>Volleyball</p>
          </div></Link>
          <Link to = '/badminton'><div className="bg-badminton h-40 flex justify-center items-center rounded-lg">
            <p>Badminton</p>
          </div></Link>
        </div>

      </div>
    </div>
  );
};

export default Home;
