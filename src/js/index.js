/* buscar os personagem com a classe selecionado e depois remover a classe e colocar no proximo personagem*/
const personagens = document.querySelectorAll('.personagem')

personagens.forEach(personagens => {
  personagens.addEventListener('mouseenter', () => {
    const personagemSelecionado = document.querySelector('.selecionado')
    personagemSelecionado.classList.remove('selecionado')
    personagens.classList.add('selecionado')
    /* Troca a imagem do personagem grande */
    const idSelecionado = personagens.attributes.id.value;
    const imagemJogador1 = document.getElementById('personagem-jogador-1');
    imagemJogador1.src = `src/imagens/${idSelecionado}.png`
    
    const nomeJogador1 = document.getElementById('nome-personagem'); 
    const nomeSelecionado = personagens.getAttribute('data-name');
    nomeJogador1.innerHTML = nomeSelecionado;
  })

})
