const productos = [
    {nombre: "Remera", precio: 500, id: 1, img: "./img/remera.jpg"},
    {nombre: "Buzo", precio: 800, id: 2, img: "./img/buzo.jpg"},
    {nombre: "Campera", precio: 1500, id: 3, img: "./img/campera.jpg"},
    {nombre: "Jeans", precio: 1200, id: 4, img: "./img/pantalon.jpg"},
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout( ()=> {
            resolve(productos)
        }, 2000)
    })
}