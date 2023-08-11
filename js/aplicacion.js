
const contenidoTienda = document.getElementById("contenidoTienda");
const verCarrito = document.getElementById("verCarrito");
const modalCarrito = document.getElementById("modalCarrito");
const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const getBicis = async () => {
    const res = await fetch("data.json");
    const data = await res.json();
    console.log(data)

    data.forEach((bici) => {
        let contenido = document.createElement("div");
        contenido.className = "cardBici";
        contenido.innerHTML = `
        <img src="${bici.img}">
        <h3>${bici.nombre}</h3>
        <p class="precio">$${bici.precio}</p>
        `;

        contenidoTienda.append(contenido);


        let comprar = document.createElement("button");
        comprar.innerText = "comprar";
        comprar.className = "comprar";

        contenido.append(comprar);


        comprar.addEventListener("click", () => {
            const repetir = carrito.some((repetirBici) => repetirBici.id === bici.id);

            if (repetir) {
                carrito.map((prod) => {
                    if (prod.id === bici.id) {
                        prod.cantidad++;
                    }
                });
            } else {
                carrito.push({
                    id: bici.id,
                    img: bici.img,
                    nombre: bici.nombre,
                    precio: bici.precio,
                    cantidad: bici.cantidad,
                });
            }
            console.log(carrito);
            console.log(carrito.length);
            carritoContador();
            iniCarrito();
            saveLocal();
        });
    });
};

getBicis();

const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};


