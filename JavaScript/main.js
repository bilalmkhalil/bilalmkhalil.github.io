
// let sections = document.querySelectorAll("section");

// let options = {
// 	root: null,
// 	treshold: 1,
// 	rootMargin: "-1px 0px -1px 0px"
// }

// const observer = new IntersectionObserver((entries, observer) => {
// 	entries.forEach(entry => {
// 		if(entry.isIntersecting) {
// 			console.log(entry);
// 		}
// 	});
// }, options);

// sections.forEach(section => {
// 	observer.observe(section);
// });

// let perc = [80, 80, 75, 75, 70, 70];

// let progressBars = document.querySelectorAll("#progress");
// let perc_indicator = document.querySelectorAll("#perc_indicator");

// for (let i = 0; i < progressBars.length; i++) {
// 	progressBars[i].value = perc[i];
// 	perc_indicator[i].innerHTML = perc[i] + "%";
// }


// progressBars.forEach((progress) => {
// 	progress.value;
// })

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
