import { Cat } from '../types';
import { useState } from 'react';

export default function Search({ breeds }: { breeds: Cat[] }) {
    const [inputValue, setInputValue] = useState<string>('');
    const [modalMsg, setModalMsg] = useState<string>('');

    const options = breeds.map((breed) => (
        <option value={breed.name} key={breed.id} />
    ));

    function addTimeout(msg: string) {
        setModalMsg(msg);
        setTimeout(() => setModalMsg(''), 2500);
    }

    function checkName() {
        if (!inputValue) return addTimeout('Please enter a breed name');
        const obj = breeds.find((item) =>
            item.name.toLowerCase().includes(inputValue.toLowerCase()),
        );
        if (!obj) {
            addTimeout(`${inputValue} not found`);
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
            <div
                className={`bg-white absolute ${
                    modalMsg ? 'top-2' : '-top-1/2'
                } left-1/2 -translate-x-1/2 border border-solid border-black p-4 transition-all duration-200`}
            >
                <button
                    className="absolute top-0 right-[2px] text-xs"
                    onClick={() => setModalMsg('')}
                >
                    &#x274C;
                </button>
                <p>{modalMsg}</p>
            </div>
        </>
    );
}
