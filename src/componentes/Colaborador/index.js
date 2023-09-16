import "./Colaborador.css";
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai";

// creo el elemento colaborador

const Colaborador = (props) => {
    const {nombre, puesto, foto, equipo, id, fav} = props.datos
    const {colorPrimario, eliminarColaborador, like} = props
    return <div className="colaborador">
        <AiFillCloseCircle className="eliminar" onClick={() => eliminarColaborador(id)} />
        <div className="encabezado" style={{backgroundColor: colorPrimario}}>
            <img src={foto} alt={nombre}/>
            {/** uso mi imagen del perfil cargado en GH */}
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>

            { fav ? <AiFillHeart color="red" onClick={() => like(id)} /> : <AiOutlineHeart onClick={() => like(id)} />}
            {/* si fav es verdadero se mostrara corazon rojo, si no corazon vacio */}
        </div>
    </div>
}

export default Colaborador;
// lo uso en index.js de equipo
