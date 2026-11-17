const keiTruckModels = [
    {
        make: 'Kurogane',
        model: 'Baby',
        yearMin: 1959,
        yearMax: 1962,
        image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4b/1961_Kurogane_Baby_truck.jpg/960px-1961_Kurogane_Baby_truck.jpg',
        author: '0man',
        authorUrl: 'https://commons.wikimedia.org/wiki/User:0man',
        license: 'CC BY-SA 4.0',
        licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
        source: 'https://commons.wikimedia.org/wiki/File:1961_Kurogane_Baby_truck.jpg',
        note: 'Historic three-wheeled kei-class light truck, produced from 1959 to 1962.'
    },
    {
        make: 'Suzuki',
        model: 'Carry',
        image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/75/Suzuki_Carry_005.JPG/960px-Suzuki_Carry_005.JPG',
        author: 'Tennen-Gas',
        authorUrl: 'https://commons.wikimedia.org/wiki/User:%E5%A4%A9%E7%84%B6%E3%82%AC%E3%82%B9',
        license: 'CC BY-SA 3.0',
        licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
        source: 'https://commons.wikimedia.org/wiki/File:Suzuki_Carry_005.JPG',
        note: 'Representative Carry image; details vary across generations.'
    },
    {
        make: 'Suzuki',
        model: 'Carry 1995 (10th generation)',
        yearMin: 1995,
        yearMax: 1995,
        image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c2/1995_Suzuki_Carry_0.66_4x4_JDM_%2852907804720%29.jpg/960px-1995_Suzuki_Carry_0.66_4x4_JDM_%2852907804720%29.jpg',
        author: 'Rutger van der Maar',
        authorUrl: 'https://www.flickr.com/people/83468718@N06',
        license: 'CC BY 2.0',
        licenseUrl: 'https://creativecommons.org/licenses/by/2.0/',
        source: 'https://commons.wikimedia.org/wiki/File:1995_Suzuki_Carry_0.66_4x4_JDM_(52907804720).jpg',
        note: 'Photo depicts a 1995 Suzuki Carry 0.66 4x4.'
    },
    {
        make: 'Suzuki',
        model: 'Carry 2001 (DA52T generation)',
        yearMin: 2001,
        yearMax: 2001,
        image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/75/Suzuki_Carry_005.JPG/960px-Suzuki_Carry_005.JPG',
        author: 'Tennen-Gas',
        authorUrl: 'https://commons.wikimedia.org/wiki/User:%E5%A4%A9%E7%84%B6%E3%82%AC%E3%82%B9',
        license: 'CC BY-SA 3.0',
        licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
        source: 'https://commons.wikimedia.org/wiki/File:Suzuki_Carry_005.JPG',
        note: 'Photo depicts the DA52T generation, which was sold from 1999 to 2002, including 2001.'
    },
    {
        make: 'Daihatsu',
        model: 'Hijet Truck',
        image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c5/Daihatsu_Hijet_Truck_%282827202436%29.jpg/960px-Daihatsu_Hijet_Truck_%282827202436%29.jpg',
        author: 'dave_7',
        authorUrl: 'https://www.flickr.com/people/21612624@N00',
        license: 'CC BY-SA 2.0',
        licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
        source: 'https://commons.wikimedia.org/wiki/File:Daihatsu_Hijet_Truck_(2827202436).jpg',
        note: 'Representative Hijet Truck image; details vary across generations.'
    },
    {
        make: 'Daihatsu',
        model: 'Hijet Truck 1995 (S110P)',
        yearMin: 1995,
        yearMax: 1995,
        image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0e/Daihatsu_Hijet_Truck_S110P_0421.JPG/960px-Daihatsu_Hijet_Truck_S110P_0421.JPG',
        author: 'DY5W-sport',
        authorUrl: 'https://commons.wikimedia.org/wiki/User:DY5W-sport',
        license: 'CC BY-SA 3.0',
        licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
        source: 'https://commons.wikimedia.org/wiki/File:Daihatsu_Hijet_Truck_S110P_0421.JPG',
        note: 'Photo depicts the S110P 4WD generation, including 1995 model-year trucks.'
    },
    {
        make: 'Daihatsu',
        model: 'Hijet Truck 2007–2011 (9th generation)',
        yearMin: 2007,
        yearMax: 2011,
        image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/2007-2011_Daihatsu_Hijet_Truck_Extra_4WD.jpg/960px-2007-2011_Daihatsu_Hijet_Truck_Extra_4WD.jpg',
        author: 'TTTNIS',
        authorUrl: 'https://commons.wikimedia.org/wiki/User:TTTNIS',
        license: 'CC0',
        licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
        source: 'https://commons.wikimedia.org/wiki/File:2007-2011_Daihatsu_Hijet_Truck_Extra_4WD.jpg',
        note: 'Photo depicts the ninth-generation Hijet Truck Extra 4WD.'
    },
    {
        make: 'Honda',
        model: 'Acty Truck',
        image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/75/Honda_Acty_Truck_HA9.jpg/960px-Honda_Acty_Truck_HA9.jpg',
        author: 'TTTNIS',
        authorUrl: 'https://commons.wikimedia.org/wiki/User:TTTNIS',
        license: 'CC0',
        licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
        source: 'https://commons.wikimedia.org/wiki/File:Honda_Acty_Truck_HA9.jpg',
        note: 'Production ended in 2021.'
    },
    {
        make: 'Honda',
        model: 'Acty Truck 1996–1999 (SDX 4WD)',
        yearMin: 1996,
        yearMax: 1999,
        image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/1996-1999_Honda_Acty_Truck_SDX_4WD.jpg/960px-1996-1999_Honda_Acty_Truck_SDX_4WD.jpg',
        author: 'TTTNIS',
        authorUrl: 'https://commons.wikimedia.org/wiki/User:TTTNIS',
        license: 'CC0',
        licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
        source: 'https://commons.wikimedia.org/wiki/File:1996-1999_Honda_Acty_Truck_SDX_4WD.jpg',
        note: 'Photo depicts a 1996–1999 Honda Acty Truck SDX 4WD.'
    },
    {
        make: 'Subaru',
        model: 'Sambar Truck',
        image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a6/Subaru_Sambar_Truck_3rd_gen.jpg/960px-Subaru_Sambar_Truck_3rd_gen.jpg',
        author: 'Kalmarle',
        authorUrl: 'https://commons.wikimedia.org/wiki/User:Kalmarle',
        license: 'CC BY-SA 4.0',
        licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
        source: 'https://commons.wikimedia.org/wiki/File:Subaru_Sambar_Truck_3rd_gen.jpg',
        note: 'Photo shows an earlier Subaru-built generation; later models use a Daihatsu platform.'
    },
    {
        make: 'Mitsubishi',
        model: 'Minicab Truck',
        image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9e/Mitsubishi_Minicab_2000.jpg/960px-Mitsubishi_Minicab_2000.jpg',
        author: 'Kuha455405',
        authorUrl: 'https://commons.wikimedia.org/wiki/User:Kuha455405',
        license: 'CC BY-SA 3.0',
        licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
        source: 'https://commons.wikimedia.org/wiki/File:Mitsubishi_Minicab_2000.jpg',
        note: 'Representative Minicab image; specifications and availability vary by generation.'
    },
    {
        make: 'Mitsubishi',
        model: 'Minicab 1995 (5th generation)',
        yearMin: 1995,
        yearMax: 1995,
        image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/85/1995_Mitsubishi_Minicab_TS_4WD_in_Calgary_White%2C_front_left.jpg/960px-1995_Mitsubishi_Minicab_TS_4WD_in_Calgary_White%2C_front_left.jpg',
        author: 'Mr.choppers',
        authorUrl: 'https://commons.wikimedia.org/wiki/User:Mr.choppers',
        license: 'CC BY-SA 3.0',
        licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
        source: 'https://commons.wikimedia.org/wiki/File:1995_Mitsubishi_Minicab_TS_4WD_in_Calgary_White,_front_left.jpg',
        note: 'Photo depicts a 1995 Mitsubishi Minicab TS 4WD, built in April 1995.'
    },
    {
        make: 'Mazda',
        model: 'Scrum Truck (Autozam Scrum)',
        image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/af/2013-2026_Mazda_Scrum_Truck_KC.jpg/1280px-2013-2026_Mazda_Scrum_Truck_KC.jpg',
        author: 'TTTNIS',
        authorUrl: 'https://commons.wikimedia.org/wiki/User:TTTNIS',
        license: 'CC0',
        licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
        source: 'https://commons.wikimedia.org/wiki/File:2013-2026_Mazda_Scrum_Truck_KC.jpg',
        note: 'Photo shows a clean, white Mazda Scrum Truck KC; Scrum Truck models are based on the Suzuki Carry platform.'
    },
    {
        make: 'Nissan',
        model: 'Clipper Truck',
        image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/93/Nissan_CLIPPER_TRUCK_%28U71T%29_front.JPG/960px-Nissan_CLIPPER_TRUCK_%28U71T%29_front.JPG',
        author: 'Tokumeigakarinoaoshima',
        authorUrl: 'https://commons.wikimedia.org/wiki/User:Tokumeigakarinoaoshima',
        license: 'CC0',
        licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
        source: 'https://commons.wikimedia.org/wiki/File:Nissan_CLIPPER_TRUCK_(U71T)_front.JPG',
        note: 'Photo shows the U71T generation; later Clipper trucks use a different platform.'
    },
    {
        make: 'Toyota',
        model: 'Pixis Truck',
        image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c5/Daihatsu_Hijet_Truck_%282827202436%29.jpg/960px-Daihatsu_Hijet_Truck_%282827202436%29.jpg',
        author: 'dave_7',
        authorUrl: 'https://www.flickr.com/people/21612624@N00',
        license: 'CC BY-SA 2.0',
        licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
        source: 'https://commons.wikimedia.org/wiki/File:Daihatsu_Hijet_Truck_(2827202436).jpg',
        note: 'Pixis Truck is a Daihatsu-built Hijet twin; this representative photo shows a Hijet.'
    },
    {
        make: 'Suzuki',
        model: 'Carry 2009–2012 (DA63T)',
        yearMin: 2009,
        yearMax: 2012,
        image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6a/2009-2012_Suzuki_Carry_DA63T.jpg/960px-2009-2012_Suzuki_Carry_DA63T.jpg',
        author: 'TTTNIS',
        authorUrl: 'https://commons.wikimedia.org/wiki/User:TTTNIS',
        license: 'CC0',
        licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
        source: 'https://commons.wikimedia.org/wiki/File:2009-2012_Suzuki_Carry_DA63T.jpg',
        note: 'Photo depicts the DA63T-generation Suzuki Carry.'
    }
];

