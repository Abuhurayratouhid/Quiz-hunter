import React from 'react';

const Quiz = ({options}) => {
    
    const opt = options.options;
    console.log(opt)
    return (
        <div className='border m-32 text-center'>
            <h1 className='pt-10'>{options.question} </h1>
            {
                opt.map(option => <button className='bg-lime-400 ml-[450px]  m-5 p-5 block text-center w-80'>{option}</button>)
            }
            {/* <li>{options.options}</li> */}
        </div>
    );
};

export default Quiz;