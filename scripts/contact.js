window.addEventListener('DOMContentLoaded', () => {
    const contactPage = document.querySelector('.contact-us');

    if (contactPage) {
        const footerTop = document.querySelector('.footer-top-wrapper');
        const footerLogo = document.querySelector('.footer-logo');

        footerTop.style.display = 'none';
        footerLogo.classList.add('contact-page');
    }
});
