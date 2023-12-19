import { getTvSeries } from '../../services';

export const loader = async () => {
    const tvSeriesAiringToday = await getTvSeries('airing_today');
    const tvSeriesOnTheAir = await getTvSeries('on_the_air');
    const tvSeriesPopular = await getTvSeries('popular');
    const tvSeriesTopRated = await getTvSeries('top_rated');

    return {
        tvSeriesAiringToday,
        tvSeriesOnTheAir,
        tvSeriesPopular,
        tvSeriesTopRated,
    };
};
