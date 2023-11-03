window.addEventListener("load", function(){

    let botonResumen=document.getElementById("botonResumen");
    let botonBorrar=document.getElementById("botonBorrar");
    let cat=document.getElementById("categoria");

    let totalapagar=document.querySelector(".text-totalapagar")
    botonResumen.addEventListener("click", function(){
        if(cat.value == "Estudiante"){
            totalapagar.innerHTML+=200-(200*80)/100;
        }
        if(cat.value == "Trainee"){
            totalapagar.innerHTML+=200-(200*50)/100;
        }
        if(cat.value=="Junior"){
            totalapagar.innerHTML+=200-(200*15)/100;
        }
    })
})