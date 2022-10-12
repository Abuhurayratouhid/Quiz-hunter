import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({topic}) => {
    const {name, logo, id }= topic;
    console.log(topic)
    return (
        <div className=' mt-5 rounded-md bg-slate-700 text-white'>
             <img className='w-[350px] h-[250px] rounded-md' src={logo} alt="" />
             <h3 className='text-2xl '> {name}</h3>
             <Link to={`/topic/${id}`}>
             <button className='bg-sky-500  px-7  mb-5 mt-5 rounded-md'>start quiz</button>
             </Link>
        </div>
    );
};

export default Topic;