const catalogSearch = document.getElementById('catalogSearch');
const makeFilters = Array.from(document.querySelectorAll('[data-make-filter]'));
const modelList = document.getElementById('catalogModelList');
const resultCount = document.getElementById('catalogResultCount');
const sortSelect = document.getElementById('catalogSort');
const priceMin = document.getElementById('priceMin');
const priceMax = document.getElementById('priceMax');
const priceMinValue = document.getElementById('priceMinValue');
const priceMaxValue = document.getElementById('priceMaxValue');
const priceTrack = document.querySelector('[data-price-track]');
const requestedPriceMin = document.getElementById('requestedPriceMin');
const requestedPriceMax = document.getElementById('requestedPriceMax');
const mileageRange = document.getElementById('marketplaceMileage');
const mileageValue = document.getElementById('marketplaceMileageValue');
const mileageTrack = mileageRange.closest('.marketplace-range-track');
const requestedMileageMax = document.getElementById('requestedMileageMax');
const yearMinRange = document.getElementById('yearMinRange');
const yearMaxRange = document.getElementById('yearMaxRange');
const yearMinValue = document.getElementById('yearMinValue');
const yearMaxValue = document.getElementById('yearMaxValue');
const yearTrack = document.querySelector('[data-year-track]');
const requestSelection = document.getElementById('truckRequestSelection');
const preferredTruckInput = document.getElementById('truckModel');
const truckYearMin = document.getElementById('truckYearMin');
const truckYearMax = document.getElementById('truckYearMax');
const currentYear = new Date().getFullYear();
const truckYears = Array.from({ length: currentYear - 1959 + 1 }, (_, index) => currentYear - index);
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const marketplaceRevealObserver = !prefersReducedMotion && 'IntersectionObserver' in window
    ? new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' })
    : null;

function observeMarketplaceReveal(element, delay = 0) {
    if (!marketplaceRevealObserver) {
        return;
    }

    element.classList.add('marketplace-reveal');
    element.style.setProperty('--marketplace-reveal-delay', `${delay}ms`);
    marketplaceRevealObserver.observe(element);
}

if (marketplaceRevealObserver) {
    document.querySelectorAll([
        '.marketplace-hero .marketplace-eyebrow',
        '.marketplace-hero h1',
        '.marketplace-hero-lead',
        '.marketplace-hero-actions',
        '.marketplace-hero-note',
        '.marketplace-breadcrumbs',
        '.marketplace-section-heading > div',
        '.marketplace-heading-note',
        '.marketplace-sidebar',
        '.marketplace-results-toolbar',
        '.marketplace-listing-note',
        '.marketplace-request-copy > *',
        '.marketplace-request-panel'
    ].join(',')).forEach((element, index) => observeMarketplaceReveal(element, Math.min(index * 70, 350)));

    document.body.classList.add('marketplace-motion-ready');
}

function populateYearSelect(select, defaultLabel) {
    if (!select) {
        return;
    }

    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = defaultLabel;
    select.appendChild(defaultOption);

    truckYears.forEach((year) => {
        const option = document.createElement('option');
        option.value = String(year);
        option.textContent = String(year);
        select.appendChild(option);
    });
}

populateYearSelect(truckYearMin, 'Any year');
populateYearSelect(truckYearMax, 'Any year');

function keepYearRangeValid(minSelect, maxSelect) {
    minSelect.addEventListener('change', () => {
        if (minSelect.value && maxSelect.value && Number(minSelect.value) > Number(maxSelect.value)) {
            maxSelect.value = minSelect.value;
        }
    });

    maxSelect.addEventListener('change', () => {
        if (minSelect.value && maxSelect.value && Number(maxSelect.value) < Number(minSelect.value)) {
            minSelect.value = maxSelect.value;
        }
    });
}

keepYearRangeValid(truckYearMin, truckYearMax);

const priceFormatter = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 });

yearMinRange.max = String(currentYear);
yearMaxRange.max = String(currentYear);
yearMaxRange.value = String(currentYear);

function updateYearRange(changedInput) {
    let minYear = Number(yearMinRange.value);
    let maxYear = Number(yearMaxRange.value);

    if (minYear > maxYear) {
        if (changedInput === yearMinRange) {
            maxYear = minYear;
            yearMaxRange.value = String(maxYear);
        } else {
            minYear = maxYear;
            yearMinRange.value = String(minYear);
        }
    }

    yearMinValue.textContent = minYear === Number(yearMinRange.min) ? 'Any year' : String(minYear);
    yearMaxValue.textContent = maxYear === currentYear ? 'Any year' : String(maxYear);
    yearTrack.style.setProperty(
        '--range-start',
        `${((minYear - Number(yearMinRange.min)) / (currentYear - Number(yearMinRange.min))) * 100}%`
    );
    yearTrack.style.setProperty(
        '--range-end',
        `${((maxYear - Number(yearMaxRange.min)) / (currentYear - Number(yearMaxRange.min))) * 100}%`
    );

    truckYearMin.value = minYear === Number(yearMinRange.min) ? '' : String(minYear);
    truckYearMax.value = maxYear === currentYear ? '' : String(maxYear);
}

yearMinRange.addEventListener('input', () => updateYearRange(yearMinRange));
yearMaxRange.addEventListener('input', () => updateYearRange(yearMaxRange));
updateYearRange();

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

    priceMinValue.textContent = `$${priceFormatter.format(min)}`;
    priceMaxValue.textContent = max === Number(priceMax.max)
        ? `$${priceFormatter.format(max)}+`
        : `$${priceFormatter.format(max)}`;
    requestedPriceMin.value = String(min);
    requestedPriceMax.value = String(max);

    const minPercent = (min / Number(priceMin.max)) * 100;
    const maxPercent = (max / Number(priceMax.max)) * 100;
    priceTrack.style.setProperty('--range-start', `${minPercent}%`);
    priceTrack.style.setProperty('--range-end', `${maxPercent}%`);
    priceMin.style.zIndex = changedInput === priceMin ? '3' : '';
    priceMax.style.zIndex = changedInput === priceMax ? '3' : '';
}

function updateMileageRange() {
    const mileage = Number(mileageRange.value);
    const maximum = Number(mileageRange.max);
    const cappedLabel = mileage === maximum ? `${priceFormatter.format(maximum / 1000)}K+ miles` : `${priceFormatter.format(mileage)} miles or less`;

    mileageValue.textContent = cappedLabel;
    requestedMileageMax.value = mileage === maximum ? `${maximum}+ miles` : `${mileage} miles`;
    mileageTrack.style.setProperty('--range-end', `${((mileage - Number(mileageRange.min)) / (maximum - Number(mileageRange.min))) * 100}%`);
}

priceMin.addEventListener('input', () => updatePriceRange(priceMin));
priceMax.addEventListener('input', () => updatePriceRange(priceMax));
mileageRange.addEventListener('input', updateMileageRange);
updatePriceRange();
updateMileageRange();

function matchesYearRange(truck, minYear, maxYear) {
    if ((!minYear || minYear <= Number(yearMinRange.min)) &&
        (!maxYear || maxYear >= currentYear)) {
        return true;
    }

    if (!truck.yearMin || !truck.yearMax) {
        return false;
    }

    return (!minYear || truck.yearMax >= minYear) &&
        (!maxYear || truck.yearMin <= maxYear);
}

function compareByYear(first, second, newestFirst) {
    const firstYear = newestFirst ? first.yearMax : first.yearMin;
    const secondYear = newestFirst ? second.yearMax : second.yearMin;

    if (!firstYear && !secondYear) {
        return 0;
    }
    if (!firstYear) {
        return 1;
    }
    if (!secondYear) {
        return -1;
    }

    return newestFirst ? secondYear - firstYear : firstYear - secondYear;
}

function getVisibleModels() {
    const selectedMakes = makeFilters.filter((filter) => filter.checked).map((filter) => filter.value);
    const query = catalogSearch.value.trim().toLowerCase();
    const minYear = Number(yearMinRange.value) || 0;
    const maxYear = Number(yearMaxRange.value) || 0;
    const sortOrder = sortSelect.value;

    const visibleModels = keiTruckModels.filter((truck) => {
        const matchesMake = selectedMakes.length === 0 || selectedMakes.includes(truck.make);
        const searchableText = `${truck.make} ${truck.model} ${truck.note}`.toLowerCase();
        const matchesQuery = !query || searchableText.includes(query);
        return matchesMake && matchesQuery && matchesYearRange(truck, minYear, maxYear);
    });

    if (sortOrder === 'newest') {
        visibleModels.sort((first, second) => compareByYear(first, second, true));
    } else if (sortOrder === 'oldest') {
        visibleModels.sort((first, second) => compareByYear(first, second, false));
    } else if (sortOrder === 'name') {
        visibleModels.sort((first, second) =>
            `${first.make} ${first.model}`.localeCompare(`${second.make} ${second.model}`)
        );
    }

    return visibleModels;
}

function formatYearRange(truck) {
    if (!truck.yearMin || !truck.yearMax) {
        return 'Model reference';
    }
    if (truck.yearMin === truck.yearMax) {
        return String(truck.yearMin);
    }

    return `${truck.yearMin}–${truck.yearMax}`;
}

function createTruckCard(truck) {
    const card = document.createElement('article');
    card.className = 'marketplace-card';

    const imageLink = document.createElement('a');
    imageLink.className = 'marketplace-card-image';
    imageLink.href = truck.source;
    imageLink.target = '_blank';
    imageLink.rel = 'noopener noreferrer';
    imageLink.setAttribute('aria-label', `View the reference photo source for ${truck.make} ${truck.model}`);

    const image = document.createElement('img');
    image.src = truck.image;
    image.alt = `${truck.make} ${truck.model} reference photo`;
    image.loading = 'lazy';
    image.decoding = 'async';
    image.addEventListener('error', () => {
        imageLink.classList.add('is-image-unavailable');
        image.alt = '';
        image.removeAttribute('src');
        imageLink.setAttribute('aria-label', `Reference photo unavailable for ${truck.make} ${truck.model}; open source`);
    }, { once: true });

    const photoBadge = document.createElement('span');
    photoBadge.className = 'marketplace-photo-badge';
    photoBadge.textContent = 'REFERENCE PHOTO';
    imageLink.append(image, photoBadge);

    const details = document.createElement('div');
    details.className = 'marketplace-card-details';

    const make = document.createElement('p');
    make.className = 'marketplace-card-make';
    make.textContent = truck.make;

    const title = document.createElement('h3');
    title.textContent = truck.model;

    const year = document.createElement('p');
    year.className = 'marketplace-card-year';
    year.textContent = formatYearRange(truck);

    const note = document.createElement('p');
    note.className = 'marketplace-card-note';
    note.textContent = truck.note;

    const attribution = document.createElement('p');
    attribution.className = 'marketplace-card-credit';
    attribution.append('Photo: ');
    const authorLink = document.createElement('a');
    authorLink.href = truck.authorUrl;
    authorLink.target = '_blank';
    authorLink.rel = 'noopener noreferrer';
    authorLink.textContent = truck.author;
    const licenseLink = document.createElement('a');
    licenseLink.href = truck.licenseUrl;
    licenseLink.target = '_blank';
    licenseLink.rel = 'noopener noreferrer';
    licenseLink.textContent = truck.license;
    const sourceLink = document.createElement('a');
    sourceLink.href = truck.source;
    sourceLink.target = '_blank';
    sourceLink.rel = 'noopener noreferrer';
    sourceLink.textContent = 'Source';
    attribution.append(authorLink, ' · ', licenseLink, ' · ', sourceLink);

    const footer = document.createElement('div');
    footer.className = 'marketplace-card-footer';
    const quote = document.createElement('span');
    quote.className = 'marketplace-card-quote';
    quote.textContent = 'PRICE ON REQUEST';

    const requestButton = document.createElement('button');
    requestButton.className = 'marketplace-card-action';
    requestButton.type = 'button';
    requestButton.textContent = 'REQUEST THIS TRUCK';
    requestButton.setAttribute('aria-label', `Request a ${truck.make} ${truck.model}`);
    requestButton.addEventListener('click', () => selectTruck(truck));
    footer.append(quote, requestButton);

    details.append(make, title, year, note, attribution, footer);
    card.append(imageLink, details);
    return card;
}

