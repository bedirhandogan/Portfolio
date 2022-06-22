const button = document.getElementById('skip-card');
const card = document.querySelector('.human-card');
const main = document.querySelector('.main');

button.addEventListener('click', function() { 
    card.style.display = 'none';
    main.style.display = 'flex';
});