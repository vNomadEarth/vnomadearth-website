// JavaScript to handle the dropdown behavior
const productDropdown = document.querySelector('.dropdown-product');
const dropdownList = document.querySelector('.dropdown-list-product');
const icon = document.querySelector('.dropdown-product .icon i');

productDropdown.addEventListener('click', function(event) {
    event.preventDefault();
    dropdownList.style.display = dropdownList.style.display === 'block' ? 'none' : 'block';
    icon.classList.toggle('fa-chevron-down');
    icon.classList.toggle('fa-chevron-up');
});

// Hide the dropdown list when clicking outside
window.addEventListener('click', function(event) {
    if (!productDropdown.contains(event.target)) {
        dropdownList.style.display = 'none';
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
    }
});
// Navigate to vMAP.html when "vMAP" dropdown item is clicked
const vmapLink = document.querySelector('.dropdown-list-product li a[href="vmap.html"]');
vmapLink.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = vmapLink.getAttribute('href');
});

// Navigate to blog.html when "Blog" dropdown item is clicked
const blogLink = document.querySelector('.right-header ul li a[href="blog.html"]');
blogLink.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = blogLink.getAttribute('href');
});

// Navigate to About.html when "About" dropdown item is clicked
const aboutLink = document.querySelector('.right-header ul li a[href="about.html"]');
aboutLink.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = aboutLink.getAttribute('href');
});

// Navigate to main_page.html when "About" dropdown item is clicked
const mainpageLink = document.querySelector('header h1');
mainpageLink.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = mainpageLink.getAttribute('href');
});