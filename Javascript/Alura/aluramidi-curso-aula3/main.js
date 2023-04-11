function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
     //identificar o tipo do elemento e se não for nulo = play se não console.log()
    if (elemento != null && elemento.localName === 'audio'){ 
         elemento.play();
    }
    else{
        console.log('Elemento não encontrado ou seletor inválido')
    }
}

    //atribuição de todos os elementos com classe id '.tecla' dentro de uma lista 
const listaDeTeclas = document.querySelectorAll(".tecla");

    //contador sendo comparado com o tamanho da lista 
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    
    const tecla = listaDeTeclas[contador]
    //
    const instrumento = tecla.classList[1]
    const idAudio = `#som_${instrumento}`; //template string
    
    //aplicamos uma rotina para cada elemento ser acessado, acessar o atributo onclick e atribuir uma função que vai tocar o som desejado 
    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    //quando a tecla "Space" ou "Enter" for detectada para baixo fazer a animação de botao ativo
    tecla.onkeydown = function (evento) {

        if  (evento.code === "Space" || evento.code === "Enter" ) {
             tecla.classList.add('ativa');
        }
       
    }
    //quando as teclas forem levantadas o botão deixa de ter a animação e volta a sua forma inicial
    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    }


}