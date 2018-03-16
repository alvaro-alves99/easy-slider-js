var teste = 0;

function numberRows(number, classe){
    let containers = document.querySelectorAll("." + classe);

    if(number == containers.length){
        throw new Error("Number of columns cannot be equal to containers length");
    }

    let numberRemove = containers.length - number;
    let posicoesDeletadas = [];

    while(numberRemove > 0){
        posicoesDeletadas.push(containers.length - numberRemove);
        numberRemove--;
    }

    posicoesDeletadas.forEach(function(n){
        containers[n].classList.add("container-formula--desaparece");
    });

}

numberRows(4, "container-formula");
