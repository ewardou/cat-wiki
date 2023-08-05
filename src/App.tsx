import { useState, useEffect } from 'react';
import { Cat } from './types';
import { Outlet } from 'react-router-dom';

function App() {
    const [breeds, setBreeds] = useState<Cat[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    async function getBreeds() {
        try {
            const response = await fetch(
                'https://cat-wiki-ou88.onrender.com/breeds',
            );
            const json: Cat[] = await response.json();
            setBreeds(json);
            setLoading(false);
        } catch {
            setError(true);
        }
    }

    useEffect(() => {
        getBreeds();
    }, []);

    if (error)
        return (
            <div className="h-screen w-screen justify-center items-center flex flex-col gap-3">
                <h1 className="text-lg">
                    A network error has ocurred. Try reloading the page.
                </h1>
                <img
                    src="https://media.tenor.com/80SYQns-DF8AAAAd/stare-cat.gif"
                    alt=""
                    className="h-[300px] w-auto"
                />
            </div>
        );
    if (loading) return <h1>Loading...</h1>;

    return <Outlet context={breeds} />;
}

export default App;
