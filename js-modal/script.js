const modalBtn = document.querySelector('.modal-toggle');
const closeBtn = document.querySelector('.close-btn');
const modalOverlay = document.querySelector('.modal-overlay'); // Select the specific modal overlay element

modalBtn.addEventListener('click', function() {
    console.log('showing modal');

    modalOverlay.style.display = 'flex'; // Use the selected modalOverlay element
});

closeBtn.addEventListener('click', function() {
    console.log('hiding modal');

    modalOverlay.style.display = 'none';
});