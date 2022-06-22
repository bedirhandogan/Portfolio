const username = 'bedirhandogan';
const see = document.querySelector('.see');
see.setAttribute('href', `https://github.com/${username}?tab=repositories`);

fetch(`https://api.github.com/users/${username}/repos`)
.then(response => response.json())
.then(response => {
    const projects = document.querySelector('.projects > .list');

    for (let i = 0; i < response.length; i++) {
        if (i < 3) {
            projects.innerHTML += `
            <div class="project">
               <h3 class="name"> 
                   <img src="src/img/repo.svg">
                   <span class="data"> 
                        <a href="${response[i].html_url}" target="_blank">${(20 < response[i].name.length) ? `${response[i].name.slice(0, 20)}...` : response[i].name }</a>
                   </span>
               </h3>
               <p class="about">${response[i].description}</p>
             <div class="status">
                <div class="count">
                    <img src="src/img/star.svg">
                    <span class="c-name"> Star </span>
                    <span class="c-count">${response[i].stargazers_count}</span>
                </div>
                <div class="count">
                    <img src="src/img/watch.svg">
                    <span class="c-name"> Watch </span>
                    <span class="c-count">${response[i].watchers_count}</span>
                </div>
                <div class="count">
                    <img src="src/img/forks.svg">
                    <span class="c-name"> Forks </span>
                    <span class="c-count">${response[i].forks_count}</span>
                </div>
             </div>
            </div>`;
        }
    }
});