import "./ListaOpciones.css";

const ListaOpciones = (props) => {

//cons de nuestro select, cada vez que se modifica o se seleccione una nueva opción, 
//vamos a poder saber cuál es el respectivo opción con su respectivo valor
    const manejarCambio = (e) => {
        console.log("cambio", e.target.value)
        props.setEquipo(e.target.value)
    }


    return <div className ="lista-opciones">
        <label>Equipos</label>
{/*en el select coloco value, el valor por props 
y conecto con onChange a la funcion que manejara el cambio cada vez que cambie las option: */}
        <select value={props.valor} onChange={manejarCambio}>
{/* coloco una primer option fuera de la que intercambiaran,
options como ocultos al menos como para que nos den el mismo efecto que un placeholder de un input: */}
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option> 
            { props.equipos.map((equipo, index) => {
                return <option key={index}>{equipo}</option>
            } ) }
        </select>
    </div>
}

export default ListaOpciones;
