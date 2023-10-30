window.addEventListener("load", function(){

    let botonResumen=document.getElementById("botonResumen");
    let cat=document.getElementById("categoria");
    console.log(cat);
    let totalapagar=document.querySelector(".text-totalapagar")
    botonResumen.addEventListener("click", function(){
        if(cat.value == "Estudiante"){
            totalapagar.innerHTML+=200-(200*80)/100;
        }
        else if(cat.value == "Trainee"){
            totalapagar.innerHTML+=200-(200*50)/100;
        }
        else if(cat.value=="Junior"){
            totalapagar.innerHTML+=200-(200*15)/100;
        }
    })
})