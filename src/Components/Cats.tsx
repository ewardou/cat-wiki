import { Link, useOutletContext } from 'react-router-dom';
import { Cat } from '../types';
import Card from './Card';
import Logo from './Logo';

export default function Cats() {
    const breeds = useOutletContext<Cat[]>();

    return (
        <>
            <header className="bg-[#050709] p-3 px-5">
                <div className="mx-auto max-w-7xl">
                    <Link to="/" className="flex w-fit">
                        <Logo />
                    </Link>
                </div>
            </header>
            <main className="bg-[#050709] p-7 md:p-10">
                <div className="mx-auto grid max-w-7xl grid-cols-[repeat(auto-fit,minmax(220px,1fr))] justify-items-center gap-7 rounded-3xl bg-[#E3E1DC] p-5">
                    {breeds.map((item) => (
                        <Card key={item.id} breed={item} />
                    ))}
                </div>
            </main>
        </>
    );
}
