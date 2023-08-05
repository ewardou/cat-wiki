import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './Components/Home';

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            children: [{ index: true, element: <Home /> }],
        },
    ]);

    return <RouterProvider router={router} />;
};

export default Router;
