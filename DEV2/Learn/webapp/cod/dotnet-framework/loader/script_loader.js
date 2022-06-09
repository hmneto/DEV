function iniciaCarregamento() {
    let body = document.body, html = document.documentElement,
        height = Math.max(body.scrollHeight, body.offsetHeight,
            html.clientHeight, html.scrollHeight, html.offsetHeight);

    let telaCarregamento = document.getElementById('telaCarregamento')
    telaCarregamento.style.height = height + "px"
    telaCarregamento.style.display = 'block'
};



function terminoCarregamento() {
    let body = document.body, html = document.documentElement,
        height = Math.max(body.scrollHeight, body.offsetHeight,
            html.clientHeight, html.scrollHeight, html.offsetHeight);

    let  = document.getElementById('telaCarregamento')
    telaCarregamento.style.height = height + "px"
    telaCarregamento.style.display = 'none'
};
