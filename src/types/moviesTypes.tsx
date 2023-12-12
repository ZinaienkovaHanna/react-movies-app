interface GenreType {
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
