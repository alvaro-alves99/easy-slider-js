function numberRows(number, classe){
    let containers = document.querySelectorAll("." + classe);
    console.log(containers);

    if(number == containers.length){
        throw new Error("Number of columns cannot be equal to containers length");
    }

    let numberRemove = ((containers.length - 1) - number) + containers.length - 1;
    var posicoesDeletadas = [];

    for(i = numberRemove; i ++; i <containers.length){
        posicoesDeletadas.push(i);
    }

    console.log(posicoesDeletadas);

    console.log(numberRemove);
}

numberRows(3, "container-formula");
