export interface FilmeSingleInArray {
    id: number;
    poster_path: string | null;
    title: string;
    vote_average: number;
}

export interface PageFilmes {
    page: number,
    results: FilmeSingleInArray[],
    total_pages: number,
    total_results: number
}

export interface MovieVideos {
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    published_at: Date;
    id: string;
}

interface DefaultProvider {
    display_priority: number,
    logo_path: string,
    provider_id: number,
    provider_name: string
}

export interface Providers {
    flatrate: DefaultProvider[];
    buy: DefaultProvider[];
    rent: DefaultProvider[];
}

export interface Comentario {
    author: string,
    author_details: {
        name: string,
        username: string,
        avatar_path: string | null,
        rating: number | null
    },
    content: string,
    created_at: string,
    id: string,
    updated_at: string,
}

export interface FilmeSingleToShow {
    adult: boolean,
    backdrop_path: string | null,
    belongs_to_collection: null | object,
    budget: number,
    genres: {
        id: number,
        name: string
    }[],
    homepage: string | null,
    id: number,
    imdb_id: string | null,
    original_language: string,
    original_title: string,
    overview: string | null,
    popularity: number,
    poster_path: string | null,
    production_companies: {
        name: string,
        id: number,
        logo_path: string | null,
        origin_country: string
    }[],
    production_countries: {
        iso_3166_1: string,
        name: string
    }[],
    release_date: string,
    revenue: number,
    runtime: number | null,
    spoken_languages: {
        english_name: string,
        iso_639_1: string,
        name: string
    }[],
    status: string,
    tagline: string | null,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}
