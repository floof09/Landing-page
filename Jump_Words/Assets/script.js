const letters = document.querySelectorAll('.letter');

letters.forEach(letter => {
    letter.addEventListener('click', () => {
        letter.classList.toggle('active');
    });
});
