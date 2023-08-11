import { Link } from 'react-router-dom';

export default function ErrorPage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-3 bg-[#050709] p-4">
            <h1 className="text-2xl font-bold text-white">
                Sorry, we could not find this page
            </h1>
            <img
                src="https://media.tenor.com/80SYQns-DF8AAAAd/stare-cat.gif"
                alt=""
                className=" max-h-80 w-auto"
            />
            <Link
                to="/"
                className="text-lg font-bold text-orange-300 underline"
            >
                Go back to home page
            </Link>
        </div>
    );
}
