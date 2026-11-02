const navLinks = Array.from(document.querySelectorAll('.navbar .nav-link'));
const navCollapse = document.getElementById('mainNavigation');
const navToggler = document.querySelector('.navbar-toggler');
const navMenuLayout = navCollapse.querySelector('.nav-menu-layout');
const navMenuPhotos = Array.from(navCollapse.querySelectorAll('.nav-menu-photo'));
const homePage = /(?:^|\/)index\.html$/.test(window.location.pathname)
    || window.location.pathname.endsWith('/');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const menuImageSets = {
    home: [
        { src: 'assets/img/k-trucks/menu-truck-left.png', alt: 'Customized Japanese kei truck' },
        { src: 'assets/img/k-trucks/menu-truck-right.png', alt: 'Red Japanese kei truck at sunset' }
    ],
    trucks: [
        { src: 'assets/img/k-trucks/hero-showcase-01.jpg', alt: 'Japanese kei truck ready for work' },
        { src: 'assets/img/k-trucks/hero-showcase-03.jpg', alt: 'Red Japanese kei truck outdoors' }
    ],
    contact: [
        { src: 'assets/img/k-trucks/hero-showcase-05.jpg', alt: 'Japanese kei truck prepared for export' },
        { src: 'assets/img/k-trucks/hero-showcase-06.jpg', alt: 'Japanese kei truck in the countryside' }
    ],
    about: [
        { src: 'assets/img/k-trucks/hero-showcase-02.jpg', alt: 'Japanese kei truck by the water' },
        { src: 'assets/img/k-trucks/hero-showcase-07.jpg', alt: 'Japanese kei truck ready for a new journey' }
    ]
};
const preloadedMenuImages = new Map();
const photoTransitionTimers = new WeakMap();
let closeTimer = null;
let closeAnimationHandler = null;

navMenuPhotos.forEach((photo) => {
    photo.dataset.navCurrentSrc = photo.getAttribute('src');
    photo.dataset.navTargetSrc = photo.getAttribute('src');
});

function getMenuImageSet(link) {
    const href = link.getAttribute('href');

    if (href.endsWith('#home')) {
        return menuImageSets.home;
    }
    if (href.endsWith('#trucks')) {
        return menuImageSets.trucks;
    }
    if (href.endsWith('#contact')) {
        return menuImageSets.contact;
    }
    if (href.endsWith('about.html')) {
        return menuImageSets.about;
    }

    return null;
}

function preloadMenuImages() {
    Object.values(menuImageSets).forEach((imageSet) => {
        imageSet.forEach(({ src }) => {
            if (!preloadedMenuImages.has(src)) {
                const image = new Image();
                image.src = src;
                preloadedMenuImages.set(src, image);
            }
        });
    });
}

function transitionMenuPhoto(photo, image) {
    if (photo.dataset.navTargetSrc === image.src) {
        return;
    }

    const previousTimer = photoTransitionTimers.get(photo);
    if (previousTimer) {
        window.clearTimeout(previousTimer);
    }

    photo.dataset.navTargetSrc = image.src;

    if (photo.dataset.navCurrentSrc === image.src) {
        photo.classList.remove('is-changing');
        return;
    }

    const updatePhoto = () => {
        if (photo.dataset.navTargetSrc !== image.src) {
            return;
        }

        photo.src = image.src;
        photo.alt = image.alt;
        photo.dataset.navCurrentSrc = image.src;

        const revealPhoto = () => {
            if (photo.dataset.navTargetSrc === image.src) {
                photo.classList.remove('is-changing');
            }
        };

        photo.addEventListener('load', revealPhoto, { once: true });
        photo.addEventListener('error', revealPhoto, { once: true });
        if (photo.complete && photo.naturalWidth > 0) {
            window.requestAnimationFrame(revealPhoto);
        }
    };

    if (prefersReducedMotion) {
        updatePhoto();
        return;
    }

    photo.classList.add('is-changing');
    photoTransitionTimers.set(photo, window.setTimeout(updatePhoto, 190));
}

function selectMenuLink(link) {
    const imageSet = getMenuImageSet(link);

    navLinks.forEach((navLink) => {
        const isSelected = navLink === link;
        navLink.classList.toggle('is-menu-highlighted', isSelected);
        navLink.classList.toggle('is-menu-muted', !isSelected);
    });

    if (imageSet) {
        navMenuPhotos.forEach((photo, index) => {
            if (imageSet[index]) {
                transitionMenuPhoto(photo, imageSet[index]);
            }
        });
    }
}

navLinks.forEach((link) => {
    link.addEventListener('pointerenter', (event) => {
        if (event.pointerType !== 'touch') {
            selectMenuLink(link);
        }
    });
    link.addEventListener('focus', () => selectMenuLink(link));
});

if (navMenuLayout && navMenuPhotos.length === 2) {
    navMenuLayout.addEventListener('pointermove', (event) => {
        if (event.pointerType === 'touch' || prefersReducedMotion) {
            return;
        }

        const bounds = navMenuLayout.getBoundingClientRect();
        const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
        const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;

        navMenuPhotos.forEach((photo, index) => {
            const direction = index === 0 ? -1 : 1;
            photo.style.setProperty('--nav-parallax-x', `${(horizontal * 12 * direction).toFixed(2)}px`);
            photo.style.setProperty('--nav-parallax-y', `${(vertical * 8 * direction).toFixed(2)}px`);
        });
    });

    navMenuLayout.addEventListener('pointerleave', () => {
        navMenuPhotos.forEach((photo) => {
            photo.style.setProperty('--nav-parallax-x', '0px');
            photo.style.setProperty('--nav-parallax-y', '0px');
        });
    });
}

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
    navLinks.forEach((link) => {
        link.classList.remove('is-menu-highlighted', 'is-menu-muted');
    });
    navMenuPhotos.forEach((photo) => {
        photo.style.setProperty('--nav-parallax-x', '0px');
        photo.style.setProperty('--nav-parallax-y', '0px');
    });
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
    preloadMenuImages();

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

    if (prefersReducedMotion) {
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
