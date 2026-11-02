const root = document.documentElement;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (!reduceMotion.matches) {
    root.classList.add('page-transitions-enabled');

    const showPage = () => {
        window.requestAnimationFrame(() => {
            root.classList.add('page-transitions-ready');
        });
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', showPage, { once: true });
    } else {
        showPage();
    }

    document.addEventListener('click', (event) => {
        if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
            return;
        }

        const link = event.target.closest('a[href]');
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
            return;
        }

        event.preventDefault();
        root.classList.add('page-transitions-leaving');
        window.setTimeout(() => {
            window.location.assign(destination.href);
        }, 260);
    });

    window.addEventListener('pageshow', () => {
        root.classList.remove('page-transitions-leaving');
        root.classList.add('page-transitions-ready');
    });
}
