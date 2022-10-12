import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='border-2 rounded-md p-20 ml-32 mr-32 mt-10'>
                <h1 className='text-violet-700 text-2xl'>Q-1.What is the purpose of react router?</h1>
                <p>Ans:</p>
                <p>ReactJS Router is mainly used for developing Single Page Web Applications. <br />
                    React Router is used to define multiple routes in the application. <br />
                    When a user types a specific URL into the browser, <br />
                    and if this URL path matches any 'route' inside the router file, <br />
                    the user will be redirected to that particular route.</p>
            </div>
            <div className='border-2 rounded-md p-20 ml-32 mr-32 mt-10'>
                <h1 className='text-violet-700 text-2xl'>Q-2.How does context api works ?</h1>
                <p>Ans:</p>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. <br />
                    This is the alternative to "prop drilling" or moving props from grandparent to child to parent, <br />
                    and so on. Context is also touted as an easier, lighter approach to state management using Redux. <br />
                    in short: <br />
                    Context provides a way to pass data through the component tree without having to pass props down manually at every level.
                    and React's context allows you to share information to any component, by storing it in a central place .</p>
            </div>
            <div className='border-2 rounded-md p-20 ml-32 mr-32 mt-10'>
                <h1 className='text-violet-700 text-2xl'>Q-3.Explain useRef:</h1>
                <p>Ans:</p>
                <p>The useRef Hook allows you to persist values between renders. <br />
                    It can be used to store a mutable value that does not cause a re-render when updated. <br />
                    It can be used to access a DOM element directly. <br />
                    If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.

                    To avoid this, we can use the useRef Hook.
                </p>
            </div>
        </div>
    );
};

export default Blog;