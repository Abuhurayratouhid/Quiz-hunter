import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router= createBrowserRouter([
    {
      path: '/',
      element: <div> first route </div>
    }
  ])
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider> 
    </div>
  );
}

export default App;
