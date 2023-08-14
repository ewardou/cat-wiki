import Search from './SearchBar';
import Card from './Card';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import { Cat } from '../types';
import Logo from './Logo';
import ReadMore from './ReadMore';
import Collage from './Collage';

function Home() {
    const breeds = useOutletContext<Cat[]>();
    const navigate = useNavigate();

    const samples = [
        <Link to={`/cats/${breeds[4].id}`} key={breeds[4].id}>
            <Card breed={breeds[4]} />
        </Link>,
        <Link to={`/cats/${breeds[14].id}`} key={breeds[14].id}>
            <Card breed={breeds[14]} />
        </Link>,
        <Link to={`/cats/${breeds[30].id}`} key={breeds[30].id}>
            <Card breed={breeds[30]} />
        </Link>,
        <Link to={`/cats/${breeds[57].id}`} key={breeds[57].id}>
            <Card breed={breeds[57]} />
        </Link>,
    ];

    function getRandomCat() {
        const randomBreed = breeds[Math.floor(Math.random() * breeds.length)];
        navigate(`/cats/${randomBreed.id}`);
    }

    return (
        <>
            <header className="bg-[#050709]">
                <header className="mx-auto flex max-w-7xl flex-col items-center bg-[#050709] bg-[auto_540px] bg-[right_center] bg-no-repeat p-3 px-10 sm:h-[540px] sm:flex-row sm:bg-[url('/src/assets/HeroImagemd.png')]">
                    <div className="block h-60 w-60 rounded-full bg-[url('/src/assets/HeroImagemd.png')] bg-cover bg-[90%] outline outline-2 outline-white sm:hidden" />
                    <div className="flex max-w-[400px] flex-col items-center gap-4 sm:items-stretch">
                        <Logo />
                        <p className="mb-9 text-2xl text-white">
                            Get to know more about your cat breed
                        </p>
                        <Search breeds={breeds} />
                        <p className="mx-auto text-lg text-white">
                            Or try a{' '}
                            <button
                                onClick={getRandomCat}
                                className="font-bold text-orange-300"
                            >
                                random breed
                            </button>
                        </p>
                    </div>
                </header>
            </header>

            <section className="bg-[#E3E1DC]">
                <div className="mx-auto flex max-w-7xl flex-col gap-3 p-3 px-10 md:min-h-[600px] md:justify-around md:gap-0">
                    <div className="w-fit">
                        <p className="text-lg">Complete breed list</p>
                        <div className="h-1 w-[50%] bg-slate-800"></div>
                    </div>
                    <div className=" flex items-end justify-between">
                        <Link to="/cats">
                            <h1 className="text-4xl font-bold transition-colors duration-300 hover:text-orange-300 md:w-[75%] md:text-5xl">
                                66+ breeds for you to explore
                            </h1>
                        </Link>
                        <span className="hidden md:inline-block">
                            <ReadMore path="/cats" />
                        </span>
                    </div>
                    <div className="flex flex-wrap justify-evenly gap-5">
                        {breeds.length !== 0 ? samples : null}
                    </div>
                </div>
            </section>

            <section className="mx-auto flex max-w-7xl flex-col justify-around gap-5 p-12 md:flex-row md:items-center">
                <div className="flex flex-col gap-5 md:w-[50%]">
                    <div className="h-1 w-[20%] bg-slate-800"></div>
                    <h1 className="text-4xl font-bold md:text-5xl">
                        Why should you have a cat?
                    </h1>
                    <p className="text-lg">
                        Having a cat around can actually trigger the release of
                        calming chemicals in your body which lower your stress
                        and anxiety levels
                    </p>
                    <ReadMore path="/why-should-you-have-a-cat" />
                </div>
                <Collage />
            </section>

            <footer className="mx-auto max-w-7xl">
                <p>
                    Project idea from{' '}
                    <a
                        href="https://devchallenges.io/"
                        className="font-bold text-orange-400"
                    >
                        devChallenges
                    </a>
                </p>
            </footer>
        </>
    );
}

export default Home;
