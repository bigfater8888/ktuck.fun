const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
const gsap = window.gsap;
const scrollTrigger = window.ScrollTrigger;

if (!motionPreference.matches) {
    const navigation = document.getElementById('mainNavigation');
    const navigationLinks = navigation ? Array.from(navigation.querySelectorAll('.nav-link')) : [];
    const menuPhotos = navigation ? Array.from(navigation.querySelectorAll('.nav-menu-photo')) : [];
    const photoSets = {
        home: ['hero-showcase-01.jpg', 'hero-showcase-02.jpg'],
        trucks: ['hero-showcase-03.jpg', 'hero-showcase-04.jpg'],
        how: ['hero-showcase-05.jpg', 'hero-showcase-06.jpg'],
        contact: ['hero-showcase-02.jpg', 'hero-showcase-07.jpg'],
        about: ['about-kagoshima-sakurajima.jpeg', 'about-menu-kei-truck.jpg']
    };
    const photoAlts = [
        'Japanese kei truck ready for work',
        'A prepared kei truck in Japan'
    ];
    const aboutPhotoAlts = [
        'Sakurajima volcano across Kagoshima Bay at sunset',
        'White Honda kei truck at a Japanese vehicle yard'
    ];

    if (gsap) {
        document.documentElement.classList.add('cinematic-gsap');
        if (scrollTrigger) {
            gsap.registerPlugin(scrollTrigger);
        }
    }

    function getPhotoSet(link, index) {
        const href = link.getAttribute('href') || '';
        const label = link.textContent.trim().toLowerCase();

        if (href.endsWith('#home') || label === 'home') return photoSets.home;
        if (href.endsWith('#trucks') || label === 'trucks') return photoSets.trucks;
        if (href.endsWith('#contact') || label === 'contact') return photoSets.contact;
        if (href.endsWith('how-it-works.html') || label.includes('how it works')) return photoSets.how;
        if (href.endsWith('about.html') || label.includes('about')) return photoSets.about;
        return photoSets[index % Object.keys(photoSets).length];
    }

    function swapMenuPhoto(image, source, alt, direction) {
        if (!image || image.getAttribute('src') === source) {
            return;
        }

        const pending = new Image();
        pending.src = source;

        const applySwap = () => {
            if (gsap) {
                gsap.killTweensOf(image);
                gsap.to(image, {
                    autoAlpha: 0,
                    x: direction * 24,
                    scale: 0.97,
                    duration: 0.24,
                    ease: 'power2.in',
                    onComplete: () => {
                        image.src = source;
                        image.alt = alt;
                        gsap.fromTo(image, {
                            autoAlpha: 0,
                            x: -direction * 20,
                            scale: 1.025
                        }, {
                            autoAlpha: 0.94,
                            x: 0,
                            scale: 1,
                            duration: 0.62,
                            ease: 'power3.out'
                        });
                    }
                });
                return;
            }

            image.classList.add('is-changing');
            window.setTimeout(() => {
                image.src = source;
                image.alt = alt;
                image.classList.remove('is-changing');
            }, 320);
        };

        if (pending.complete) {
            if (pending.naturalWidth) {
                applySwap();
            } else {
                console.error(`Unable to load navigation image: ${source}`);
            }
        } else {
            pending.addEventListener('load', applySwap, { once: true });
            pending.addEventListener('error', () => {
                console.error(`Unable to load navigation image: ${source}`);
            }, { once: true });
        }
    }

    function showMenuPhotos(link) {
        const index = navigationLinks.indexOf(link);
        const photos = getPhotoSet(link, index);
        const href = link.getAttribute('href') || '';
        const label = link.textContent.trim().toLowerCase();
        const alts = href.endsWith('about.html') || label.includes('about')
            ? aboutPhotoAlts
            : photoAlts;
        photos.forEach((photo, photoIndex) => {
            const image = menuPhotos[photoIndex];
            swapMenuPhoto(image, `assets/img/k-trucks/${photo}`, alts[photoIndex], photoIndex ? 1 : -1);
        });
    }

    navigationLinks.forEach((link) => {
        link.addEventListener('pointerenter', () => showMenuPhotos(link));
        link.addEventListener('focus', () => showMenuPhotos(link));
    });

    if (gsap && navigation && navigationLinks.length && menuPhotos.length) {
        const menuObserver = new MutationObserver(() => {
            if (!navigation.classList.contains('nav-menu-opening')) {
                return;
            }

            const activeLink = navigation.querySelector('.nav-link.is-active') || navigationLinks[0];
            showMenuPhotos(activeLink);
            gsap.timeline()
                .fromTo(navigationLinks, {
                    autoAlpha: 0,
                    y: 30
                }, {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.62,
                    stagger: 0.065,
                    ease: 'power3.out',
                    clearProps: 'transform'
                })
                .fromTo(menuPhotos, {
                    autoAlpha: 0,
                    scale: 0.93
                }, {
                    autoAlpha: 0.94,
                    scale: 1,
                    duration: 0.78,
                    stagger: 0.12,
                    ease: 'power3.out',
                    clearProps: 'transform'
                }, 0.08);
        });

        menuObserver.observe(navigation, { attributes: true, attributeFilter: ['class'] });

        const layout = navigation.querySelector('.nav-menu-layout');
        if (layout && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
            const moveX = gsap.quickTo(layout, 'x', { duration: 0.8, ease: 'power3.out' });
            const moveY = gsap.quickTo(layout, 'y', { duration: 0.8, ease: 'power3.out' });

            layout.addEventListener('pointermove', (event) => {
                const bounds = layout.getBoundingClientRect();
                moveX(((event.clientX - bounds.left) / bounds.width - 0.5) * 10);
                moveY(((event.clientY - bounds.top) / bounds.height - 0.5) * 8);
            });
            layout.addEventListener('pointerleave', () => {
                moveX(0);
                moveY(0);
            });
        }
    }

    const hero = document.querySelector('.hero-photo');
    const orbit = hero && hero.querySelector('.hero-orbit');
    const titleLines = hero && Array.from(hero.querySelectorAll('.hero-tagline span'));
    const heroButton = hero && hero.querySelector('.hero-button');

    if (gsap && orbit) {
        const breakpoints = gsap.matchMedia();
        breakpoints.add({
            desktop: '(min-width: 768px)',
            mobile: '(max-width: 767.98px)'
        }, (context) => {
            const { desktop } = context.conditions;

            gsap.to(orbit, {
                rotation: 360,
                duration: desktop ? 56 : 76,
                repeat: -1,
                ease: 'none',
                transformOrigin: '50% 50%'
            });

            if (titleLines && titleLines.length) {
                gsap.fromTo(titleLines, {
                    autoAlpha: 0,
                    yPercent: 115,
                    scale: 0.94
                }, {
                    autoAlpha: 1,
                    yPercent: 0,
                    scale: 1,
                    duration: 1.15,
                    stagger: 0.14,
                    ease: 'power4.out',
                    clearProps: 'transform'
                });
            }

            if (heroButton) {
                gsap.fromTo(heroButton, {
                    autoAlpha: 0,
                    y: 22
                }, {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    delay: 0.72,
                    clearProps: 'transform'
                });
            }

            if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
                const moveX = gsap.quickTo(orbit, 'x', { duration: 1, ease: 'power3.out' });
                const moveY = gsap.quickTo(orbit, 'y', { duration: 1, ease: 'power3.out' });

                hero.addEventListener('pointermove', (event) => {
                    const bounds = hero.getBoundingClientRect();
                    moveX(((event.clientX - bounds.left) / bounds.width - 0.5) * 14);
                    moveY(((event.clientY - bounds.top) / bounds.height - 0.5) * 10);
                });
                hero.addEventListener('pointerleave', () => {
                    moveX(0);
                    moveY(0);
                });
            }
        });

        if (scrollTrigger) {
            gsap.to(orbit, {
                yPercent: 9,
                ease: 'none',
                scrollTrigger: {
                    trigger: hero,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 0.8
                }
            });

            gsap.utils.toArray('.truck-model-row').forEach((row) => {
                gsap.fromTo(row, {
                    autoAlpha: 0,
                    y: 38
                }, {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.85,
                    ease: 'power3.out',
                    clearProps: 'transform',
                    scrollTrigger: {
                        trigger: row,
                        start: 'top 88%',
                        once: true
                    }
                });
            });
        }
    }
}
