import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-col  bg-black'>
        <div className='flex items-center justify-center'>
            <img src="/logo.jpg" alt='' className='h-24 mt-3'/>
            <p className='text-5xl mx-2 text-red-700'>Kreeda Verse</p>
        </div>
        <div className='text-white flex justify-center'>
            <ul className='flex my-4'>
                <li className='mx-4 hover:bg-white px-8 text-lg py-1  hover:text-black hover:rounded-lg cursor-pointer'>Home</li>
                <li className='mx-4 hover:bg-white px-8 text-lg py-1  hover:text-black hover:rounded-lg cursor-pointer'>About</li>
                <li className='mx-4 hover:bg-white px-8 text-lg py-1  hover:text-black hover:rounded-lg cursor-pointer'>Gallery</li>
                <li className='mx-4 hover:bg-white px-8 text-lg py-1  hover:text-black hover:rounded-lg cursor-pointer'>Contact Us</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar