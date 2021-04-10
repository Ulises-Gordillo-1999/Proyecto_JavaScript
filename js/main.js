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

// --------- Prueba Metodo Post ------------ //

/*$( document ).ready(function() {
  //Declaramos la url del API
  const APIURL = 'https://jsonplaceholder.typicode.com/posts' ; 
  //Declaramos la información a enviar
  const infoPost =  { nombre: "Ana", profesion: "Programadora" }
  //Agregamos un botón con jQuery
  $("#api_1").prepend('<button id="btn1" class="btn btn-danger">ENVIAR API</button>');
  //Escuchamos el evento click del botón agregado
  $("#btn1").click(() => { 
      $.ajax({
          method: "POST",
          url:  APIURL,
          data: infoPost,
          success: function(respuesta){
              $("#api_r").prepend(`<div class="col-sm" style="color: whitesmoke;">${respuesta.nombre}</div>`);
          }
      });
  });
});*/
// -----------------------------------------//

//ANIMACIONES

/*$("#texto_venta_viajes")
.animate({fontSize: '2cm', opacity:'0.4'}, "slow",()=>{
    console.log("FIN DE PRIMERA ANIMACION");
  })
    .delay(4000)
      .animate({fontSize: '1cm', opacity:'1'},"slow",()=>{
        console.log("FIN DE SEGUNDA ANIMACION");
});*/

$("#menu_izq").hide();
$("#menu_izq").fadeIn(3200);


$("#texto_venta_viajes").hide();
$("#texto_venta_viajes").slideDown(4500);

// ------------------------------- //
/*$("#h1_turist")
.animate({fontSize: '2cm', opacity:'0.4'}, "slow",()=>{
    console.log("FIN DE PRIMERA ANIMACION");
  })
    .delay(4000)
      .animate({fontSize: '1cm', opacity:'1'},"slow",()=>{
        console.log("FIN DE SEGUNDA ANIMACION");
});*/

// ---------------------------------//
