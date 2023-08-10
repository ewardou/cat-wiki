export interface Cat {
    name: string;
    id: string;
    url:string
}

export interface CatDetailed extends Cat{
    description:string;
    origin:string;
    temperament:string;
    life_span:string;
    adaptability:number;
    grooming:number;
    child_friendly:number;
    affection_level:number;
    intelligence:number;
    health_issues:number;
    social_needs:number;
    stranger_friendly:number;
    dog_friendly:number;
    vocalisation:number;
    shedding_level:number;
    energy_level:number;
    wikipedia_url:string;
    gallery: string[];
}
