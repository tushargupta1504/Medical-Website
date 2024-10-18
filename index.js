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
window.addEventListener('scroll', function(){
 var header = document.querySelector('.navbar');
 header.classList.toggle("sticky", window.scrollY>0);
})


document.addEventListener('DOMContentLoaded',() => {
    const darkToggle = document.getElementById('dark-change');

    if(localStorage.getItem('darkMode') === 'enabled'){
        document.body.classList.add('dark-mode');
        darkToggle.classList.add('active');
    }

    darkToggle.addEventListener('click' , ()=>
    {
        document.body.classList.toggle('dark-mode');
        darkToggle.classList.toggle('active');

        if (document.body.classList.contains('dark-mode')){
            localStorage.setItem('darkMode','enabled');
        }
        else{
            localStorage.setItem('darkMode','disabled');
        }
    });
});