//DIVs padres HTML

const contenidoTienda = document.getElementById("contenidoTienda");
const verCarrito = document.getElementById("verCarrito");
const modalCarrito = document.getElementById("modalCarrito");
const cantidadCarrito = document.getElementById("cantidadCarrito");

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
    //Creamos una constante con el cual buscamos productos repetidos, donde si se encuentra o no id iguales, nos retornará true o false.
    const repetir = carrito.some((repetirBici) => repetirBici.id === bici.id);

    if (repetir){
        carrito.map((prod) => {
            if(prod.id === bici.id){
                prod.cantidad++;
            }
        });
    }else{
    carrito.push({
        id: bici.id,
        img: bici.img,
        nombre: bici.nombre,
        precio: bici.precio,
        cantidad: bici.cantidad,
    });
    }
    console.log (carrito);
    carritoContador();
    iniCarrito();
});
});


