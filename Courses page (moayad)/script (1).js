let mode = document.body;
let gray = document.getElementById("bg");
function dark_mode() {
    mode.classList.toggle("dark-mode");  
}

let en  = document.getElementById("en").classList;
let ar  = document.getElementById("ar").classList;
function hide(){
    en.toggle("hiddenen");
    ar.toggle("hiddenar");

}







const searchInput = document.getElementById('searchInput');
    const categoryCards = document.querySelectorAll('.course-card');

    function handleSearch() {
        const searchText = searchInput.value.toLowerCase().trim();

        categoryCards.forEach(card => {
            const subject = card.dataset.subject.toLowerCase();

            if (subject.includes(searchText)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
