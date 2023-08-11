import { useState, useEffect } from 'react';
import { Cat } from './types';
import { Outlet } from 'react-router-dom';
import Loading from './Components/Loading';

function App() {
    const [breeds, setBreeds] = useState<Cat[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    async function getBreeds() {
        try {
            const response = await fetch(
                'https://cat-wiki-ou88.onrender.com/breeds',
            );
            const json: Cat[] = await response.json();
            setBreeds(json);
            setLoading(false);
        } catch {
            getBreeds();
        }
    }

    useEffect(() => {
        getBreeds();
    }, []);

    if (loading) return <Loading />;

    return <Outlet context={breeds} />;
}

export default App;
