export interface GenreType {
    id: number;
    name: string;
}

export interface MovieType {
    id: number;
    title: string;
    releaseDate: string;
    voteAverage: number;
    voteCount: number;
    posterPath: string;
    backdropPath: string;
    overview: string;
    runtime: number;
    tagline: string;
    genres: GenreType[];
    mediaType: string;
}

export interface SeriesType {
    id: number;
    title: string;
    releaseDate: string;
    voteAverage: number;
    voteCount: number;
    posterPath: string;
    backdropPath: string;
    overview: string;
    tagline: string;
    genres: GenreType[];
    episodes: number;
    seasons: number;
    mediaType: string;
}

export interface MovieTypeApiName {
    id: number;
    title: string;
    release_date: string;
    vote_average: number;
    poster_path: string;
    vote_count: number;
    backdrop_path: string;
    overview: string;
    runtime: number;
    tagline: string;
    genres: GenreType[];
}

export interface SeriesTypeApiName {
    id: number;
    vote_average: number;
    poster_path: string;
    vote_count: number;
    backdrop_path: string;
    overview: string;
    tagline: string;
    genres: GenreType[];
    first_air_date: string;
    name: string;
    number_of_episodes: number;
    number_of_seasons: number;
}

export interface SectionType {
    id: number;
    title: string;
    movies: MovieType[] | SeriesType[];
    mediaType: string;
}
