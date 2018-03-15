class Controller{
    constructor(tipo){
        this.containers = document.querySelectorAll(".container-formula");
        if(tipo == 'next'){
            this.containerDelete = this.containers[0];
            this.containerShow = document.querySelector(".container-next");
        }

        if(tipo == 'prev'){
            this.containerDelete = this.containers[this.containers.length - 1];
            this.containerShow = document.querySelector(".container-prev");
        }

        console.log(this.containerDelete);
        console.log(this.containerShow);
    }
}
