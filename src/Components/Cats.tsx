import { Link, useOutletContext } from 'react-router-dom';
import { Cat } from '../types';
import Card from './Card';
import Header from './Header';

export default function Cats() {
    const breeds = useOutletContext<Cat[]>();

    return (
        <>
            <Header />
            <main className="bg-[#050709] p-7 md:p-10">
                <div className="mx-auto grid max-w-7xl grid-cols-[repeat(auto-fit,minmax(220px,1fr))] justify-items-center gap-7 rounded-3xl bg-[#E3E1DC] p-5">
                    {breeds.map((item) => (
                        <Link key={item.id} to={`/cats/${item.id}`}>
                            <Card breed={item} />
                        </Link>
                    ))}
                </div>
            </main>
        </>
    );
}
