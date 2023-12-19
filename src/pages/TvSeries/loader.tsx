import { Params } from 'react-router-dom';
import { getMovieById } from '../../services';

export const loader = async ({ params }: { params: Params<'tvId'> }) => {
    const tvId = params.tvId;

    if (!tvId) {
        throw new Error('TV Series ID is undefined');
    }

    const tvSeries = await getMovieById('tv', tvId);

    return { tvSeries };
};
