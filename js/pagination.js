const previousButton = document.querySelector('.btn-prev');
const nextButton = document.querySelector('.btn-next');

let start = 0;
let end = 5;

previousButton.addEventListener('click', () => {
    start -= 5;
    end -= 5;

    if (start < 0) {
        start = (nPages - 1) * 5;
        end = nPages * 5;
    }

    makeCardMovies(start, end);
});

nextButton.addEventListener('click', () => {
    start += 5;
    end += 5;

    if (start >= moviesLenght) {
        start = 0;
        end = 5;
    }

    makeCardMovies(start, end);
});