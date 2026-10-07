const truckGalleryImages = {
    'model-a': [
        'assets/img/k-trucks/model-a-01.jpg',
        'assets/img/k-trucks/model-a-02.jpg',
        'assets/img/k-trucks/model-a-03.jpg'
    ]
};

const galleryModal = document.getElementById('truckGalleryModal');
const galleryMainImage = document.getElementById('truckGalleryMainImage');
const galleryTitle = document.getElementById('truckGalleryTitle');
const galleryThumbs = Array.from(document.querySelectorAll('.truck-gallery-thumb'));

let currentGalleryKey = null;
let currentGalleryIndex = 0;

function updateGalleryView(index) {
    if (!currentGalleryKey || !galleryModal) return;

    const images = truckGalleryImages[currentGalleryKey] || [];
    if (!images.length) return;

    currentGalleryIndex = (index + images.length) % images.length;
    galleryMainImage.src = images[currentGalleryIndex];
    galleryMainImage.alt = `${galleryTitle.textContent} photo ${currentGalleryIndex + 1}`;

    galleryThumbs.forEach((thumb, thumbIndex) => {
        const isActive = thumbIndex === currentGalleryIndex;
        thumb.classList.toggle('is-active', isActive);
    });
}

function openGallery(key) {
    if (!truckGalleryImages[key]) return;

    currentGalleryKey = key;
    galleryTitle.textContent = key === 'model-a' ? 'Truck Model A' : 'Truck Gallery';
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

galleryThumbs.forEach((thumb) => {
    thumb.addEventListener('click', () => {
        updateGalleryView(Number(thumb.dataset.index));
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