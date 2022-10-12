import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Main';
import Home from './components/Home/Home';
import Error from './components/Error/Error';
import TopicDetails from './components/TopicDetails/TopicDetails';
import Chart from './components/Chart/Chart';
import Blog from './components/Blog/Blog';

function App() {
  const router= createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>,
        },
        {
          path: '/topic/:topicId',
          loader: async ({params})=> {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`)
          },
          element: <TopicDetails></TopicDetails>
        },
        {
          path: '/chart',
          loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Chart></Chart>
        },
        {
          path:'/blog',
          element: <Blog></Blog>
        }
      ]
      
    }
  ])
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider> 
    </div>
  );
}

export default App;
