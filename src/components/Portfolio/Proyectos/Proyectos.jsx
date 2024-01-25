import style from "./Proyectos.module.css";
import moveon from "../../../Assets/img/moveon.jpg";

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

                <div className={style.card}>
                    <div className={style.contPantallazo}>
                        <a href="https://www.soyhenry.com/" target="blank" className={style.a}>
                            <img className={style.logo} src={moveon} alt="henry" />
                        </a>
                    </div>
                    <div className={style.encabezado}>
                        <h3 className={style.institucion}>Soy Henry</h3>
                        <h3 className={style.logro}>Programador Web Full Stack</h3>
                        <h4 className={style.fecha}>Mar 2023 - Nov 2023</h4>
                    </div>
                </div>

            </fieldset>
        </div>
    )
};

export default Proyectos