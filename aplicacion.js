//DIVs padres HTML

const contenidoTienda = document.getElementById("contenidoTienda");
const verCarrito = document.getElementById("verCarrito");
const modalCarrito = document.getElementById("modalCarrito");

//Inicializamos el carrito de compras.

let carrito = []; 

//Utilizaremos el método For Each para recorrer nuestro array y generando la visión del mismo en el navegador.

bicis.forEach((bici) => {
    let contenido = document.createElement ("div");
    contenido.className = "cardBici";
    contenido.innerHTML = `
    <img src="${bici.img}">
    <h3>${bici.nombre}</h3>
    <p class="precio">$${bici.precio}</p>
    `;

    contenidoTienda.append(contenido);

//Creamos botón de compra.

let comprar = document.createElement("button");
comprar.innerText = "comprar";
comprar.className = "comprar";

contenido.append(comprar);

//Le generamos funcionalidad al botón de compra mediante el evento.

comprar.addEventListener("click" , () =>{
    carrito.push({
        id: bici.id,
        img: bici.img,
        nombre: bici.nombre,
        precio: bici.precio,
    })
})
});

//Generamos un modal del carrito, donde irán los datos del evento al escojer los productos a comprar.

verCarrito.addEventListener("click" , () => {
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
        `;

        modalCarrito.append(carritoContenido);
    });

    //Ahora procedemos con el cálculo del total de la compra.
    
    const total = carrito.reduce((acc, el) => acc + el.precio, 0);

    const totalCompra = document.createElement("div")
    totalCompra.className = "total-contenido"
    totalCompra.innerHTML = `Total a pagar: $${total}`;
    console.log(total);
    modalCarrito.append(totalCompra);
});