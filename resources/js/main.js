window.addEventListener("load", function(){

    let botonResumen=document.getElementById("botonResumen");
    let botonBorrar=document.getElementById("botonBorrar");
    let cat=document.getElementById("categoria");

    let totalapagar=document.querySelector(".text-totalapagar")

    botonResumen.addEventListener("click", function(event){

        if (cat.value == "Estudiante" || cat.value == "Trainee" || cat.value == "Junior"){
            let resultado;
            switch (cat.value){
                case "Estudiante":
                    resultado=200-(200*80)/100
                break;
                case "Trainee":
                    resultado=200-(200*50)/100;
                break;
                case "Junior":
                    resultado=200-(200*15)/100;

                break;
            }
            totalapagar.innerText = "Total a pagar: $" + resultado 
        }else{
            totalapagar.innerText = "Cálculo imposible"
        }
    })
})