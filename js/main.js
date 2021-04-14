$.getJSON("data/viajes.json", function(datos,estado){
  console.log(datos);
  console.log(estado);
  for(let viaje of datos){
    $("#contenidogenerado1").append(crear_componente(viaje));
}
});
$.getJSON("data/viajes1.json", function(datos,estado){
  console.log(datos);
  console.log(estado);
  for(let viaje of datos){
    $("#contenidogenerado2").append(crear_componente(viaje));
}
});
$.getJSON("data/viajes2.json", function(datos,estado){
  console.log(datos);
  console.log(estado);
  for(let viaje of datos){
    $("#contenidogenerado3").append(crear_componente(viaje));
}
});
$( document ).ready(function(){
  const URLpost = "https://jsonplaceholder.typicode.com/posts"
  let datos_form = {nombre:$("#nombre").val(),
                    apellido:$("#apellido").val(),
                    email:$("#email").val(),
                    telefono:$("#celular").val(),
                    sexo:$("#sexo").val(),
                    consulta:$("#text").val()}
      $("#enviar_modal").click(() =>{
          $.ajax({
              method: "POST",
              url:  URLpost,
              data: datos_form,
              
          });
      });  
});
$("#menu_izq").hide();
$("#menu_izq").fadeIn(3200);
//------------------------------//
$("#texto_venta_viajes").hide();
$("#texto_venta_viajes").slideDown(4500);