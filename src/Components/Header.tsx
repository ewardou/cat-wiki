import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Header() {
    return (
        <header className="bg-[#050709] p-3 px-5">
            <div className="mx-auto max-w-7xl">
                <Link to="/" className="flex w-fit">
                    <Logo />
                </Link>
            </div>
        </header>
    );
}
