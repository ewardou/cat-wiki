import { CatDetailed } from '../types';
import ReadMore from './ReadMore';

function Stat({ name, level }: { name: string; level: number }) {
    function markLevel(number: number) {
        const color = level >= number ? 'bg-amber-400' : 'bg-gray-500';
        return `h-2 w-4 flex-1 rounded-xl ${color}`;
    }

    return (
        <div>
            <p className="text-lg">{name}</p>
            <div className="flex gap-2">
                <div className={markLevel(1)}></div>
                <div className={markLevel(2)}></div>
                <div className={markLevel(3)}></div>
                <div className={markLevel(4)}></div>
                <div className={markLevel(5)}></div>
            </div>
        </div>
    );
}

export default function Characteristics({ info }: { info: CatDetailed }) {
    return (
        <section className="mx-auto max-w-7xl rounded-tl-3xl bg-white p-3">
            <h1 className="mb-4 text-xl font-semibold">Characteristics</h1>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-x-5 lg:grid-cols-3">
                <Stat name="Adaptability" level={info.adaptability} />
                <Stat name="Affection level" level={info.affection_level} />
                <Stat name="Child friendly" level={info.child_friendly} />
                <Stat name="Dog friendly" level={info.dog_friendly} />
                <Stat name="Energy level" level={info.energy_level} />
                <Stat name="Grooming" level={info.grooming} />
                <Stat name="Health issues" level={info.health_issues} />
                <Stat name="Intelligence" level={info.intelligence} />
                <Stat name="Shedding level" level={info.shedding_level} />
                <Stat name="Social needs" level={info.social_needs} />
                <Stat name="Stranger friendly" level={info.stranger_friendly} />
                <Stat name="Vocalization" level={info.vocalisation} />
            </div>
            <div className="mx-auto mt-4 w-fit">
                <ReadMore path={info.wikipedia_url} />
            </div>
        </section>
    );
}
