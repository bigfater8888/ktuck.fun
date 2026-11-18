const vehicleCard = document.querySelector('.truck-a-listing');
const resultCount = document.getElementById('truckAResultCount');
const emptyState = document.getElementById('truckAEmptyState');
const makeFilter = document.querySelector('[data-truck-a-make]');
const modelFilter = document.querySelector('[data-truck-a-model]');
const priceMin = document.getElementById('truckAPriceMin');
const priceMax = document.getElementById('truckAPriceMax');
const priceMinValue = document.getElementById('truckAPriceMinValue');
const priceMaxValue = document.getElementById('truckAPriceMaxValue');
const priceTrack = document.querySelector('[data-truck-a-price-track]');
const mileageFilter = document.getElementById('truckAMileage');
const mileageValue = document.getElementById('truckAMileageValue');
const mileageTrack = mileageFilter.closest('.marketplace-range-track');
const yearMin = document.getElementById('truckAYearMin');
const yearMax = document.getElementById('truckAYearMax');
const yearMinValue = document.getElementById('truckAYearMinValue');
const yearMaxValue = document.getElementById('truckAYearMaxValue');
const yearTrack = document.querySelector('[data-truck-a-year-track]');
const mainImage = document.getElementById('truckAMainImage');
const photoButtons = Array.from(document.querySelectorAll('[data-truck-a-photo]'));
const numberFormatter = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 });
const currentYear = new Date().getFullYear();

yearMax.max = String(currentYear);
yearMax.value = String(currentYear);

function updateRangeValues(minimum, maximum, outputMin, outputMax, track, changedInput, defaultMaximum) {
    let min = Number(minimum.value);
    let max = Number(maximum.value);

    if (min > max) {
        if (changedInput === minimum) {
            max = min;
            maximum.value = String(max);
        } else {
            min = max;
            minimum.value = String(min);
        }
    }

    outputMin.textContent = min === Number(minimum.min) ? 'Any year' : String(min);
    outputMax.textContent = max === defaultMaximum ? 'Any year' : String(max);
    track.style.setProperty(
        '--range-start',
        `${((min - Number(minimum.min)) / (Number(minimum.max) - Number(minimum.min))) * 100}%`
    );
    track.style.setProperty(
        '--range-end',
        `${((max - Number(maximum.min)) / (Number(maximum.max) - Number(maximum.min))) * 100}%`
    );
}

function updatePriceRange(changedInput) {
    let min = Number(priceMin.value);
    let max = Number(priceMax.value);

    if (min > max) {
        if (changedInput === priceMin) {
            max = min;
            priceMax.value = String(max);
        } else {
            min = max;
            priceMin.value = String(min);
        }
    }

    priceMinValue.textContent = `$${numberFormatter.format(min)}`;
    priceMaxValue.textContent = max === Number(priceMax.max)
        ? `$${numberFormatter.format(max)}+`
        : `$${numberFormatter.format(max)}`;
    priceTrack.style.setProperty('--range-start', `${(min / Number(priceMin.max)) * 100}%`);
    priceTrack.style.setProperty('--range-end', `${(max / Number(priceMax.max)) * 100}%`);
    priceMin.style.zIndex = changedInput === priceMin ? '3' : '';
    priceMax.style.zIndex = changedInput === priceMax ? '3' : '';
}

function updateYearRange(changedInput) {
    updateRangeValues(yearMin, yearMax, yearMinValue, yearMaxValue, yearTrack, changedInput, currentYear);
    filterVehicles();
}

function updateMileageRange() {
    const maximum = Number(mileageFilter.max);
    const mileage = Number(mileageFilter.value);
    mileageValue.textContent = mileage === maximum
        ? `${numberFormatter.format(maximum / 1000)}K+ miles`
        : `${numberFormatter.format(mileage)} miles or less`;
    mileageTrack.style.setProperty(
        '--range-end',
        `${((mileage - Number(mileageFilter.min)) / (maximum - Number(mileageFilter.min))) * 100}%`
    );
}

function filterVehicles() {
    const matchesMake = !makeFilter.checked || vehicleCard.dataset.make === makeFilter.value;
    const matchesModel = !modelFilter.checked || vehicleCard.dataset.model === modelFilter.value;
    const price = Number(vehicleCard.dataset.price);
    const mileage = Number(vehicleCard.dataset.mileage);
    const vehicleYear = Number(vehicleCard.dataset.year);
    const matchesPrice = price >= Number(priceMin.value) && price <= Number(priceMax.value);
    const matchesMileage = mileage <= Number(mileageFilter.value);
    const matchesYear = vehicleYear >= Number(yearMin.value) && vehicleYear <= Number(yearMax.value);
    const isMatch = matchesMake && matchesModel && matchesPrice && matchesMileage && matchesYear;

    vehicleCard.hidden = !isMatch;
    emptyState.hidden = isMatch;
    resultCount.textContent = isMatch ? '1 vehicle' : '0 vehicles';
}

priceMin.addEventListener('input', () => {
    updatePriceRange(priceMin);
    filterVehicles();
});
priceMax.addEventListener('input', () => {
    updatePriceRange(priceMax);
    filterVehicles();
});
mileageFilter.addEventListener('input', () => {
    updateMileageRange();
    filterVehicles();
});
yearMin.addEventListener('input', () => updateYearRange(yearMin));
yearMax.addEventListener('input', () => updateYearRange(yearMax));
makeFilter.addEventListener('change', filterVehicles);
modelFilter.addEventListener('change', filterVehicles);

document.querySelector('[data-reset-truck-a-filters]').addEventListener('click', () => {
    makeFilter.checked = false;
    modelFilter.checked = false;
    priceMin.value = priceMin.min;
    priceMax.value = priceMax.max;
    mileageFilter.value = '70000';
    yearMin.value = yearMin.min;
    yearMax.value = String(currentYear);
    updatePriceRange();
    updateMileageRange();
    updateRangeValues(yearMin, yearMax, yearMinValue, yearMaxValue, yearTrack, null, currentYear);
    filterVehicles();
});

photoButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        mainImage.src = button.dataset.truckAPhoto;
        mainImage.alt = `1999 Suzuki Carry photo ${index + 1}`;
        photoButtons.forEach((photoButton) => {
            const isSelected = photoButton === button;
            photoButton.classList.toggle('is-active', isSelected);
            photoButton.setAttribute('aria-pressed', String(isSelected));
        });
    });
});

updatePriceRange();
updateMileageRange();
updateRangeValues(yearMin, yearMax, yearMinValue, yearMaxValue, yearTrack, null, currentYear);
filterVehicles();
