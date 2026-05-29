// Mobile Menu
const mobileMenu = document.querySelector('.mobile-menu');

if (mobileMenu) {

    mobileMenu.addEventListener('click', function() {
        document.querySelector('nav ul').classList.toggle('show');
    });
}

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function(e) {

        e.preventDefault();

        const targetId = this.getAttribute('href');

        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);

        if (targetElement) {

            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });

            document.querySelector('nav ul').classList.remove('show');
        }
    });
});

// Active Menu

window.addEventListener('scroll', function() {

    let current = '';

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
            pageYOffset >= sectionTop - 100 &&
            pageYOffset < sectionTop + sectionHeight
        ) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {

        link.classList.remove('active');

        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
