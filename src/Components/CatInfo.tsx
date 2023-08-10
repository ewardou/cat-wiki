import { useEffect, useState } from 'react';
import { CatDetailed } from '../types';
import { useParams } from 'react-router-dom';
import Characteristics from './Characteristics';
import ReadMore from './ReadMore';

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
            <ReadMore path={info.wikipedia_url} />
            <h1>Other photos</h1>
            <div>
                {info.gallery.map((item, index) => (
                    <img src={item} alt="" key={index} />
                ))}
            </div>
        </>
    );
}
