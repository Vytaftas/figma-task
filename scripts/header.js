window.addEventListener('DOMContentLoaded', () => {
    const navButton = document.querySelector('.nav-button');
    const navigation = document.querySelector('.nav');

    navButton.addEventListener('click', () => {
        navigation.classList.toggle('active');
    });
});
