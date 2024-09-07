function isFibonacci(numero) {
    let sequencia = [0, 1];
    let proximo = 1;

    while(proximo <= numero) {
        sequencia.push(proximo);
        proximo = sequencia[sequencia.length -1] + sequencia[sequencia.length -2];
    }
    return sequencia.includes(numero);
}

let numero = 11;
if(isFibonacci(numero))
    console.log(`${numero} faz parte da sequência de Fibonacci!`)
else
    console.log(`${numero} não faz parte da sequência de Fibonacci!`)