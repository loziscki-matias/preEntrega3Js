//Generamos un modal del carrito, donde irán los datos del evento al escojer los productos a comprar.

    const iniCarrito = () => {
    modalCarrito.innerHTML = "";
    modalCarrito.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h1 class="modal-header-titulo">Carrito:</h1>
    `;
    //Anexamos el header al modal.
    modalCarrito.append(modalHeader);

    //Creamos un botón para el header, seguidamente anexándolo.

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";

    //Añadimos evento para el botón, para poder cerrar el modal.

    modalbutton.addEventListener ("click", () => {
        modalCarrito.style.display = "none"
    });


    modalHeader.append(modalbutton);
    //Generamos el recorrido del carrito de los productos que se eligieron, después agregándo la lógica al modal.
    carrito.forEach((bici) => {
        let carritoContenido = document.createElement("div");
        carritoContenido.className = "modal-contenido";
        carritoContenido.innerHTML = `
            <img src="${bici.img}">
            <h3>${bici.nombre}</h3>
            <p> ${bici.precio}</p>
            <p>Cantidad: ${bici.cantidad}</p>
            <p> Total: ${bici.cantidad * bici.precio}</p>
        `;

        modalCarrito.append(carritoContenido);
    
        //Creamos un botón para eliminar productos.

        let eliminar = document.createElement("span");
        eliminar.innerText = "❌";
        eliminar.className = "borrar-bici";
        carritoContenido.append(eliminar);

        eliminar.addEventListener("click", eliminarBici);
    });

    //Ahora procedemos con el cálculo del total de la compra.
    
    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    const totalCompra = document.createElement("div")
    totalCompra.className = "total-contenido"
    totalCompra.innerHTML = `Total a pagar: $${total}`;
    console.log(total);
    modalCarrito.append(totalCompra);

};

//Invoco a mi función de inicializar el carrito mediante un evento para poder verlo.

verCarrito.addEventListener("click" , iniCarrito);

//Creamos una función para el botón de eliminar productos.

const eliminarBici = () => {
    const buscarId = carrito.find ((element) => element.id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== buscarId;
    });

    iniCarrito();
};

//Creamos una función para el contador del Carrito.

const carritoContador = () => {
    cantidadCarrito.style.display = "block"
    cantidadCarrito.innerText = carrito.length;
}
