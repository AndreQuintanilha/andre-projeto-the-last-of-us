/* 
	OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente

    - passo 1 - dar um jeito de pegar o elemento HTML dos botões

	- passo 2 - dar um jeito de identificar o clique do usuário no botão

	- passo 3 - desmarcar o botão selecionado anterior

	- passo 4 - marcar o botão clicado como se estivesse selecionada

	- passo 5 - esconder a imagem de fundo anterior

	- passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado
*/

//console.log() - mostrar mensagem e açoes na aba do console no inspecionar ou clicando F12
//Exemplo
//console.log(BATATA) 
//console.log(document)



//passo 1 - dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
// console.log(document.querySelectorAll('.botao')); -lista os 6 botoes la no console como teste.
const imagens = document.querySelectorAll('.imagem');
//console.log(document.querySelectorAll('.imagem')); - lista as imagens no console.

// passo 2 - dar um jeito de identificar o clique do usuário no botão
// forEach - para cada 
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
       
        // passo 3 - desmarcar o botão selecionado anterior      
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');
        // passo 4 - marcar o botão clicado como se estivesse selecionado
        botao.classList.add('selecionado');

        // passo 5 - esconder a imagem ativa de fundo
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');

        // passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado
        // indice - é a posição de um elemento dentro de uma lista de elementos
        imagens[indice].classList.add('ativa');
    })
})

