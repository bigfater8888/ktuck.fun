(() => {
    const tabs = Array.from(document.querySelectorAll('[data-country-tab]'));
    const panels = Array.from(document.querySelectorAll('[data-country-panel]'));
    const form = document.getElementById('importEligibilityForm');
    const result = document.getElementById('eligibilityResult');
    const manufactureMonth = document.getElementById('importManufactureMonth');
    const destinationCountry = document.getElementById('destinationCountry');

    if (!tabs.length || !panels.length || !form || !result || !manufactureMonth || !destinationCountry) {
        return;
    }

    const now = new Date();
    const currentMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
    manufactureMonth.max = currentMonth;

    function selectCountry(country, moveFocus = false) {
        tabs.forEach((tab) => {
            const selected = tab.dataset.countryTab === country;
            tab.setAttribute('aria-selected', String(selected));
            tab.tabIndex = selected ? 0 : -1;
            if (selected && moveFocus) {
                tab.focus();
            }
        });

        panels.forEach((panel) => {
            panel.hidden = panel.dataset.countryPanel !== country;
        });

        destinationCountry.value = country;
    }

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => selectCountry(tab.dataset.countryTab));
        tab.addEventListener('keydown', (event) => {
            let nextIndex;
            if (event.key === 'ArrowRight') {
                nextIndex = (index + 1) % tabs.length;
            } else if (event.key === 'ArrowLeft') {
                nextIndex = (index - 1 + tabs.length) % tabs.length;
            } else if (event.key === 'Home') {
                nextIndex = 0;
            } else if (event.key === 'End') {
                nextIndex = tabs.length - 1;
            } else {
                return;
            }

            event.preventDefault();
            selectCountry(tabs[nextIndex].dataset.countryTab, true);
        });
    });

    destinationCountry.addEventListener('change', () => selectCountry(destinationCountry.value));

    function addResultText(container, text, className) {
        const paragraph = document.createElement('p');
        paragraph.textContent = text;
        if (className) {
            paragraph.className = className;
        }
        container.appendChild(paragraph);
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (!form.reportValidity()) {
            return;
        }

        const match = /^(\d{4})-(\d{2})$/.exec(manufactureMonth.value);
        if (!match) {
            manufactureMonth.setCustomValidity('Enter a valid manufacture month.');
            manufactureMonth.reportValidity();
            manufactureMonth.setCustomValidity('');
            return;
        }

        const manufactureYear = Number(match[1]);
        const manufactureMonthNumber = Number(match[2]);
        if (manufactureMonthNumber < 1 || manufactureMonthNumber > 12) {
            manufactureMonth.setCustomValidity('Enter a valid manufacture month.');
            manufactureMonth.reportValidity();
            manufactureMonth.setCustomValidity('');
            return;
        }

        const ageInMonths = (now.getFullYear() - manufactureYear) * 12
            + now.getMonth() + 1 - manufactureMonthNumber;
        if (ageInMonths < 0) {
            manufactureMonth.setCustomValidity('The manufacture month cannot be in the future.');
            manufactureMonth.reportValidity();
            manufactureMonth.setCustomValidity('');
            return;
        }

        const years = Math.floor(ageInMonths / 12);
        const months = ageInMonths % 12;
        const ageText = `${years} year${years === 1 ? '' : 's'} and ${months} month${months === 1 ? '' : 's'}`;
        const country = destinationCountry.value;
        const messages = {
            us: ageInMonths >= 300
                ? 'The month-based 25-year U.S. federal safety-age milestone is reached. Confirm the exact manufacture date: a month-only estimate does not establish that the full 25 years have elapsed. This does not confirm EPA emissions eligibility, customs clearance, or state registration.'
                : 'The 25-year U.S. federal safety-age milestone is not met. A different import pathway may be required; safety and EPA emissions requirements must be checked separately with the authorities.',
            ca: ageInMonths >= 180
                ? 'The 15-year age exception threshold is met for a vehicle class regulated under Canada’s Motor Vehicle Safety Act, based on manufacture month and year (and excluding buses). Confirm vehicle classification, customs requirements, and provincial registration.'
                : 'The 15-year age exception threshold is not met. Most foreign-market vehicles cannot be imported through this age exception; confirm whether another official pathway applies before purchase.',
            au: 'Australia does not use a single age threshold as import approval. Obtain the appropriate approval for this specific vehicle before arranging shipment, then confirm customs, biosecurity, and state or territory registration requirements.'
        };
        const countryNames = {
            us: 'United States',
            ca: 'Canada',
            au: 'Australia'
        };

        result.replaceChildren();
        const heading = document.createElement('h3');
        heading.textContent = `Preliminary result for ${countryNames[country]}`;
        result.appendChild(heading);
        addResultText(result, `Entered manufacture date: ${match[1]}-${match[2]} (${ageText} old as of ${currentMonth}).`, 'import-guide-result-age');
        addResultText(result, messages[country]);
        addResultText(result, 'This tool is only an age-related starting point. Verify the vehicle’s exact eligibility with the official agencies linked above.');
        result.hidden = false;
        result.focus();
    });
})();
