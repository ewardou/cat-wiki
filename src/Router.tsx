import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './Components/Home';
import Cats from './Components/Cats';
import CatInfo from './Components/CatInfo';
import ErrorPage from './Components/ErrorPage';

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            children: [
                { index: true, element: <Home /> },
                { element: <Cats />, path: 'cats' },
                { element: <CatInfo />, path: 'cats/:CatID' },
            ],
            errorElement: <ErrorPage />,
        },
    ]);

    return <RouterProvider router={router} />;
};

export default Router;
