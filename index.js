let productos=[];
fetch("./productos.json")
    .then(response => response.json())
    .then(dato => {
        productos = dato;
        cargarProductos(productos);
    })
const contenedorProductos = document.querySelector("#contenedor-productos");
let productosEnCarrito;
let productosEnCarritoLS = localStorage.getItem("ProductosEnCarrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
} else {
    productosEnCarrito = [];
}
function agregarEnCarrito(e){
Toastify({
        text: "Producto agregado",
        duration: 3000,
        close: true,
        gravity: "top", 
        position: "right", 
        stopOnFocus: true, 
        style: {
        background: "linear-gradient(to right, #897358, #897350)",
        borderRadius: "2rem",
        textTransform: "uppercase",
        fontSize: ".75rem"
        },
        offset: {
            x: '1.5rem', 
            y: '1.5rem' 
        },
        onClick: function(){} 
}).showToast();
const botonId = e.currentTarget.id;
const productoAgregado=productos.find(Producto => Producto.id === botonId);
    if(productosEnCarrito.some(Producto => Producto.id === botonId)){
        const index = productosEnCarrito.findIndex(Producto => Producto.id === botonId);
        productosEnCarrito[index].cantidad++; 
    }
    else{
        productosEnCarrito.push(productoAgregado)
    }
    localStorage.setItem("ProductosEnCarrito",JSON.stringify(productosEnCarrito));
}

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarEnCarrito);
    });
}

function cargarProductos(productos) {

contenedorProductos.innerHTML = "";

productos.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
        <a href=""><img "producto-imagen" src="${producto.imagen}" alt="${producto.nombre} height="300" width="300"></a>
        <div class="producto-detalles" "data">
            <h3 class="producto-titulo">${producto.nombre}</h3>
            <p class="producto-data">${producto.data}</p>
            <p class="producto-precio">from $${producto.precio}</p>
            <button class="producto-agregar" id="${producto.id}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
            </svg></button>
        </div>
        </div>
    `;
    contenedorProductos.append(div);
})

actualizarBotonesAgregar();
}

