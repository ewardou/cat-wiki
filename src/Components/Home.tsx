import Search from './SearchBar';
import Card from './Card';
import { Link, useOutletContext } from 'react-router-dom';
import { Cat } from '../types';

function Home() {
    const breeds = useOutletContext<Cat[]>();

    const samples = [
        <Card breed={breeds[4]} key={breeds[4].id} />,
        <Card breed={breeds[34]} key={breeds[34].id} />,
        <Card breed={breeds[10]} key={breeds[10].id} />,
        <Card breed={breeds[57]} key={breeds[57].id} />,
    ];

    return (
        <>
            <Search breeds={breeds} />
            <section>{breeds.length !== 0 ? samples : null}</section>
            <section>
                <h1>Why should you have a cat?</h1>
                <p>
                    Having a cat around can actually trigger the release of
                    calming chemicals in your body which lower your stress and
                    anxiety levels
                </p>
                <Link to="/why-should-you-have-a-cat">Read more</Link>
            </section>
        </>
    );
}

export default Home;
