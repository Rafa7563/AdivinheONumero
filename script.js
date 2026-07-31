let numeroSecreto = sortearNumero();
let tentativas = 0;

const campo = document.querySelector('#palpite');
const mensagem = document.querySelector('#mensagem');
const contador = document.querySelector('#tentativas');

function sortearNumero() {
    return Math.floor(Math.random() *100) + 1;
}

function chutar() {
    const palpite = Number(campo.value);
}

if (palpite < 1 || palpite > 100 || campo.value === " "){
    mensagem.textContent = 'Digite um número entre 1 e 100!';
    mensagem.className = 'mensagem';
}

tentativas++;
contador.textContent = 'Tentativas: ' + tentativas;

if (palpíte === numeroSecreto) {
    mensagem.textContent = 'Acertou em ' + tentativas + 'tentativas(s)!';
    mensagem.className = 'mensagem acerto';
} else if (palpite > numeroSecreto) {
    mensagem.textContent = 'Muito alto! Tente um número menor.';
    mensagem.className = 'mensagem alto';
} else {
    mensagem.textContent = 'Muito baixo! Tente um número maior.';
    mensagem.className = 'mensagem baixo';
}

campo.value = '';
campo.focus();

function novoJogo() {
    numeroSecreto = sortearNumero();
    tentativas = 0;
    contador.textContent = 'Tentativas: 0';
    mensagem.content = 'Novo número sorteado. Boa sorte!';
    mensagem.className = 'mensagem';
    campo.value = '';
    campo.focus();
}

campo.addEventListener('keypress', function (evento) {
    if (evento.key === 'Enter') chutar();
});