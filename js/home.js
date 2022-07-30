const movies = document.querySelector('.movies');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');
const modalGenres = document.querySelector('.modal__genres');

let searchedMovies = [];
let moviesLenght = 0;
let nPages = 0;

const getMoviesLenght = () => {
    moviesLenght = searchedMovies.length;

    if (moviesLenght % 5 === 0) {
        nPages = moviesLenght / 5;
    } else {
        nPages = Math.trunc(moviesLenght / 5) + 1;
    }
}

const getMovies = async () => {
    const response = await fetch('https://tmdb-proxy.cubos-academy.workers.dev/3/discover/movie?language=pt-BR&include_adult=false');
    const body = await response.json();
    searchedMovies = body.results;
    getMoviesLenght();
}

closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
    modalGenres.innerHTML = '';
});

const buildElements = (item) => {
    const movie = document.createElement('div');
    movie.classList.add('movie');
    movie.style.backgroundImage = `url(${item.poster_path})`;
    const id = item.id;
    movie.addEventListener('click', async () => {
        const responseModal = await fetch('https://tmdb-proxy.cubos-academy.workers.dev/3/movie/' + id + '?language=pt-BR');
        const bodyModal = await responseModal.json();
        modal.classList.remove('hidden');

        const modalTitle = document.querySelector('.modal__title');
        modalTitle.textContent = bodyModal.title;

        const modalImg = document.querySelector('.modal__img');
        modalImg.src = bodyModal.backdrop_path;

        const modalDescription = document.querySelector('.modal__description');
        modalDescription.textContent = bodyModal.overview;

        const modalAverage = document.querySelector('.modal__average');
        modalAverage.textContent = bodyModal.vote_average;

        const genresModal = bodyModal.genres;
        for (let genre of genresModal) {
            let element = document.createElement('span');
            element.classList.add('modal__genre');
            element.textContent = genre.name;
            modalGenres.append(element);
        }
    });

    const movieInfo = document.createElement('div');
    movieInfo.classList.add('movie__info');

    const movieTitle = document.createElement('span');
    movieTitle.classList.add('movie__title');
    movieTitle.textContent = item.title;

    const movieRating = document.createElement('span');
    movieRating.classList.add('movie__rating');
    movieRating.textContent = item.vote_average;

    const rating = document.createElement('img');
    rating.classList.add('rating');
    rating.src = './assets/estrela.svg';
    rating.alt = 'Estrela';

    movieRating.append(rating);
    movieInfo.append(movieTitle, movieRating);
    movie.append(movieInfo);
    movies.append(movie);
}

const makeCardMovies = (start, end) => {
    const card = searchedMovies.slice(start, end);
    movies.innerHTML = '';
    card.forEach(item => {
        buildElements(item);
    });
}

const init = async () => {
    await getMovies();
    makeCardMovies(0, 5);
}

init();