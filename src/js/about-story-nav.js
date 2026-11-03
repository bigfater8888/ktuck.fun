const storyNav = document.querySelector('.about-mobile-story-nav');

if (storyNav) {
    const toggle = storyNav.querySelector('.about-mobile-story-toggle');
    const options = storyNav.querySelector('.about-mobile-story-options');
    const currentLabel = storyNav.querySelector('[data-about-story-current]');
    const storyLinks = Array.from(storyNav.querySelectorAll('[data-about-story-link]'));
    const storySections = storyLinks
        .map((link) => document.querySelector(link.getAttribute('href')))
        .filter(Boolean);

    const setExpanded = (expanded) => {
        storyNav.classList.toggle('is-open', expanded);
        toggle.setAttribute('aria-expanded', String(expanded));
        toggle.setAttribute('aria-label', expanded ? 'Close story navigation' : 'Open story navigation');
        options.setAttribute('aria-hidden', String(!expanded));
        options.inert = !expanded;
    };

    const setCurrentStory = (section) => {
        const activeLink = storyLinks.find((link) => link.getAttribute('href') === `#${section.id}`);

        if (!activeLink) {
            return;
        }

        currentLabel.textContent = activeLink.dataset.storyLabel;
        storyLinks.forEach((link) => {
            if (link === activeLink) {
                link.setAttribute('aria-current', 'location');
            } else {
                link.removeAttribute('aria-current');
            }
        });
    };

    toggle.addEventListener('click', () => {
        setExpanded(toggle.getAttribute('aria-expanded') !== 'true');
    });

    storyLinks.forEach((link) => {
        link.addEventListener('click', () => setExpanded(false));
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
            setExpanded(false);
            toggle.focus();
        }
    });

    document.addEventListener('click', (event) => {
        if (!storyNav.contains(event.target) && toggle.getAttribute('aria-expanded') === 'true') {
            setExpanded(false);
        }
    });

    setExpanded(false);

    if ('IntersectionObserver' in window && storySections.length > 0) {
        const storyObserver = new IntersectionObserver((entries) => {
            const activeEntry = entries
                .filter((entry) => entry.isIntersecting)
                .sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top))[0];

            if (activeEntry) {
                setCurrentStory(activeEntry.target);
            }
        }, {
            rootMargin: '-38% 0px -52% 0px',
            threshold: 0
        });

        storySections.forEach((section) => storyObserver.observe(section));
    }
}
