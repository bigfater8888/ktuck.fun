const navLinks = Array.from(document.querySelectorAll('.navbar .nav-link'));
const navCollapse = document.getElementById('mainNavigation');
const navToggler = document.querySelector('.navbar-toggler');
const homePage = /(?:^|\/)index\.html$/.test(window.location.pathname)
    || window.location.pathname.endsWith('/');
let closeTimer = null;
let closeAnimationHandler = null;

function finishMenuClose() {
    if (closeTimer) {
        window.clearTimeout(closeTimer);
        closeTimer = null;
    }

    if (closeAnimationHandler) {
        navCollapse.removeEventListener('animationend', closeAnimationHandler);
        closeAnimationHandler = null;
    }

    navCollapse.classList.remove('nav-menu-visible', 'nav-menu-opening', 'nav-menu-closing');
    document.body.classList.remove('nav-menu-open');
    navToggler.focus({ preventScroll: true });
}

function openMenu() {
    if (closeTimer) {
        window.clearTimeout(closeTimer);
        closeTimer = null;
    }

    if (closeAnimationHandler) {
        navCollapse.removeEventListener('animationend', closeAnimationHandler);
        closeAnimationHandler = null;
    }

    navCollapse.classList.remove('nav-menu-closing');
    navCollapse.classList.add('nav-menu-visible', 'nav-menu-opening');
    document.body.classList.add('nav-menu-open');
    navToggler.setAttribute('aria-expanded', 'true');

    window.requestAnimationFrame(() => {
        if (!navCollapse.classList.contains('nav-menu-closing')) {
            const activeLink = navCollapse.querySelector('.nav-link.is-active') || navLinks[0];
            activeLink.focus({ preventScroll: true });
        }
    });
}

function closeMenu() {
    if (!navCollapse.classList.contains('nav-menu-visible')
        || navCollapse.classList.contains('nav-menu-closing')) {
        return;
    }

    navCollapse.classList.remove('nav-menu-opening');
    navCollapse.classList.add('nav-menu-closing');
    navToggler.setAttribute('aria-expanded', 'false');

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        finishMenuClose();
        return;
    }

    closeAnimationHandler = (event) => {
        if (event.target === navCollapse && event.animationName === 'navOverlayOut') {
            finishMenuClose();
        }
    };
    navCollapse.addEventListener('animationend', closeAnimationHandler);
    closeTimer = window.setTimeout(finishMenuClose, 500);
}

function updateActiveNavigation() {
    const currentPath = window.location.pathname.toLowerCase();
    const hash = window.location.hash || '#home';

    navLinks.forEach((link) => {
        const href = link.getAttribute('href');
        const isHomeSection = homePage && href === hash;
        const isAboutPage = !homePage && currentPath.endsWith('/about.html') && href.endsWith('about.html');
        const isActive = isHomeSection || isAboutPage;

        link.classList.toggle('is-active', isActive);
        if (isActive) {
            link.setAttribute('aria-current', 'page');
        } else {
            link.removeAttribute('aria-current');
        }
    });
}

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        const href = link.getAttribute('href');
        const hash = href.includes('#') ? href.slice(href.indexOf('#')) : '';

        if (hash && homePage) {
            history.replaceState(null, '', hash);
            updateActiveNavigation();
        } else if (href.endsWith('about.html')) {
            navLinks.forEach((navLink) => {
                navLink.classList.toggle('is-active', navLink === link);
                if (navLink === link) {
                    navLink.setAttribute('aria-current', 'page');
                } else {
                    navLink.removeAttribute('aria-current');
                }
            });
        }

        closeMenu();
    });
});

if (navCollapse && navToggler) {
    navToggler.addEventListener('click', () => {
        if (navToggler.getAttribute('aria-expanded') === 'true') {
            closeMenu();
        } else {
            openMenu();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && navCollapse.classList.contains('nav-menu-visible')) {
            closeMenu();
        }
    });
}

window.addEventListener('hashchange', updateActiveNavigation);
updateActiveNavigation();
