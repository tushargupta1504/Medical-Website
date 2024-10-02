// let lastScrollTop = 0;
// const navbar = document.querySelector('.navbar');

// window.addEventListener('scroll', function() {
//     let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//     if (scrollTop > lastScrollTop) {
//         // Scrolling down
//         navbar.style.top = '-80px'; // Adjust height accordingly
//     } else {
//         // Scrolling up
//         navbar.style.top = '0';
//     }

//     lastScrollTop = scrollTop;
// });




const navbar = document.querySelector('header');
const logo = document.querySelector('.logo');
const links = document.querySelectorAll('.navbar a');

let lastScrollTop = 0;

window.addEventListener('scroll', throttle(handleScroll, 100));

function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        logo.style.margin = '0 auto';
        logo.style.textAlign = 'center';
        links.forEach(link => link.style.display = 'none');
    } else {
        // Scrolling up
        logo.style.margin = '';
        logo.style.textAlign = '';
        links.forEach(link => link.style.display = '');
    }

    lastScrollTop = scrollTop;
}

function throttle(func, wait) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        if (!timeout) {
            timeout = setTimeout(function() {
                timeout = null;
                func.apply(context, args);
            }, wait);
        }
    };
}