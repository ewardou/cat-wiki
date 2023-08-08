import { Cat } from '../types';

interface CardProps {
    breed: Cat;
}

export default function Card({ breed }: CardProps) {
    return (
        <div className="flex flex-col gap-2 hover:text-orange-300">
            <img
                src={breed.url}
                className="h-[200px] w-[200px] rounded-[24px] object-cover object-center transition-shadow duration-300 hover:shadow-[-8px_0px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-orange-300 md:h-[220px] md:w-[220px]"
            />
            <p className="text-left text-lg font-semibold transition-colors duration-300">
                {breed.name}
            </p>
        </div>
    );
}
