import type { Movie } from "./Models/Movie";

export const createHtml = (movies: Movie[]) => {
    const moviesContainer = document.getElementById("moviesContainer");

    if (moviesContainer) {
        moviesContainer.innerHTML = "";
        moviesContainer.className = "moviesContainer";
    }

    movies.forEach((movie) => {
        const movieContainer = document.createElement("div");
        const heading = document.createElement("h3");
        const p = document.createElement("p");
        const imgContainer = document.createElement("div");
        const img = document.createElement("img");

        movieContainer.className = "movieContainer";
        heading.innerHTML = movie.Title;
        p.innerHTML = movie.Year;
        imgContainer.className = "imgContainer";
        img.src = movie.Poster;
        img.alt = movie.Title;

        imgContainer.appendChild(img);
        movieContainer?.appendChild(heading);
        movieContainer?.appendChild(p);
        movieContainer?.appendChild(imgContainer);
        moviesContainer?.appendChild(movieContainer);
    });
}