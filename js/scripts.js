//inject current year in footer
const currentTime = new Date();
document.querySelector('#year').textContent = currentTime.getFullYear();