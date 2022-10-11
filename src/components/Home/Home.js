import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Home = () => {
    const quizTopics = useLoaderData()
    const topics = quizTopics.data;
    // console.log(topics )
    return (
        <div>
            <div className='shadow-xl h-64 ml-10 mr-10 rounded-md bg-slate-100 mt-32'>
                <h1 className='text-6xl font-semibold p-10'>Become a pro start <br /> learning online </h1>
            </div>
            <div className=' ml-10 mr-10 mb-20  mt-32 md:flex justify-around'>
                
                {
                    topics.map(topic => <Topic
                    key={topic.id}
                    topic={topic}
                    ></Topic>)
                } 
            </div>
        </div>
    );
};

export default Home;