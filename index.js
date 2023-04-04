class Producto {
    constructor(id,nombre,precio,imagen){
        this.id= id;
        this.nombre= nombre.toUpperCase();
        this.precio= parseFloat(precio);
        this.cantidad= 1;
        this.imagen=imagen;
    }
}
let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("ProductosEnCarrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
} else {
    productosEnCarrito = [];
}
function agregarEnCarrito(e){
const botonId = e.currentTarget.id;
const productoAgregado=catalogo.find(Producto => Producto.id === botonId);
    if(productosEnCarrito.some(Producto => Producto.id === botonId)){
        const index = productosEnCarrito.findIndex(Producto => Producto.id === botonId);
        productosEnCarrito[index].cantidad++; 
    }
    else{
        productosEnCarrito.push(productoAgregado)
    }
    localStorage.setItem("ProductosEnCarrito",JSON.stringify(productosEnCarrito));
}


// Cargar productos en catalogo 
const p1 = new Producto("ID1","Icon Pear Shape Diamond",7000,"/assets/img/joyas/destacado1.jpg");
const p2 = new Producto("ID2","Icon Round Diamond Earrings",13500,"/assets/img/joyas/destacado2.jpg");
const p3 = new Producto("ID3","Icon Cushion Cut Yellow Diamond Pendant",31500,"/assets/img/joyas/destacado3.jpg");
const p4 = new Producto("ID4","Icon Cushion Cut Yellow Diamond Ring",41000,"/assets/img/joyas/destacado4.jpg");
const catalogo = [p1,p2,p3,p4];

//evento click en agregar a carrito 
const buy1 = document.querySelector("#ID1");
buy1.addEventListener("click",agregarEnCarrito);
const buy2 = document.querySelector("#ID2");
buy2.addEventListener("click",agregarEnCarrito);
const buy3 = document.querySelector("#ID3");
buy3.addEventListener("click",agregarEnCarrito);
const buy4 = document.querySelector("#ID4");
buy4.addEventListener("click",agregarEnCarrito);