window.addEventListener('scroll', function() {
        var header = document.querySelector('nav');
        header.classList.toggle('sticky', window.scrollY > 0);
    });

    function toggleMenu(){
        var menuToggle = document.querySelector('.toggle');
        var menu = document.querySelector('.menu');
        menuToggle.classList.toggle('activate');
        menu.classList.toggle('activate');
    }