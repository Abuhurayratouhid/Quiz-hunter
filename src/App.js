import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Main';
import Home from './components/Home/Home';
import Error from './components/Error/Error';

function App() {
  const router= createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
          path: '/home',
          element: <Home></Home>
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
