const keiTruckModels = [
    {
        make: 'Kurogane',
        model: 'Baby',
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
const selectedFigure = document.getElementById('catalogSelectedFigure');
const selectedImage = document.getElementById('catalogSelectedImage');
const selectedTitle = document.getElementById('catalogSelectedTitle');
const selectedNote = document.getElementById('catalogSelectedNote');
const imageAuthor = document.getElementById('catalogImageAuthor');
const imageLicense = document.getElementById('catalogImageLicense');
const imageSource = document.getElementById('catalogImageSource');
const imageError = document.getElementById('catalogImageError');
const photoPlaceholder = document.querySelector('.catalog-photo-placeholder');
const preferredTruckInput = document.getElementById('truckModel');
const truckYearMin = document.getElementById('truckYearMin');
const truckYearMax = document.getElementById('truckYearMax');
const truckYears = Array.from({ length: 33 }, (_, index) => 2027 - index);

function populateYearSelect(select, selectedYear) {
    truckYears.forEach((year) => {
        const option = document.createElement('option');
        option.value = String(year);
        option.textContent = String(year);
        option.selected = year === selectedYear;
        select.appendChild(option);
    });
}

populateYearSelect(truckYearMin, 1995);
populateYearSelect(truckYearMax, 2027);

function resetCheckboxes(selector) {
    document.querySelectorAll(selector).forEach((checkbox) => {
        checkbox.checked = false;
    });
}

document.querySelector('[data-reset-year]').addEventListener('click', () => {
    truckYearMin.value = '1995';
    truckYearMax.value = '2027';
});

document.querySelector('[data-reset-transmission]').addEventListener('click', () => {
    resetCheckboxes('input[name="Preferred transmission"]');
});

document.querySelector('[data-reset-fuel]').addEventListener('click', () => {
    resetCheckboxes('input[name="Preferred fuel type"]');
});

truckYearMin.addEventListener('change', () => {
    if (Number(truckYearMin.value) > Number(truckYearMax.value)) {
        truckYearMax.value = truckYearMin.value;
    }
});

truckYearMax.addEventListener('change', () => {
    if (Number(truckYearMax.value) < Number(truckYearMin.value)) {
        truckYearMin.value = truckYearMax.value;
    }
});

function getVisibleModels() {
    const selectedMakes = makeFilters.filter((filter) => filter.checked).map((filter) => filter.value);
    const query = catalogSearch.value.trim().toLowerCase();

    return keiTruckModels.filter((truck) => {
        const matchesMake = selectedMakes.length === 0 || selectedMakes.includes(truck.make);
        const matchesQuery = !query || `${truck.make} ${truck.model}`.toLowerCase().includes(query);
        return matchesMake && matchesQuery;
    });
}

function showModelPhoto(truck, button) {
    modelList.querySelectorAll('.catalog-model-button').forEach((modelButton) => {
        modelButton.classList.toggle('is-selected', modelButton === button);
        modelButton.setAttribute('aria-pressed', String(modelButton === button));
    });

    selectedTitle.textContent = `${truck.make} ${truck.model}`;
    selectedNote.textContent = truck.note;
    imageAuthor.href = truck.authorUrl;
    imageAuthor.textContent = truck.author;
    imageLicense.href = truck.licenseUrl;
    imageLicense.textContent = truck.license;
    imageSource.href = truck.source;
    imageError.hidden = true;
    selectedImage.hidden = false;
    selectedImage.alt = `${truck.make} ${truck.model} kei truck`;
    selectedFigure.hidden = false;
    photoPlaceholder.hidden = true;

    selectedImage.onerror = () => {
        selectedImage.hidden = true;
        imageError.textContent = 'The photo could not be loaded. Use the Wikimedia Commons source link to view it.';
        imageError.hidden = false;
    };
    selectedImage.src = truck.image;

    if (preferredTruckInput) {
        preferredTruckInput.value = `${truck.make} ${truck.model}`;
    }

    if (truck.yearMin && truck.yearMax) {
        truckYearMin.value = String(truck.yearMin);
        truckYearMax.value = String(truck.yearMax);
    }
}

function renderModelButtons() {
    const visibleModels = getVisibleModels();
    const visibleMakes = new Set(visibleModels.map((truck) => truck.make));

    makeFilters.forEach((filter) => {
        filter.closest('.catalog-make-option').hidden = !filter.checked && !visibleMakes.has(filter.value);
    });

    modelList.replaceChildren();
    resultCount.textContent = `${visibleModels.length} kei truck model${visibleModels.length === 1 ? '' : 's'}`;

    visibleModels.forEach((truck) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'catalog-model-button';
        button.setAttribute('aria-pressed', 'false');
        button.textContent = `${truck.make} ${truck.model}`;
        button.addEventListener('click', () => showModelPhoto(truck, button));
        modelList.appendChild(button);
    });

    if (!visibleModels.length) {
        const emptyMessage = document.createElement('p');
        emptyMessage.className = 'catalog-empty';
        emptyMessage.textContent = 'No matching models. Try another search or reset the make filters.';
        modelList.appendChild(emptyMessage);
    }
}

catalogSearch.addEventListener('input', renderModelButtons);
makeFilters.forEach((filter) => filter.addEventListener('change', renderModelButtons));

document.querySelector('[data-reset-makes]').addEventListener('click', () => {
    makeFilters.forEach((filter) => {
        filter.checked = false;
    });
    catalogSearch.value = '';
    renderModelButtons();
});

renderModelButtons();
