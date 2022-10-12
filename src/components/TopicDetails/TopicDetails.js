import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const TopicDetails = () => {
    const details = useLoaderData()
    const allDetails= details.data ;
    const {questions}= allDetails;
    // console.log(questions)
    return (
        <div>
            {
                questions.map(options => <Quiz
                key={options.id}
                options={options} 
                ></Quiz>)
            }
            <h1>hi </h1>
        </div>
    );
};

export default TopicDetails;