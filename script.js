
const searchInput = document.getElementById('search');
const jobsList = document.querySelectorAll('.right-column article');


searchInput.addEventListener('keyup', (event) => {
    const searchTerm = event.target.value.toLowerCase();

    jobsList.forEach(item => {
        const title = item.querySelector('h3').textContent.toLowerCase();
        const description = item.querySelector('p').textContent.toLowerCase();


        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});
