function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => {
            console.error('Erro ao carregar a página:', error);
        });
}

// Carrega a página inicial por padrão
loadPage('home.html');

