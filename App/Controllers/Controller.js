class Controller{
    constructor(type){
        let myArray = Array.from(document.querySelectorAll(".container-formula"));

        myArray.reverse();

        console.log(myArray);

        this.containersTotal = myArray;

        this.containersShow = Array.from(document.querySelectorAll(".container-formula:not(.container-formula--desaparece)"));

        this.containersHidden = Array.from(document.querySelectorAll(".container-formula--desaparece"));

        this.model = Model.DefineSliders(type, this.containersShow, this.containersHidden);

        this.view = View.ShowSliders(this.model);

        console.log(this.containersShow);
        console.log(this.containersHidden);
    }
}
