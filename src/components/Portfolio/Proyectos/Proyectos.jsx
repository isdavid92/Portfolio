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
                        <img className={style.pantallazo} src={moveon} alt="henry" />
                    </div>
                    <div className={style.encabezado}>
                        <h3 className={style.nombre}>moveon</h3>
                        <h3 className={style.logro}>Programador Web Full Stack</h3>
                        <h4 className={style.fecha}>Sep 2023</h4>
                        <a href="https://certificates.soyhenry.com/new-cert?id=ebb3efb79682b045e43b41f61ed915a44a595116857cc2a4d4b7a6885fff8b44" target="blank" className={style.a}>
                            <p className={style.ver}>{"Ver repositorio aquí >>"}</p>
                        </a>
                    </div>
                </div>

            </fieldset>
        </div>
    )
};

export default Proyectos