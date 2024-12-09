import ProyectoDos from "./ProyectoDos/ProyectoDos";
import ProyectoTres from "./ProyectoTres/ProyectoTres";
import ProyectoUno from "./ProyectoUno/ProyectoUno";
import style from "./Proyectos.module.css";

const Proyectos = () => {

    return (
        <div className={style.contProyectos} id="proyectos">
            <fieldset className={style.proyectos}>

                <legend>
                    <h1 className={style.titulo}>PROYECTOS</h1>
                </legend>

                <div className={style.divFlecha}>
                    <a href="#portfolio" className={style.aFlecha}>
                        <h3 className={style.flecha}>➤</h3>
                        <h3 className={style.home}>Home</h3>
                    </a>
                </div>

                <ProyectoUno />
                <ProyectoDos />
                <ProyectoTres />

            </fieldset>
        </div>
    )
};

export default Proyectos