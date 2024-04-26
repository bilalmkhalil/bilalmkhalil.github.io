// making animation on scroll smooth

const nav = document.querySelector('.nav');
const homeSection = document.querySelector('#home');
const skillsSection = document.querySelector('#skills');
const projectsSection = document.querySelector('#projects');

nav.addEventListener('click', function(e){
    e.preventDefault();
    if(e.target.classList.contains('nav-link')){
        const id = e.target.getAttribute('href');
        const section = document.querySelector(id);
        const secCoords = section.getBoundingClientRect();

        window.scrollTo({
            left: secCoords.left + window.pageXOffset,
            top: secCoords.top + window.pageYOffset,
            behavior: "smooth",
        });
    }
})

// showing which menu page is active

const menu = document.querySelectorAll('.nav-link');

menu.forEach((tab) => {
    tab.addEventListener('click', () => {
        menu.forEach((otherTab) => {
            if ( tab !== otherTab) {
                otherTab.parentNode.classList.remove('active-page');
            }
        });

        tab.parentNode.classList.add('active-page');
    });
});

// making icon clickable and redirecting to social media links

const social_media_links = {
    linkedin: 'https://www.linkedin.com/in/bilal-khalil-khankhail/',
    github: 'https://github.com/bilalmkhalil',
    twitter: 'https://twitter.com/its_khankhail',
};

const social_media = document.querySelectorAll('.social_media_link');

social_media.forEach((link) => {
    link.addEventListener('click', () => {
        const social_media_class = link.classList[3];
        const social_media_name = social_media_class.split('-')[1];

        window.location.href = social_media_links[social_media_name];
    });
});

// observering section inetersection

const titles = document.querySelectorAll(".title");

const observer = new IntersectionObserver( (entries) => {
    entries.forEach((entry) => {
        for (let text of entry.target.children) {
            console.log(text)
            text.classList.toggle("show", entry.isIntersecting);
            text.classList.toggle("hide", !entry.isIntersecting);
        }
    });
  },
  {
    threshold: 1,
    rootMargin: "0px 0px -80px 0px",
  }
);

titles.forEach((title) => {
  observer.observe(title);
});


// fetching data from json api

const projects = document.querySelector('.projects');

fetch("https://raw.githubusercontent.com/bilalmkhalil/bilalmkhalil.github.io/main/Data/projects.json")
    .then(response => response.json())
    .then(data => {
        data.projects.forEach((project) => {
            console.log(project)
        })
    })
    .catch(error => console.log(error))

    
// creating project cards
    
const createCard = (data) => {
    return `
        <div class="card">
            <img class="cover" src="${data.image_url}" alt="${data.image_alt}">
            <div class="card-detail">
                <h2 class="project-title">${data.title}</h2>
                <p class="project-description">${data.description}</p>
                <div class="tags">
                    <i class="icon html fab fa-html5">
                        <span class="label">${data.html}</span>
                    </i>
                    <i class="icon css fab fa-css3-alt">
                        <span class="label">${data.css}</span>
                    </i>
                    <i class="icon javascript fab fa-js-square">
                        <span class="label">${data.javascript}</span>
                    </i>
                </div>
                <div class="buttons">
                    <button class="button" href="${data.demo_url}">Live Demo</button>
                    <button class="button" href="${data.github_url}>Source Code</button>
                </div>
            </div>
        </div>
    `;
}