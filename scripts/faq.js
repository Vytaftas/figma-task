window.addEventListener('DOMContentLoaded', () => {
    const allQuestions = document.querySelectorAll('.single-question');

    allQuestions.forEach((question) => {
        const toggleButton = question.querySelector('.question-toggle');
        const paragraph = question.querySelector('.paragraph-1');
        const paraHeight = paragraph.getBoundingClientRect().height;
        const questionHeight = question.getBoundingClientRect().height;

        if (toggleButton.classList.contains('open')) {
            paragraph.style.height = `${paraHeight}px`;
            question.style.height = `${questionHeight + paraHeight + 12.5}px`;
        } else {
            paragraph.style.height = '0px';
            question.style.height = `${questionHeight}px`;
        }

        toggleButton.addEventListener('click', function () {
            if (this.classList.contains('open')) {
                this.classList.remove('open');
                this.classList.add('closed');
                paragraph.style.height = '0px';
                question.style.height = `${questionHeight}px`;
            } else {
                this.classList.remove('closed');
                this.classList.add('open');
                paragraph.style.height = `${paraHeight}px`;
                question.style.height = `${questionHeight + paraHeight + 12.5}px`;
            }
        });
    });
});
