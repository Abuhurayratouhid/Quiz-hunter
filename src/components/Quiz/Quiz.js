import React from 'react';

const Quiz = ({options,handleCorrectAnswer}) => {
    
    const opt = options.options;
    const correctAnswer = options.correctAnswer ;
    // console.log(correctAnswer)
    return (
        <div className='border md:m-32 text-center'>
            <h1 className='pt-10'>{options.question} </h1>
            {
                opt.map(option => <button  onClick={( )=>handleCorrectAnswer(option,correctAnswer)} className='bg-lime-400 w-[300px] md:ml-[450px]  m-5 p-5 block text-center md:w-80'>{option}</button>)
            }
            
        </div>
    );
};

export default Quiz;