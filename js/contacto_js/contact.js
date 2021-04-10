//----------------ENVIO LOS DATOS MEDIANTE EL METODO GET-------------//
$( document ).ready(function(){
    const URLpost = "https://jsonplaceholder.typicode.com/posts"
    let datos_form = {nombre:$("#name").val(),
                          email:$("#email").val(),
                          telefono:$("#tel").val(),
                          consulta:$("#text").val()}
        $("#button_contact_form").click(() =>{
            $.ajax({
                method: "POST",
                url:  URLpost,
                data: datos_form,
                
            });
        cargar_datos();
        });  
});

function cargar_datos(){

    let nombre = document.getElementById("name").value;
    
    let email = document.getElementById("email").value;
    
    let telefono = document.getElementById("tel").value;
   
    let consulta = document.getElementById("text").value;
    
    console.log("Usuario: " + nombre + "\nEmail:  " + email + "\nCelular: " + telefono + "\nConsulta: " + consulta);
}
//Mostrar divs 
/*var divs = $ ("div");
for (var i=0; i<divs.length; i++){
    console.log(divs[i]);
}*/