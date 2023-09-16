import { useState } from "react";
import "./Formulario.css";
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Formulario = (props) => {

    // creo el estado para cada componente dentro del formulario, uno para CADA uno:
    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");

    const [titulo, setTitulo] = useState("");
    const [color, setColor] = useState("");

    // traigo de props la funcion registrarColaborador
    // para no usar props a cada rato, tantos puntos.
    const {registrarColaborador, crearEquipo} = props

    const manejarEnvio = (event) => {
        event.preventDefault(); 
        console.log("Manejar el envío");
    //Creo let que tendra como valor un objeto
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        } // estamos creando un objeto a partir de los valores que estamos ingresando
         //al dar click en crear, se creara objeto con los valores almacenados en el estado.
        registrarColaborador(datosAEnviar)
        }

    const manejarNuevoEquipo = (e =>{
        e.preventDefault() // manejar el envio con boton de form automatico del navegador
        crearEquipo({titulo, colorPrimario: color}) // mando la informacion ingresada en el form como si fuera un objeto
    })
    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo 
                titulo = "Nombre" 
                placeholder ="Ingresar nombre" 
                required
                valor={nombre} // paso por valor la variable declarada para el valor del estado que quiero actualizar
                setValor={setNombre} // paso por la funcion para actualizar el valor la actualizacion que quiero capturar
                />
            <Campo 
                titulo = "Puesto" 
                placeholder ="Ingresar puesto" 
                required
                valor={puesto} // paso por valor la variable declarada para el valor del estado que quiero actualizar
                setValor={setPuesto} // paso por la funcion para actualizar el valor la actualizacion que quiero capturar
            />
            <Campo     
                titulo = "Foto" 
                placeholder ="Ingresar enlace de foto" 
                required 
                valor={foto} // paso por valor la variable declarada para el valor del estado que quiero actualizar
                setValor={setFoto} // paso por la funcion para actualizar el valor la actualizacion que quiero capturar
            />
            <ListaOpciones 
                valor={equipo} 
                setEquipo ={setEquipo}
                equipos={props.equipos}  />
                {/* recibe la lista de equipos (la key titulo)*/}
            <Boton>
                Crear    
            </Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo 
                titulo = "Titulo" 
                placeholder ="Ingresar titulo" 
                required
                valor={titulo} // paso por valor la variable declarada para el valor del estado que quiero actualizar
                setValor={setTitulo} // paso por la funcion para actualizar el valor la actualizacion que quiero capturar
                />
            <Campo 
                titulo = "Color" 
                placeholder ="Ingresar el color en hexadecimal" 
                required
                valor={color} // paso por valor la variable declarada para el valor del estado que quiero actualizar
                setValor={setColor} // paso por la funcion para actualizar el valor la actualizacion que quiero capturar
                type="color" 
                />
            <Boton>Registrar equipo</Boton>
        </form>
    </section>
}

export default Formulario;