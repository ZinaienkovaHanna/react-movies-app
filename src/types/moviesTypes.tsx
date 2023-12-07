export interface MovieType {
    id: number;
    title: string;
    release_date: string;
    vote_average: number;
    backdrop_path: string;
    poster_path: string;
    vote_count: number;
}

export interface MovieCardProps {
    movie: MovieType;
}
