let posicaoAtual =0;
const imgs = document.querySelector('.imgs');

function moverDireita() {
    const imageLarg = document.querySelector('.imgs img').clientWidth;
    const totalImages = document.querySelectorAll('.imgs img').length;
        if (posicaoAtual >-(imageLarg*(totalImages-1))){
            posicaoAtual -= imageLarg;
            imgs.style.transform = `translateX(${posicaoAtual}px)`;
        }else {
            posicaoAtual=0;
            imgs.style.transform = `translateX(${posicaoAtual})`;
        }
}

function moverEsquerda() {
    const imageLarg = document.querySelector('.imgs img').clientWidth;
    if(posicaoAtual < 0){
        posicaoAtual+= imageLarg;
        imgs.style.transform = `translateX(${posicaoAtual}px)`;
    }
}
