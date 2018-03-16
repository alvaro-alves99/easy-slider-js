class Model{
    constructor(){
        throw new Error("esta classe nao pode ser instanciada");
    }

    static DefineSliders(type, containersShow, containersHidden){
        let containerDelete = null;
        let containerAppear = null;

        if(type == 'next'){
            containerDelete = containersShow[0];
            containerAppear = containersHidden[containersHidden.length - 1];
        }

        if(type == 'prev'){
            containerDelete = containersShow[containersShow.length - 1];
            containerAppear = containersHidden[0];
        }

        return {containerAppear, containerDelete};

        teste++;
    }
}
