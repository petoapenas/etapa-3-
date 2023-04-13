function calculo (lista){
    //comparando a lista 
    for (let i = 0; i < lista.length; i++){
        let numero = lista[i]
        if (numero % 2 === 0   ){
            console.log(`o numero ${numero} é par`)
        }
        else{
            console.log(`o numero ${numero} é impar papai`)
            
        }
        
        

    }
}
//adcionando valor a lista
const lista = [2, 3, 6, 8, 25];
calculo(lista)



