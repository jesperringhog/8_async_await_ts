import { createHtml } from './htmlUtils';
import { getMovies } from './services/serviceMovies'
import './style.css'

//getMovies();

document.getElementById("searchForm")?.addEventListener("submit", async (e) => {
    e.preventDefault();

    const searchInput = document.getElementById("searchInput");

    let searchText = "";
    if(searchInput) {
        searchText = (searchInput as HTMLInputElement).value;
    }

    const movies = await getMovies(searchText);
    createHtml(movies);

    if (searchInput) {
        (searchInput as HTMLInputElement).value = "";
    }
});