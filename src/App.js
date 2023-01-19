import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './pages/Router/Router';
import { Toaster } from 'react-hot-toast';
import 'react-photo-view/dist/react-photo-view.css';

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
