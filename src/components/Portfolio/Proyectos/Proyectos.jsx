import ProyectoDos from "./ProyectoDos/ProyectoDos";
import ProyectoUno from "./ProyectoUno/ProyectoUno";
import style from "./Proyectos.module.css";

const Proyectos = () => {

    return (
        <div className={style.contProyectos} id="proyectos">
                <fieldset className={style.proyectos}>

                    <div className={style.divFlecha}>
                        <h3 className={style.flecha}>➤</h3>
                        <a href="#portfolio" className={style.aFlecha}>
                            <h3 className={style.home}>Home</h3>
                        </a>
                    </div>
                    <legend>
                        <h1 className={style.titulo}>PROYECTOS</h1>
                    </legend>

                    <ProyectoUno />
                    <ProyectoDos />

                </fieldset>
        </div>
    )
};

export default Proyectos