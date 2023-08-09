import { CatDetailed } from '../types';

function Stat({ name, level }: { name: string; level: number }) {
    return (
        <>
            <p>{name}</p>
            <div className="flex">
                <div
                    className={`h-1 w-2 rounded-xl ${
                        level >= 1 ? 'bg-amber-400' : 'bg-gray-500'
                    }`}
                ></div>
                <div
                    className={`h-1 w-2 rounded-xl ${
                        level >= 2 ? 'bg-amber-400' : 'bg-gray-500'
                    }`}
                ></div>
                <div
                    className={`h-1 w-2 rounded-xl ${
                        level >= 3 ? 'bg-amber-400' : 'bg-gray-500'
                    }`}
                ></div>
                <div
                    className={`h-1 w-2 rounded-xl ${
                        level >= 4 ? 'bg-amber-400' : 'bg-gray-500'
                    }`}
                ></div>
                <div
                    className={`h-1 w-2 rounded-xl ${
                        level >= 5 ? 'bg-amber-400' : 'bg-gray-500'
                    }`}
                ></div>
            </div>
        </>
    );
}

export default function Characteristics({ info }: { info: CatDetailed }) {
    return (
        <>
            <h1>Characteristics</h1>
            <div>
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
        </>
    );
}
