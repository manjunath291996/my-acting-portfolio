const hamburgerIcon = document.querySelector('.hamburger_icon');
const dropdownMenu = document.querySelector('.nav_links--mobile');

console.log(hamburgerIcon);
console.log(dropdownMenu);

hamburgerIcon.addEventListener('click', () => {
    if (dropdownMenu.style.display == 'none') {
        dropdownMenu.style.display = 'block';
    }
    else {
        dropdownMenu.style.display = 'none';
    }
}, true);
