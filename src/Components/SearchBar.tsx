import { Cat } from '../types';
import { useState } from 'react';

export default function Search({ breeds }: { breeds: Cat[] }) {
    const [inputValue, setInputValue] = useState<string>('');

    const options = breeds.map((breed) => (
        <option value={breed.name} key={breed.id} />
    ));

    function checkName() {
        const obj = breeds.find((item) =>
            item.name.toLowerCase().includes(inputValue.toLowerCase()),
        );
        if (obj) {
            console.log(`${obj.name} found`);
        } else {
            console.log(`${inputValue} not found`);
        }
    }

    return (
        <>
            <input
                type="search"
                className="border border-solid border-gray-700 py-1 px-2"
                list="flavors"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button
                className="border border-solid border-gray-600 bg-orange-600 text-white"
                onClick={checkName}
            >
                Search
            </button>
            <datalist id="flavors">{options}</datalist>
        </>
    );
}
