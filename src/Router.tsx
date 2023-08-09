import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './Components/Home';
import Cats from './Components/Cats';

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            children: [
                { index: true, element: <Home /> },
                { element: <Cats />, path: 'cats' },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
};

export default Router;
