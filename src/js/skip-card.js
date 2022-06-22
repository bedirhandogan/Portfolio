const button = document.getElementById('skip-card');
const model = document.getElementById('model-viewer');
const card = document.querySelector('.human-card');
const main = document.querySelector('.main');

button.addEventListener('click', function() { 
    card.style.display = 'none';
    main.style.display = 'flex';
});