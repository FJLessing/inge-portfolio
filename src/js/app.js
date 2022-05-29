import LocomotiveScroll from 'locomotive-scroll'
require('bootstrap');
import {PageFlip} from 'page-flip';

document.addEventListener('DOMContentLoaded', function() {

    const pageFlip = new PageFlip(document.getElementById('cookbook'), {
        width: 780,
        height: 1164,
        showCover: true,
        size: 'stretch'
    });

    pageFlip.loadFromHTML(document.querySelectorAll('.cookbook-page'));

    setTimeout(() => {
        const scroll = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
            smooth: true
        });

        let navLinks = document.querySelectorAll('.nav-link');

        navLinks.forEach(navLink => {
            navLink.addEventListener('click', function(e) {
                e.preventDefault();
                navLinks.forEach(navLink => {
                    navLink.classList.remove('active');
                });
                this.classList.add('active');
                let target = this.getAttribute('href');

                if (target === '#portfolio-section') {
                    target = "#mononoke";
                    console.log("Scrolling to", target);
                }
                scroll.scrollTo(target);
            });
        });
    }, 500);


    setTimeout(() => {
        pageFlip.update();
    } , 2000);
});
