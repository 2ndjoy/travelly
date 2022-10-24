import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { Routers } from './Components/Routes/Routers';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <RouterProvider router={Routers}></RouterProvider>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />

    </div>
  );
}

export default App;
