// Gerenciamento de Abas
function openTab(evt, tabName) {
    const tabContents = document.querySelectorAll(".tab-content");
    tabContents.forEach(content => content.classList.remove("active"));

    const tabItems = document.querySelectorAll(".tab-item");
    tabItems.forEach(item => item.classList.remove("active"));

    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
    
    if (window.innerWidth < 768) {
        window.scrollTo({
            top: document.querySelector('.spotify-nav').offsetTop,
            behavior: 'smooth'
        });
    }
}

// Função See More / See Less
function toggleReadMore() {
    const dots = document.getElementById("dots");
    const moreText = document.getElementById("more-text");
    const btnText = document.getElementById("readMoreBtn");

    if (dots.style.display === "none") {
        // Estado: Aberto -> Vai fechar
        dots.style.display = "inline";
        btnText.innerHTML = "see more";
        moreText.style.display = "none";
    } else {
        // Estado: Fechado -> Vai abrir
        dots.style.display = "none";
        btnText.innerHTML = "see less";
        moreText.style.display = "inline";
    }
}