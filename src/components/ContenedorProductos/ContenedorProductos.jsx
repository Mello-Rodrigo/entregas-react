import Producto from "../Producto/Producto"

const ContenedorProductos = () => {
    const props = {
        nombre: "Campera",
        precio: 500
    };

  return (
    <div>
        <Producto nombre= "Remera" precio = {100}/>
        <Producto nombre= "Buzo" precio = {150} />
        <Producto {...props} />
    </div>
  )
}

export default ContenedorProductos
