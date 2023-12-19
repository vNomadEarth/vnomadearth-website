const dropdownfilterButton = document.querySelector('.dropdown-filter-button-countries');
const dropdownfilterContent = document.querySelector('.dropdown-filter-countries-content');
const iconfilter = document.querySelector('.dropdown-filter-button-countries .icon i');
const checkboxItems = document.querySelectorAll('.checkbox-item input');
const clearButton = document.querySelector('.countries-button-clear');

function clearCheckboxes() {
    checkboxItems.forEach((checkbox) => {
        checkbox.checked = false;
    });
}

clearButton.addEventListener('click', clearCheckboxes);

dropdownfilterButton.addEventListener('click', () => {
    dropdownfilterContent.style.display = dropdownfilterContent.style.display === 'block' ? 'none' : 'block';
    dropdownfilterButton.classList.toggle('active'); // Toggle the active class
    // Toggle the icon class based on the button's active state
    if (dropdownfilterButton.classList.contains('active')) {
        iconfilter.classList.remove('fa-chevron-down');
        iconfilter.classList.add('fa-chevron-up');
    } else {
        iconfilter.classList.remove('fa-chevron-up');
        iconfilter.classList.add('fa-chevron-down');
    }
});

// Hide the dropdown list when clicking outside
window.addEventListener('click', function(event) {
    if (!dropdownfilterButton.contains(event.target) && !dropdownfilterContent.contains(event.target)) {
        dropdownfilterContent.style.display = 'none';
        dropdownfilterButton.classList.remove('active');
        // Reset the icon to 'fa-chevron-down' when clicking outside
        iconfilter.classList.remove('fa-chevron-up');
        iconfilter.classList.add('fa-chevron-down');
    }
});