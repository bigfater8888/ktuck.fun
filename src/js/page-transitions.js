const root = document.documentElement;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (!reduceMotion.matches) {
    const gsap = window.gsap;
    const overlay = document.createElement('div');
    const label = document.createElement('span');

    overlay.className = 'page-transition-overlay';
    overlay.setAttribute('aria-hidden', 'true');
    overlay.style.pointerEvents = 'auto';
    label.textContent = 'K-Trucks · Japan';
    overlay.appendChild(label);
    document.body.appendChild(overlay);

    if (gsap) {
        root.classList.add('cinematic-gsap');
        gsap.set(overlay, { yPercent: 0 });
        gsap.fromTo(label, {
            autoAlpha: 0,
            scale: 0.92
        }, {
            autoAlpha: 1,
            scale: 1,
            duration: 0.5,
            ease: 'power2.out'
        });
        gsap.to(overlay, {
            yPercent: -100,
            duration: 0.95,
            ease: 'power4.inOut',
            onComplete: () => {
                overlay.style.pointerEvents = 'none';
                gsap.to(label, { autoAlpha: 0, scale: 0.96, duration: 0.2 });
            }
        });
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
            gsap.killTweensOf(overlay);
            gsap.killTweensOf(label);
            gsap.to(label, {
                autoAlpha: direction === 'cover' ? 1 : 0,
                scale: direction === 'cover' ? 1 : 0.96,
                duration: direction === 'cover' ? 0.42 : 0.2,
                ease: 'power2.out'
            });
            gsap.to(overlay, {
                yPercent: direction === 'cover' ? 0 : -100,
                duration: direction === 'cover' ? 0.78 : 0.8,
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
