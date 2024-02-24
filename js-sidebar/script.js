const closeBtn = document.querySelector('.close-btn');
const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');

sidebarToggle.addEventListener('click', function() {
    console.log('showing sidebar');
    console.log(sidebarToggle.classList);

    sidebar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', function() {
    console.log('hiding sidebar');
    console.log(closeBtn.classList);

    sidebar.classList.toggle('show-sidebar');
})