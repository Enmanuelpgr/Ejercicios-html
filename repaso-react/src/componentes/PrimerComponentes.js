import React, {useState} from 'react'

export const PrimerComponente = () => {

    //let nombre = "Enmanuel";
    let web = "enmanueldiazweb.es"

    const [nombre, setNombre] = useState("Enmanuel diaz");

    let cursos = [
        "Master en JavaScript",
        "Master en PHP", 
        "Master en React",
        "Master en CSS",

    ];

    const cambiarNombre = (nuevoNombre) => {
        setNombre(nuevoNombre);
    }

    return (
        <div>
            <h1>Mi primer componente</h1>
            <p>Este es un texto en mi componente</p>
            <p>Mi nombre es: <strong className ={nombre.length >= 4 ? 'verde' : 'rojo'}>{nombre}</strong></p>
            <p>Mi web es: {web}</p>

            <input type= "text" onChange={e => cambiarNombre(e.target.value)} placeholder='cambiar nombre'/>

            <button onClick={e => {
                console.log("El valor guardado en tu estado es:",  nombre);
            }}>Mostrar valor de estado</button>

            <button onClick={ e => cambiarNombre("ENMANUEL DIAZ WEB")}>
                Cambiar nombre
            </button>

            <h2>Cursos: </h2>
            <ul>
                {
                    cursos.map( (curso, indice) => {
                        return (<li key={indice}>
                            {curso}
                        </li>)
                    })
                }
            </ul>
        </div>
    )
}