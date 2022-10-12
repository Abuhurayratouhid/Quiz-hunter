import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='h-20 bg-violet-800 text-white md:flex items-center justify-between'>
            <div className='ml-10'>
                <h1 className='text-4xl'> Quiz-Hunter</h1>
            </div>

            <div className='text-1xl mr-10'>
                <Link className='mr-4' to='/'> Topics </Link>
                <Link className='mr-4' to='/chart'> Chart </Link>
                <Link className='mr-4' to='/blog'> Blog </Link>
                <Link className='mr-4' to='/about'> About  </Link>
            </div>
        </div>
    );
};

export default Navbar;