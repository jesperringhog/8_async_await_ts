// import { createHtml } from "../htmlUtils";
import type { OmdbResponse } from "../Models/OmdbResponse";
import { get } from "./serviceBase"

const urlBase = "http://omdbapi.com/?apikey=3cf50f5c&";

// export const getMovies = async () => {
//     const response = await get<OmdbResponse>(`${urlBase}s=matrix`);
//     createHtml(response.Search);
// };

export const getMovies = async (searchText: string) => {
    const response = await get<OmdbResponse>(`${urlBase}s=${searchText}`);
    return response.Search;
};
