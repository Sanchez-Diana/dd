const mostrarProductos = (datos) => {
    let productos = "";
    const contenedor = document.querySelector('#contenedor2');
    datos.forEach(dato => {
        productos += `
          <div class="card m-3" style="width: 100%; max-width: 250px;">
            <img src="${dato.imageUrl}" class="card-img-top border border-black" alt="...">
            <div class="card-body">
              <h5 class="card-title">${dato.nombre}</h5>
              <p class="card-text">${dato.descripcion}</p>
              <a href="#" class="btn btn-primary">Comprar</a>
            </div>
          </div>`;
    });
    contenedor.innerHTML = productos;
};

fetch('./productos.json')
    .then(respuesta => {
        if (!respuesta.ok) {
            throw new Error('Error en la solicitud de productos: ' + respuesta.status);
        }
        return respuesta.json();
    })
    .then(datos => mostrarProductos(datos))
    .catch(error => {
        console.error('Hubo un problema con la solicitud:', error);
    });
