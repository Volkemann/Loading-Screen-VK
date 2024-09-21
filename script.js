gsap.fromTo('.loading-page' , {opacity:1},{
    opacity:0,
    duration:2.5,
    delay:2.7,
})

window.addEventListener('load', function() {
    console.log("Página carregada, aguardando antes de remover tela de carregamento.");
    setTimeout(function() {
        const loadingPage = document.querySelector('.loading-page');
        loadingPage.style.display = 'none';

        const container = document.querySelector('.container');
        container.style.display = 'block';
    }, 5000); // 5000 milissegundos = 3 segundos
});