const Promesas = () =>
{
    console.log("Tarea 1")
    console.log("Tarea 2")


    setTimeout(() => {
        console.log("Tarea A");
    }, 2000)

    setTimeout(() => {
        console.log("Tarea B");
    }, 1000)

    const tusPromesas = (estado) => {
        return new Promise ((resolve, reject) => {
            if(estado) {
                resolve("Promesa cumplida")
            } else {
                reject("Promesa rechazada")
            }
        })
    }

    console.log(tusPromesas(false));


    tusPromesas(false)
        .then((res)=>{
            console.log(res);
        })
        .catch((error)=>{
            console.error(error);
        })


    const array = ["Tinki Winki", "Lala", "Po"];

    const solicitarTeletubbies = (estado) => {
        return new Promise ((resuelto, rechazado) => {
           if(estado) {
               resuelto(array);
           } else {
            rechazado("No hay teletubbis");
           }
        })
    }

    solicitarTeletubbies(false)
          .then(respuesta => {
            console.table(respuesta);
          })
          .catch(error => console.error(error))
          .finally( () => console.log("Proceso finalizado"))


  return (
    <div>Promesas</div>
  )
}

export default Promesas