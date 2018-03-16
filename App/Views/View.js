class View{
    contructor(){
        throw new error("Esta classe nao pode ser instanciada");
    }

    static ShowSliders(models){
        models.containerAppear.classList.remove("container-formula--desaparece");

        models.containerDelete.classList.add("container-formula--desaparece");
    }
}
