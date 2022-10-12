import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

const Quiz = ({ options, handleCorrectAnswer }) => {

    const opt = options.options;
    const correctAnswer = options.correctAnswer;
    // console.log(options)
    const showCorrectAnswer = (correctAnswer) => {
        toast.success('Correct answer is :' + correctAnswer, {
            position: "top-center",
            autoClose: 5000,
        })
        console.log(correctAnswer)
    }
    return (
        <div>

            <div className='border md:m-20 text-center'>
                <div className=' md:flex justify-between ml-10 mr-10  items-center'>
                    <div>

                        <h1 className='pt-10'>{options.question} </h1>
                    </div>
                    <div>
                        <button className='text-violet-600 text-3xl' onClick={() => showCorrectAnswer(correctAnswer)}>

                            <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                        </button>
                    </div>

                </div>

                {
                    opt.map(option => <button onClick={() => handleCorrectAnswer(option, correctAnswer)} className='bg-lime-400 w-[300px] md:ml-[450px]  m-5 p-5 block text-center md:w-80'>{option}</button>)
                }

            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Quiz;