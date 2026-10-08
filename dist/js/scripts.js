/*!
* Start Bootstrap - Landing Page v6.0.6 (https://startbootstrap.com/theme/landing-page)
* Copyright 2013-2026 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/LICENSE)
*/
const galleryModal = document.getElementById('truckGalleryModal');
const galleryMainImage = document.getElementById('truckGalleryMainImage');
const galleryTitle = document.getElementById('truckGalleryTitle');
const galleryThumbsContainer = document.getElementById('truckGalleryThumbs');

let currentGalleryKey = null;
let currentGalleryIndex = 0;
let currentGalleryImages = [];

function getCardImagePaths(key) {
    const card = document.querySelector(`[data-gallery="${key}"]`);
    if (!card) return [];

    return Array.from({ length: 3 }, (_, index) => {
        const path = card.dataset[`photoPath${index + 1}`];
        return path || null;
    }).filter(Boolean);
}

function checkImageExists(src) {
    return new Promise((resolve) => {
        const image = new Image();
        image.onload = () => resolve(src);
        image.onerror = () => resolve(null);
        image.src = src;
    });
}

function renderGalleryThumbs(images) {
    galleryThumbsContainer.innerHTML = '';

    images.forEach((src, index) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'truck-gallery-thumb';
        button.dataset.index = index;
        button.innerHTML = `<img src="${src}" alt="Truck photo ${index + 1}">`;
        button.addEventListener('click', () => updateGalleryView(index));
        galleryThumbsContainer.appendChild(button);
    });
}

function updateGalleryView(index) {
    if (!currentGalleryKey || !galleryModal || !currentGalleryImages.length) return;

    currentGalleryIndex = (index + currentGalleryImages.length) % currentGalleryImages.length;
    galleryMainImage.src = currentGalleryImages[currentGalleryIndex];
    galleryMainImage.alt = `${galleryTitle.textContent} photo ${currentGalleryIndex + 1}`;

    Array.from(galleryThumbsContainer.children).forEach((thumb, thumbIndex) => {
        thumb.classList.toggle('is-active', thumbIndex === currentGalleryIndex);
    });
}

async function openGallery(key) {
    const paths = getCardImagePaths(key);
    const images = await Promise.all(paths.map((path) => checkImageExists(path)));
    currentGalleryImages = images.filter(Boolean);

    if (!currentGalleryImages.length) return;

    currentGalleryKey = key;
    galleryTitle.textContent = key === 'model-a'
        ? 'Truck Model A'
        : key === 'model-b'
            ? 'Truck Model B'
            : 'Truck Model C';
    renderGalleryThumbs(currentGalleryImages);
    galleryModal.classList.add('is-visible');
    galleryModal.setAttribute('aria-hidden', 'false');
    updateGalleryView(0);
}

function closeGallery() {
    if (!galleryModal) return;

    galleryModal.classList.remove('is-visible');
    galleryModal.setAttribute('aria-hidden', 'true');
}

document.querySelectorAll('[data-gallery-trigger]').forEach((trigger) => {
    trigger.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        openGallery(trigger.dataset.galleryTrigger);
    });
});

document.querySelectorAll('[data-gallery]').forEach((card) => {
    card.addEventListener('click', (event) => {
        const clickedButton = event.target.closest('.btn');
        if (clickedButton) return;
        openGallery(card.dataset.gallery);
    });
});

document.querySelectorAll('[data-close-gallery]').forEach((closeTarget) => {
    closeTarget.addEventListener('click', closeGallery);
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && galleryModal && galleryModal.classList.contains('is-visible')) {
        closeGallery();
    }

    if (!currentGalleryKey || !galleryModal || !galleryModal.classList.contains('is-visible')) return;

    if (event.key === 'ArrowRight') {
        updateGalleryView(currentGalleryIndex + 1);
    }

    if (event.key === 'ArrowLeft') {
        updateGalleryView(currentGalleryIndex - 1);
    }
});