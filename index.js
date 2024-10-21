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

// window.addEventListener('scroll', function(){
//  var header = document.getElementById('navbar-head');
//  header.classList.toggle("sticky", window.scrollY>80);
// })

window.addEventListener('scroll', function(){
    var header = document.getElementById('navbar-head');
    var scrollPosition = window.scrollY;

    if(scrollPosition > 30) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});
