export interface MovieType {
    id: number;
    title: string;
    releaseDate: string;
    voteAverage: number;
    voteCount: number;
    posterPath: string;
    backdropPath: string;
}

export interface MovieTypeApiName {
    id: number;
    title: string;
    release_date: string;
    vote_average: number;
    poster_path: string;
    vote_count: number;
    backdrop_path: string;
}
