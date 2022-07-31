/* 
1. Se clicar seta avançar mostrar proxima carta da lista
  a. pegar elemento seta avancar do html
  b. identificar o clique no elemento seta avancar
  c. aparecer proxima carta da lista 
  d. esconder ultima carta selecionada 

2. Se clicar seta voltar mostrar carta anterior da lista
  a. pegar elemento seta voltar do html
  b. identificar o clique no elemento seta voltar
  c. aparecer carta anterior da lista 
  d. esconder ultima carta selecionada 
*/

const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const cartoes = document.querySelectorAll('.cartao')
let cartaoAtual = 0;

function esconderCartaoSelecionado() {
    const cartaoSel = document.querySelector('.selecionado');
    cartaoSel.classList.remove('selecionado')
}

function mostrarCartao(indiceCartao) {
    cartoes[indiceCartao].classList.add('selecionado')
};

btnAvancar.addEventListener('click', function () {
    if (cartaoAtual === cartoes.length - 1) return;
    esconderCartaoSelecionado();
    cartaoAtual++;
    mostrarCartao(cartaoAtual);
});

btnVoltar.addEventListener('click', function () {
    if (cartaoAtual === 0) return
    esconderCartaoSelecionado();
    cartaoAtual--;
    mostrarCartao(cartaoAtual);
});
