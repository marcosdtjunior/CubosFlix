const highlight = document.querySelector('.highlight');
highlight.style.marginBottom = '122px';

let bodyHighlight;
let bodyVideoHighlight;

const getHighlight = async () => {
    const response = await fetch('https://tmdb-proxy.cubos-academy.workers.dev/3/movie/436969?language=pt-BR');
    bodyHighlight = await response.json();
}

const getVideoHighlight = async () => {
    const response = await fetch('https://tmdb-proxy.cubos-academy.workers.dev/3/movie/436969/videos?language=pt-BR');
    bodyVideoHighlight = await response.json();
}

const makeHighlight = () => {
    const highlightVideoLink = document.querySelector('.highlight__video-link');
    const key = bodyVideoHighlight.results[1].key;
    highlightVideoLink.href = "https://www.youtube.com/watch?v=" + key;

    const highlightVideo = document.querySelector('.highlight__video');
    highlightVideo.style.backgroundImage = `url(${bodyHighlight.backdrop_path})`;
    highlightVideo.style.backgroundSize = 'cover';

    const highlightTitle = document.querySelector('.highlight__title');
    highlightTitle.textContent = bodyHighlight.title;

    const highlightRating = document.querySelector('.highlight__rating');
    highlightRating.textContent = bodyHighlight.vote_average;

    const highlightGenres = document.querySelector('.highlight__genres');
    const genres = bodyHighlight.genres;

    let textGenre = '';
    for (let genre of genres) {
        textGenre += genre.name + ', ';
    }
    highlightGenres.textContent = textGenre;

    const highlightLaunch = document.querySelector('.highlight__launch');
    const highlightDate = bodyHighlight.release_date;
    const arrayDate = highlightDate.split('-');
    highlightLaunch.textContent = arrayDate.reverse().join('-');

    const highlightDescription = document.querySelector('.highlight__description');
    highlightDescription.textContent = bodyHighlight.overview;
}

const initHighlight = async () => {
    await getHighlight();
    await getVideoHighlight();
    makeHighlight();
}

initHighlight();