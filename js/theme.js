const bodyHTML = document.querySelector('body');
const themeButton = document.querySelector('.btn-theme');
let theme = localStorage.getItem('themeColor');

function makeLightTheme() {
    bodyHTML.style.setProperty('--background-color', '#FFF');
    bodyHTML.style.setProperty('--input-border-color', '#979797');
    bodyHTML.style.setProperty('--color', '#000');
    bodyHTML.style.setProperty('--shadow-color', '0px 4px 8px rgba(0, 0, 0, 0.15)');
    bodyHTML.style.setProperty('--highlight-background', '#FFF');
    bodyHTML.style.setProperty('--highlight-color', 'rgba(0, 0, 0, 0.7)');
    bodyHTML.style.setProperty('--highlight-description', '#000');
    themeButton.src = './assets/light-mode.svg';
    previousButton.src = './assets/seta-esquerda-preta.svg';
    nextButton.src = './assets/seta-direita-preta.svg';
}

function makeDarkTheme() {
    bodyHTML.style.setProperty('--background-color', '#242424');
    bodyHTML.style.setProperty('--input-border-color', '#FFF');
    bodyHTML.style.setProperty('--color', '#FFF');
    bodyHTML.style.setProperty('--shadow-color', '0px 4px 8px rgba(255, 255, 255, 0.15)');
    bodyHTML.style.setProperty('--highlight-background', '#4545454');
    bodyHTML.style.setProperty('--highlight-color', 'rgba(255, 255, 255, 0.7)');
    bodyHTML.style.setProperty('--highlight-description', '#FFF');
    themeButton.src = './assets/dark-mode.svg';
    previousButton.src = './assets/seta-esquerda-branca.svg';
    nextButton.src = './assets/seta-direita-branca.svg';
}


function initTheme() {
    if (!theme) {
        localStorage.setItem('themeColor', 'light');
        theme = localStorage.getItem('themeColor');
    } else if (theme === 'light') {
        makeLightTheme();
    } else {
        makeDarkTheme();
    }
}

themeButton.addEventListener('click', () => {
    localStorage.setItem('themeColor', theme === 'light' ? 'dark' : 'light');
    theme = localStorage.getItem('themeColor');
    initTheme();
});

initTheme();