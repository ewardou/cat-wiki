import { useEffect, useState } from 'react';
import { CatDetailed } from '../types';
import { useParams } from 'react-router-dom';
import Characteristics from './Characteristics';

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
        <>
            <img src={info.url} alt="" />
            <h1>{info.name}</h1>
            <p>{info.description}</p>
            <p>
                <span>Origin:</span> {info.origin}
            </p>
            <p>
                <span>Temperament:</span> {info.temperament}
            </p>
            <p>
                <span>Life span:</span> {info.life_span}
            </p>
            <Characteristics info={info} />
        </>
    );
}
