const button = document.getElementById('skip-card');
const model = document.getElementById('model-viewer');
const card = document.querySelector('.human-card');
const main = document.querySelector('.main');

let btnLoad = false;
model.addEventListener('load', function() {
    btnLoad = true;
});

button.onmouseover = function() {
    button.style.filter = `${(btnLoad) ? 'brightness(100)' : ''}`;
}

button.onmouseout = function() {
    button.style.filter = '';
}

button.addEventListener('click', function() { 
    if (btnLoad) {
        card.style.display = 'none';
        main.style.display = 'flex';
    }
});