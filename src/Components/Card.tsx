import { Cat } from '../types';

interface CardProps {
    breed: Cat;
}

export default function Card({ breed }: CardProps) {
    return (
        <div className="flex flex-col items-center">
            <img
                src={breed.url}
                className="h-[180px] w-[250px] object-cover object-center"
            />
            <p>{breed.name}</p>
        </div>
    );
}