function selectTruck(truck) {
    const truckName = `${truck.make} ${truck.model}`;
    preferredTruckInput.value = truckName;
    requestSelection.textContent = `Selected: ${truckName}. This model will be included in your request.`;
    requestSelection.hidden = false;

    truckYearMin.value = truck.yearMin ? String(truck.yearMin) : '';
    truckYearMax.value = truck.yearMax ? String(truck.yearMax) : '';

    document.getElementById('truckRequest').scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'
    });
    preferredTruckInput.focus({ preventScroll: true });
}

function renderModelCards() {
    const visibleModels = getVisibleModels();
    const modelCounts = keiTruckModels.reduce((counts, truck) => {
        counts[truck.make] = (counts[truck.make] || 0) + 1;
        return counts;
    }, {});

    makeFilters.forEach((filter) => {
        const makeOption = filter.closest('.marketplace-make-option');
        makeOption.querySelector('[data-make-count]').textContent = String(modelCounts[filter.value] || 0);
    });

    if (marketplaceRevealObserver) {
        modelList.querySelectorAll('.marketplace-reveal').forEach((card) => {
            marketplaceRevealObserver.unobserve(card);
        });
    }

    modelList.replaceChildren();
    resultCount.textContent = `${visibleModels.length} model${visibleModels.length === 1 ? '' : 's'} · ${keiTruckModels.length} in the range`;

    visibleModels.forEach((truck, index) => {
        const card = createTruckCard(truck);
        modelList.appendChild(card);
        observeMarketplaceReveal(card, (index % 6) * 65);
    });

    if (!visibleModels.length) {
        const emptyMessage = document.createElement('p');
        emptyMessage.className = 'marketplace-empty';
        emptyMessage.textContent = 'No models match these filters. Try broadening your search or resetting the filters.';
        modelList.appendChild(emptyMessage);
        observeMarketplaceReveal(emptyMessage);
    }
}

function resetFilters() {
    catalogSearch.value = '';
    makeFilters.forEach((filter) => {
        filter.checked = false;
    });
    priceMin.value = priceMin.min;
    priceMax.value = priceMax.max;
    mileageRange.value = '70000';
    updatePriceRange();
    updateMileageRange();
    yearMinRange.value = yearMinRange.min;
    yearMaxRange.value = String(currentYear);
    updateYearRange();
    sortSelect.value = 'relevance';
    renderModelCards();
}

catalogSearch.addEventListener('input', renderModelCards);
makeFilters.forEach((filter) => filter.addEventListener('change', renderModelCards));
yearMinRange.addEventListener('input', renderModelCards);
yearMaxRange.addEventListener('input', renderModelCards);
sortSelect.addEventListener('change', renderModelCards);
document.querySelector('[data-reset-filters]').addEventListener('click', resetFilters);

renderModelCards();
