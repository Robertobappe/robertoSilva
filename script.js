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
function toggleReadMore(btn) {
    const parent = btn.parentElement;
    const dots = parent.querySelector(".dots");
    const moreText = parent.querySelector(".more-text");

    // Mudamos a lógica: se o texto extra NÃO estiver aparecendo, nós mostramos
    if (moreText.style.display === "inline") {
        dots.style.display = "inline";
        btn.innerHTML = "see more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btn.innerHTML = "see less";
        moreText.style.display = "inline";
    }
}