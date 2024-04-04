import { getData } from './getData';
import { BASE_URL, ERROR_MESSAGE } from '../constant/setting';

const API_KEY = process.env.API_KEY as string;

export const getMovieDetailData = async (movieID: number) => {
  if (!API_KEY) {
    throw new Error(ERROR_MESSAGE.INVALID_API_KEY);
  }

  const params = {
    api_key: API_KEY,
    language: 'ko-KR',
  };

  const movieDatailUrl = `${BASE_URL}${movieID}?${new URLSearchParams(
    params,
  ).toString()}`;

  const movieDetail = await getData(movieDatailUrl);

  if (!movieDetail) {
    throw new Error(ERROR_MESSAGE.FETCH_MOVIE_DETAIL_FAILED);
  }

  return movieDetail;
};
