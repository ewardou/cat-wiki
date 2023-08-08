import Search from './SearchBar';
import Card from './Card';
import { Link, useOutletContext } from 'react-router-dom';
import { Cat } from '../types';
import arrowIcon from '../assets/arrow.svg';
import catWikiLogo from '../assets/CatwikiLogo.svg';
import image1 from '../assets/image 1.png';
import image2 from '../assets/image 2.png';
import image3 from '../assets/image 3.png';

function Home() {
    const breeds = useOutletContext<Cat[]>();

    const samples = [
        <Card breed={breeds[4]} key={breeds[4].id} />,
        <Card breed={breeds[14]} key={breeds[34].id} />,
        <Card breed={breeds[30]} key={breeds[10].id} />,
        <Card breed={breeds[57]} key={breeds[57].id} />,
    ];

    return (
        <>
            <header className="bg-[#050709]">
                <header className="mx-auto flex max-w-7xl flex-col items-center bg-[#050709] bg-[auto_540px] bg-[right_center] bg-no-repeat p-3 px-10 sm:h-[540px] sm:flex-row sm:bg-[url('/src/assets/HeroImagemd.png')]">
                    <div className="block h-60 w-60 rounded-full bg-[url('/src/assets/HeroImagemd.png')] bg-cover bg-[90%] outline outline-2 outline-white sm:hidden" />
                    <div className="flex max-w-[400px] flex-col items-center gap-4 sm:items-stretch">
                        <img
                            src={catWikiLogo}
                            alt="Cat wiki logo"
                            className="h-[90px] w-auto sm:mr-auto"
                        />
                        <p className="mb-9 text-2xl text-white">
                            Get to know more about your cat breed
                        </p>
                        <Search breeds={breeds} />
                        <p className="mx-auto text-lg text-white">
                            Or try a random breed
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
                    <Link
                        to="/cats"
                        className=" flex items-end justify-between"
                    >
                        <h1 className="text-4xl font-bold transition-colors duration-300 hover:text-orange-300 md:w-[50%] md:text-5xl">
                            66+ breeds for you to explore
                        </h1>
                        <span className="hidden align-bottom text-lg font-semibold md:flex">
                            See more
                            <img src={arrowIcon} className="h-6 w-6" />
                        </span>
                    </Link>
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
                    <Link to="/why-should-you-have-a-cat">
                        Read more{' '}
                        <img src={arrowIcon} className="inline-block h-6 w-6" />
                    </Link>
                </div>
                <div className="grid grid-cols-2 grid-rows-[min-content_1fr] gap-4">
                    <img src={image2} alt="" className="h-auto w-full" />
                    <img src={image1} alt="" className="place-self-end" />
                    <img
                        src={image3}
                        className="col-start-2 row-span-full"
                        alt=""
                    />
                </div>
            </section>

            <footer className="mx-auto max-w-7xl">
                <p>
                    Project idea from{' '}
                    <a href="https://devchallenges.io/">devChallenges</a>
                </p>
            </footer>
        </>
    );
}

export default Home;
