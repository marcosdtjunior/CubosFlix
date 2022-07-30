const input = document.querySelector('.input');

input.addEventListener('keydown', async event => {
    if (event.key === 'Enter') {
        if (input.value !== '') {
            const searchedMovie = input.value;
            const searchResponse = await fetch('https://tmdb-proxy.cubos-academy.workers.dev/3/search/movie?language=pt-BR&include_adult=false&query=' + searchedMovie);
            const searchBody = await searchResponse.json();
            searchedMovies = searchBody.results;
            getMoviesLenght();
            makeCardMovies(0, 5);
            input.value = '';
        } else {
            init();
        }
    }
});