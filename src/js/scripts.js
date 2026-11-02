const galleryModal = document.getElementById('truckGalleryModal');
const galleryMainImage = document.getElementById('truckGalleryMainImage');
const galleryTitle = document.getElementById('truckGalleryTitle');
const galleryThumbsContainer = document.getElementById('truckGalleryThumbs');
const vehicleDetails = document.getElementById('truckVehicleDetails');

const fallbackGalleryImages = [
    'assets/img/k-trucks/model-a-01.jpg',
    'assets/img/k-trucks/model-a-02.jpg',
    'assets/img/k-trucks/model-a-03.jpg'
];
const instagramUrl = 'https://www.instagram.com/ktruck.fun?stkn=bnZtb2RjN3dlYTl1&utm_source=qr';

let currentGalleryKey = null;
let currentGalleryIndex = 0;
let currentGalleryImages = [];

function getCardImagePaths(key) {
    const card = document.querySelector(`[data-gallery="${key}"]`);
    if (!card) return [...fallbackGalleryImages];

    const paths = Array.from(card.attributes)
        .filter((attribute) => /^data-photo-path-\d+$/.test(attribute.name))
        .sort((a, b) => {
            const aSlot = Number(a.name.replace('data-photo-path-', ''));
            const bSlot = Number(b.name.replace('data-photo-path-', ''));
            return aSlot - bSlot;
        })
        .map((attribute) => attribute.value);

    return paths.length ? paths : [...fallbackGalleryImages];
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

        const thumbImage = new Image();
        thumbImage.src = src;
        thumbImage.alt = `Truck photo ${index + 1}`;

        button.innerHTML = `<img src="${src}" alt="Truck photo ${index + 1}">`;

        button.addEventListener('click', () => updateGalleryView(index));
        galleryThumbsContainer.appendChild(button);
    });

    if (currentGalleryKey === 'model-a') {
        const instagramLink = document.createElement('a');
        instagramLink.className = 'truck-gallery-instagram-thumb';
        instagramLink.href = instagramUrl;
        instagramLink.target = '_blank';
        instagramLink.rel = 'noopener noreferrer';
        instagramLink.setAttribute('aria-label', 'View more photos and videos on Instagram');

        const instagramIcon = document.createElement('i');
        instagramIcon.className = 'bi bi-instagram';
        instagramIcon.setAttribute('aria-hidden', 'true');

        const instagramText = document.createElement('span');
        instagramText.textContent = 'More photos & videos on Instagram';

        instagramLink.append(instagramIcon, instagramText);
        galleryThumbsContainer.appendChild(instagramLink);
    }
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
        ? '1999 Suzuki Carry'
        : key === 'model-b'
            ? 'Truck Model B'
            : 'Truck Model C';
    vehicleDetails.hidden = key !== 'model-a';
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