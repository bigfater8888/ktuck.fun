const root = document.documentElement;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (!reduceMotion.matches) {
    const gsap = window.gsap;
    const overlay = document.createElement('div');
    const logo = document.querySelector('.brand-wordmark')?.cloneNode(true);

    overlay.className = 'page-transition-overlay';
    overlay.setAttribute('aria-hidden', 'true');
    overlay.style.pointerEvents = 'auto';
    if (logo) {
        logo.classList.add('page-transition-logo');
        overlay.appendChild(logo);
    }
    document.body.appendChild(overlay);

    if (gsap) {
        root.classList.add('cinematic-gsap');
        const logoMarks = logo ? Array.from(logo.children) : [];
        gsap.set(overlay, { yPercent: 0 });
        const entrance = gsap.timeline({
            onComplete: () => {
                overlay.style.pointerEvents = 'none';
            }
        });
        if (logoMarks.length) {
            entrance.fromTo(logoMarks, {
                autoAlpha: 0,
                yPercent: 115,
                rotateX: -32,
                transformOrigin: '50% 100%'
            }, {
                autoAlpha: 1,
                yPercent: 0,
                rotateX: 0,
                duration: 0.46,
                stagger: 0.075,
                ease: 'power3.out'
            }, 0.08);
            entrance.to(logoMarks, {
                autoAlpha: 0,
                yPercent: -55,
                duration: 0.2,
                stagger: 0.025,
                ease: 'power2.in'
            }, 1.7);
        }
        entrance.to(overlay, {
            yPercent: -100,
            duration: 0.82,
            ease: 'power4.inOut'
        }, 1.95);
    } else {
        root.classList.add('page-transitions-entering');
        overlay.addEventListener('animationend', () => {
            overlay.style.transform = 'translateY(-100%)';
            overlay.style.pointerEvents = 'none';
            root.classList.remove('page-transitions-entering');
        }, { once: true });
    }

    let transitionInProgress = false;

    function animateOverlay(direction, onComplete) {
        if (gsap) {
            if (logo) {
                const logoMarks = Array.from(logo.children);
                gsap.killTweensOf(overlay);
                gsap.killTweensOf(logoMarks);

                if (direction === 'cover') {
                    const cover = gsap.timeline({ onComplete });
                    cover.to(overlay, {
                        yPercent: 0,
                        duration: 0.68,
                        ease: 'power4.inOut'
                    }, 0);
                    cover.fromTo(logoMarks, {
                        autoAlpha: 0,
                        yPercent: 115,
                        rotateX: -32
                    }, {
                        autoAlpha: 1,
                        yPercent: 0,
                        rotateX: 0,
                        duration: 0.44,
                        stagger: 0.07,
                        ease: 'power3.out'
                    }, 0.22);
                    cover.to({}, { duration: 0.55 });
                } else {
                    const reveal = gsap.timeline({ onComplete });
                    reveal.to(logoMarks, {
                        autoAlpha: 0,
                        yPercent: -55,
                        duration: 0.22,
                        stagger: 0.035,
                        ease: 'power2.in'
                    }, 0);
                    reveal.to(overlay, {
                        yPercent: -100,
                        duration: 0.8,
                        ease: 'power4.inOut'
                    }, 0);
                }
                return;
            }

            gsap.to(overlay, {
                yPercent: direction === 'cover' ? 0 : -100,
                duration: direction === 'cover' ? 0.68 : 0.8,
                ease: 'power4.inOut',
                onComplete
            });
            return;
        }

        const entering = direction === 'reveal';
        overlay.style.transform = entering ? 'translateY(0)' : 'translateY(-100%)';
        root.classList.remove(entering ? 'page-transitions-leaving' : 'page-transitions-entering');
        root.classList.add(entering ? 'page-transitions-entering' : 'page-transitions-leaving');
        overlay.addEventListener('animationend', () => {
            overlay.style.transform = entering ? 'translateY(-100%)' : 'translateY(0)';
            root.classList.remove(entering ? 'page-transitions-entering' : 'page-transitions-leaving');
            onComplete();
        }, { once: true });
    }

    function runNavigation(destination, target) {
        if (transitionInProgress) {
            return;
        }

        transitionInProgress = true;
        overlay.style.pointerEvents = 'auto';

        animateOverlay('cover', () => {
            if (!target) {
                window.location.assign(destination.href);
                return;
            }

            if (destination.hash !== window.location.hash) {
                window.history.pushState(null, '', destination.href);
            }
            const previousScrollBehavior = root.style.scrollBehavior;
            root.style.scrollBehavior = 'auto';
            target.scrollIntoView({ behavior: 'auto', block: 'start' });
            root.style.scrollBehavior = previousScrollBehavior;
            animateOverlay('reveal', () => {
                overlay.style.pointerEvents = 'none';
                transitionInProgress = false;
            });
        });
    }

    document.addEventListener('click', (event) => {
        if (event.defaultPrevented || event.button !== 0
            || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
            return;
        }

        const link = event.target instanceof Element ? event.target.closest('a[href]') : null;
        if (!link || link.hasAttribute('download') || (link.target && link.target !== '_self')) {
            return;
        }

        const destination = new URL(link.href, window.location.href);
        if (destination.origin !== window.location.origin) {
            return;
        }

        const isSameDocument = destination.pathname === window.location.pathname
            && destination.search === window.location.search;

        if (isSameDocument && destination.hash) {
            const target = document.getElementById(decodeURIComponent(destination.hash.slice(1)));
            if (!target) {
                return;
            }

            event.preventDefault();
            runNavigation(destination, target);
            return;
        }

        if (!isSameDocument) {
            event.preventDefault();
            runNavigation(destination, null);
        }
    });

    window.addEventListener('pageshow', (event) => {
        if (event.persisted) {
            overlay.style.pointerEvents = 'none';
            transitionInProgress = false;
            animateOverlay('reveal', () => {});
        }
    });
}
