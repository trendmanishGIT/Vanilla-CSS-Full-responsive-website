// currect year

const year1 = document.querySelector(".year")
const currentYear = new Date().getFullYear();
year1.textContent = currentYear


// make mobile nav work

const btnNavElement = document.querySelector(".btn-mobile-nav");
const headerElement = document.querySelector(".header");
btnNavElement.addEventListener('click',function() {
    headerElement.classList.toggle('nav-open')
})


// smooth scrolling


const alllinks = document.querySelectorAll('a:link')

alllinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = link.getAttribute('href')
        console.log(href)

        // scroll back to top
    
        if (href=== "#") window.scrollTo({
            top:0,
            behavior:"smooth"
        });

        if (href!== "#" && href.startsWith('#')) {
            const sectionElement = document.querySelector(href);
            sectionElement.scrollIntoView({behavior: "smooth"});
        }

        // close mobile nav

        if (link.classList.contains('main-nav-link'))
            headerElement.classList.toggle("nav-open")
    });
});

// 
