import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './All files/Router';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className=' bg-gray-300'>
      <RouterProvider router={router}>

      </RouterProvider>

      <Toaster></Toaster>
    </div>
  );
}

export default App;
