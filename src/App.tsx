import { useState, useEffect } from 'react';
import Search from './Components/SearchBar';
import { Cat } from './types';

function App() {
    const [breeds, setBreeds] = useState<Cat[]>([]);

    async function getBreeds() {
        const response = await fetch(
            'https://cat-wiki-ou88.onrender.com/breeds',
        );
        const json: Cat[] = await response.json();
        setBreeds(json);
        console.log('information fetched');
    }

    useEffect(() => {
        getBreeds();
    }, []);

    return <Search breeds={breeds} />;
}

export default App;
