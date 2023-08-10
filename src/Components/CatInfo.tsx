import { useEffect, useState } from 'react';
import { CatDetailed } from '../types';
import { Link, useParams } from 'react-router-dom';
import Characteristics from './Characteristics';
import Logo from './Logo';

export default function CatInfo() {
    const [info, setInfo] = useState<CatDetailed | null>(null);
    const { CatID } = useParams();

    async function getInfo() {
        const response = await fetch(
            `https://cat-wiki-ou88.onrender.com/breeds/${CatID}`,
        );
        const json = await response.json();
        setInfo(json);
    }

    useEffect(() => {
        getInfo();
    }, []);

    if (!info) return <h1>Loading...</h1>;

    return (
        <div className="min-h-screen bg-[#050709] px-4 pb-5">
            <header className="bg-[#050709] p-3 px-5">
                <div className="mx-auto max-w-7xl">
                    <Link to="/" className="flex w-fit">
                        <Logo />
                    </Link>
                </div>
            </header>
            <section className="mx-auto flex max-w-7xl flex-col items-center gap-4 bg-[#050709] p-4 pb-0 pr-0 md:flex-row">
                <img
                    src={info.url}
                    alt=""
                    className="h-[220px] w-[220px] rounded-3xl object-cover object-center shadow-[-8px_0px_0px_0px_rgba(0,0,0,0.3)] shadow-orange-300"
                />
                <div className="flex flex-col gap-3 rounded-tl-3xl rounded-tr-3xl bg-[#E3E1DC] p-6 text-lg md:rounded-tl-[200px] md:pl-40">
                    <h1 className="text-2xl font-semibold">{info.name}</h1>
                    <p>{info.description}</p>
                    <p>
                        <span className="font-medium">Origin:</span>{' '}
                        {info.origin}
                    </p>
                    <p>
                        <span className="font-medium">Temperament:</span>{' '}
                        {info.temperament}
                    </p>
                    <p>
                        <span className="font-medium">Life span:</span>{' '}
                        {info.life_span}
                    </p>
                </div>
            </section>
            <Characteristics info={info} />
            <section className="mx-auto max-w-7xl rounded-b-3xl bg-white p-3">
                <h1 className="text-xl font-semibold">Other photos</h1>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] justify-items-center gap-y-4 p-4">
                    {info.gallery.map((item, index) => (
                        <img
                            src={item}
                            alt=""
                            key={index}
                            className="h-[190px] w-[190px] rounded-3xl object-cover object-center"
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}
