//TURISTA-EJECUTIVO-PRIMERA_CLASE
function crear_componente(viaje){
        return  `<div class="col-lg-4 col-md-6 mb-4">
                    <div class="card h-100">
                    <a href="#" id="a_turist_KJ"><img class="card-img-top" src="${viaje.imagen}" alt=""></a>
                    <div class="card-body">
                        <h4 class="card-title">
                        <a href="#" id="viaje1">${viaje.nombre}</a>
                        </h4>
                        <h5>${viaje.precio}</h5>
                        <p class="card-text" id="p_turist_KJ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                    </div>
                    <button id=${viaje.id} type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Comprar</button>
                    </div>
                </div>`
}