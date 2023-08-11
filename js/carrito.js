

    const iniCarrito = () => {
    modalCarrito.innerHTML = "";
    modalCarrito.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h1 class="modal-header-titulo">Carrito:</h1>
    `;
    modalCarrito.append(modalHeader);


    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";


    modalbutton.addEventListener ("click", () => {
        modalCarrito.style.display = "none"
    });


    modalHeader.append(modalbutton);
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
    

        let eliminar = document.createElement("span");
        eliminar.innerText = "❌";
        eliminar.className = "borrar-bici";
        carritoContenido.append(eliminar);

        eliminar.addEventListener("click", eliminarBici);
    });

    
    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    const totalCompra = document.createElement("div")
    totalCompra.className = "total-contenido"
    totalCompra.innerHTML = `Total a pagar: $${total}`;
    console.log(total);
    modalCarrito.append(totalCompra);

};


verCarrito.addEventListener("click" , iniCarrito);


const eliminarBici = () => {
    const buscarId = carrito.find ((element) => element.id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== buscarId;
    });

    carritoContador();
    saveLocal();
    iniCarrito();
};


const carritoContador = () => {
    cantidadCarrito.style.display = "block"
    const carritoLength = carrito.length;
    localStorage.setItem("carritoLength", JSON.stringify(carritoLength))
    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};

carritoContador();
