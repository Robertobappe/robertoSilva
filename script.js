/**
 * Função para alternar entre as abas do perfil.
 * @param {Event} evt - O evento de clique.
 * @param {string} tabName - O ID da seção que deve ser exibida.
 */
function openTab(evt, tabName) {
    // 1. Seleciona todos os conteúdos e esconde
    const tabContents = document.querySelectorAll(".tab-content");
    tabContents.forEach(content => {
        content.classList.remove("active");
    });

    // 2. Seleciona todos os itens de menu e remove o estado ativo (linha verde)
    const tabItems = document.querySelectorAll(".tab-item");
    tabItems.forEach(item => {
        item.classList.remove("active");
    });

    // 3. Mostra a seção clicada
    document.getElementById(tabName).classList.add("active");

    // 4. Adiciona a classe active ao item de menu clicado
    evt.currentTarget.classList.add("active");
    
    // Opcional: Rola suavemente para o início do conteúdo se estiver no mobile
    if (window.innerWidth < 768) {
        window.scrollTo({
            top: document.querySelector('.spotify-nav').offsetTop,
            behavior: 'smooth'
        });
    }
}