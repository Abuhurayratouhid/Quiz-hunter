import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Quiz from '../Quiz/Quiz';

const TopicDetails = () => {
   
    const details = useLoaderData()
    const allDetails= details.data ;
    const {questions}= allDetails;
    
    
    // console.log(allDetails)

    const handleCorrectAnswer = (option,correctAnswer )=>{
        const clickedOption= option;
        const rightAnswer = correctAnswer;
        if(clickedOption === rightAnswer){
           toast.success ('Correct answer', {
            position: "top-center",
            autoClose: 500,
           })
            // console.log('true')
        }
        else{
            toast.warn('Wrong answer', {
                position: "top-center",
                autoClose: 500,
               })
            // console.log('false');
        }
        // console.log(clickedOption,  rightAnswer)
    } 
    return (
        <div>
            <h1 className='mt-20 text-3xl '>Quiz of {allDetails.name}</h1>
            {
                questions.map(options => <Quiz
                key={options.id}
                options={options}
                handleCorrectAnswer={handleCorrectAnswer} 
                ></Quiz>)
            }
          <ToastContainer></ToastContainer>  
        </div>
    );
};

export default TopicDetails;