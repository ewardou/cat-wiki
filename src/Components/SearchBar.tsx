import { Cat } from '../types';
import { useState } from 'react';
import searchIcon from '../assets/search.svg';
import { useNavigate } from 'react-router-dom';

export default function Search({ breeds }: { breeds: Cat[] }) {
    const [inputValue, setInputValue] = useState<string>('');
    const [modalMsg, setModalMsg] = useState<string>('');
    const navigate = useNavigate();

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
            return addTimeout(`${inputValue} not found`);
        }
        navigate(`/cats/${obj.id}`);
    }

    return (
        <div className="flex items-center self-stretch rounded-[60px] bg-white p-2 focus-within:outline focus-within:outline-2 focus-within:outline-orange-400 md:w-[400px]">
            <input
                type="search"
                className="w-[100px] flex-1 rounded-lg px-1 py-1 text-lg focus:outline-none md:px-2"
                list="flavors"
                placeholder="Enter your breed"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={checkName} className=" shrink-0">
                <img
                    src={searchIcon}
                    alt="search icon"
                    className="h-[24px] w-[24px]"
                />
            </button>
            <datalist id="flavors">{options}</datalist>
            <div
                className={`absolute bg-white ${
                    modalMsg ? 'top-2' : '-top-1/2'
                } left-1/2 -translate-x-1/2 rounded-xl p-4 transition-all duration-200`}
            >
                <button
                    className="absolute right-2 top-1 text-xs"
                    onClick={() => setModalMsg('')}
                >
                    &#x274C;
                </button>
                <p>{modalMsg}</p>
            </div>
        </div>
    );
}
