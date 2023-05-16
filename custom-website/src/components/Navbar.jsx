import React from 'react'

const Navbar = () => {
  return (
    <div className='text-white flex justify-between items-center h24 max-w-[1240px] mx-auto'>
        <h1 className='w-full text-3xl font-bold text-[#50ccc6]'>REACT.</h1>
        <ul className='flex hidden'>
          <li className='p-4'>Home</li>
          <li className='p-4'>Home</li>
          <li className='p-4'>Home</li>
          <li className='p-4'>Home</li>
          <li className='p-4'>Home</li>
        </ul>
        <div>
        </div>
        <div className='fixed left-0 top-0 w=[60%] border-r-gray-900'>
          <ul className='pt-24 upppercase'>
          <li className='p-4'>Home</li>
          <li className='p-4'>Home</li>
          <li className='p-4'>Home</li>
          <li className='p-4'>Home</li>
          <li className='p-4'>Home</li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar