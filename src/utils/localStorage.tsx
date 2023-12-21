import { MediaStatusType } from '../types/moviesTypes';

export const getMovieStatus = (
    mediaType: string,
    movieId: number
): MediaStatusType | null => {
    const storedStatus = localStorage.getItem(`${mediaType}_${movieId}`);

    if (storedStatus) {
        return JSON.parse(storedStatus);
    }

    return null;
};

export const updateMovieStatus = (
    mediaType: string,
    movieId: number,
    newStatus: MediaStatusType
): void => {
    localStorage.setItem(`${mediaType}_${movieId}`, JSON.stringify(newStatus));
};

const parseKeys = (keys: string[]) => {
    const parsedKeys: { [key: string]: string }[] = [];

    for (let i = 0; i < keys.length; i++) {
        const [type, idString] = keys[i].split('_');
        const id = idString ? idString : '';

        if (type && id) {
            const parsedKey: { [key: string]: string } = {};
            parsedKey[type] = id;
            parsedKeys.push(parsedKey);
        }
    }

    return parsedKeys;
};

export const getBookmarkedKeys = () => {
    const keys = Object.keys(localStorage);
    const bookmarkedKeys: string[] = [];

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const value = localStorage.getItem(key);

        if (value) {
            const parsedValue = JSON.parse(value);

            if (parsedValue.bookmarked === 'true') {
                bookmarkedKeys.push(key);
            }
        }
    }

    return parseKeys(bookmarkedKeys);
};
