import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const TopicDetails = () => {
   
    const details = useLoaderData()
    const allDetails= details.data ;
    const {questions}= allDetails;
    
    
    console.log(questions)

    const handleCorrectAnswer = (option,correctAnswer )=>{
        const clickedOption= option;
        const rightAnswer = correctAnswer;
        if(clickedOption === rightAnswer){
            console.log('true')
        }
        else{
            console.log('false');
        }
        // console.log(clickedOption,  rightAnswer)
    } 
    return (
        <div>
            {
                questions.map(options => <Quiz
                key={options.id}
                options={options}
                handleCorrectAnswer={handleCorrectAnswer} 
                ></Quiz>)
            }
            
        </div>
    );
};

export default TopicDetails;