function fibonacciSerie(num1, num2, limite) {
    //los tres parametros que usaremos, el tercero siento el limite
    let fibonacciArray = [];
    //aqui é onde vai se armanezar os resultados
    let a = num1;
    let b = num2;
    //Os dois numeros que serao a engrenagem

    while (fibonacciArray.length < limite) {
        //Fica repetindo ate chegar ao limite e tudo que temos e que pedimos que é o 3 parametro
        let next = a + b;
        //Criamos uma variante pra ficar somando os 2 numeros propostos
        fibonacciArray.push(next);
        //o push vai ficar adicionando elementos no arrary
        a = b;
        b = next;
        //eai o a vai virar b
        //e o b vai passar pro proximo que é a soma do a e b
    }
    fibonacciArray.forEach(num => console.log(num));
    //ficar mostrando cada numero que está tendo resultado, será os numeros citados

    return fibonacciArray;
}

fibonacciSerie(1, 2, 100);