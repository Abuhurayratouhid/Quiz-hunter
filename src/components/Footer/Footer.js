import React from 'react';

const Footer = () => {
    return (
        <div >
            <div className='bg-violet-900 mb-0 text-white w-full md:h-40 mt-20 md:flex justify-between items-center pl-10 pr-10'>
                <div>
                    <p>Contact us:</p>
                    <p>Address: Unisco university</p>
                    <p>Albany, NY, USA. 11001</p>
                    <p>Email : info@unisco.com</p>
                    <p>Phone : +91 555 668 986</p>
                </div>
                <div>
                    <p>Our services:</p> <br />
                    <p>Courses</p>
                    <p>Tutors</p>
                    <p>Quiz & tests</p>

                </div>
                <div>

                    <h1>2022 © copyright
                        All rights reserved.</h1>
                </div>

            </div>
        </div>
    );
};

export default Footer;