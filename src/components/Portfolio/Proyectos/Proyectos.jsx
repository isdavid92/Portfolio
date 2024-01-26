import style from "./Proyectos.module.css";
import moveon from "../../../Assets/img/moveon.jpg";
import { useState } from "react";

const Proyectos = () => {

    const [isFullScreen, setIsFullScreen] = useState(false);

    const contFullScreen = () => !isFullScreen ? style.contPantallazo : style.contPantallazoFull;

    const pantallazoFullScreen = () => !isFullScreen ? style.pantallazo : style.pantallazoFull

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
                    <div className={style.relleno}>
                        <div className={contFullScreen()} onClick={() => !isFullScreen ? setIsFullScreen(true) : setIsFullScreen(false)}>
                            <img className={pantallazoFullScreen()} onClick={() => !isFullScreen ? setIsFullScreen(true) : setIsFullScreen(false)} src={moveon} alt="henry" />
                        </div>
                    </div>
                    <div className={style.encabezado}>
                        <h2 className={style.nombre}>MoveOn</h2>
                        <h3 className={style.fecha}>Sep 2023</h3>
                        <h5 className={style.descripcion}>Tienda virtual que permite la compra de productos deportivos, suplementos y   proteína.
                            Cuenta con dos vistas, usuario, y admin, con ambos permite registrarse, comprar, ver los productos, filtrarlos, modificar el perfil. Siendo admin podrá agregar y modificar productos, ver usuarios registrados y actualiza el estado de la compra.</h5>
                        <a href="https://github.com/fernandoiosono/HENRYPF?tab=readme-ov-file" target="blank" className={style.a}>
                            <p className={style.ver}>{"Ir al repositorio >>"}</p>
                        </a>
                    </div>
                </div>

            </fieldset>
        </div>
    )
};

export default Proyectos