import style from "./ProyectoUno.module.css";
import moveon from "../../../../Assets/img/moveon.jpg";
import { useState } from "react";

const ProyectoUno = () => {

    const [isFullScreen, setIsFullScreen] = useState(false);

    const contFullScreen = () => !isFullScreen ? style.contPantallazo : style.contPantallazoFull;

    const pantallazoFullScreen = () => !isFullScreen ? style.pantallazo : style.pantallazoFull

    return (
        <div className={style.proyectoUno}>
            <div className={style.relleno}>
                <div className={contFullScreen()} onClick={() => !isFullScreen ? setIsFullScreen(true) : setIsFullScreen(false)}>
                    <img className={pantallazoFullScreen()} onClick={() => !isFullScreen ? setIsFullScreen(true) : setIsFullScreen(false)} src={moveon} alt="henry" />
                </div>
            </div>
            <div className={style.encabezado}>
                <h3 className={style.fecha}>Sep 2023</h3>
                <h2 className={style.nombre}>MoveOn</h2>
                <h6 className={style.descripcion}>Tienda virtual que permite la compra de productos deportivos, suplementos y   proteína.
                    Cuenta con dos vistas, usuario, y admin, con ambos permite registrarse, comprar, ver los productos, filtrarlos, modificar el perfil. Siendo admin podrá agregar y modificar productos, ver usuarios registrados y actualiza el estado de la compra.</h6>
                <a href="https://github.com/fernandoiosono/HENRYPF?tab=readme-ov-file" target="blank" className={style.a}>
                    <p className={style.ir}>{"Ir al repositorio >>"}</p>
                </a>
                <div className={style.aptitudes}>
                    <img className={style.aptitudImg} src="https://img.shields.io/badge/-JavaScript-05122A?style=flat&logo=javascript" alt="javascript" />
                    <img className={style.aptitudImg} src="https://img.shields.io/badge/-React-05122A?style=flat&logo=react" alt="react" />
                    <img className={style.aptitudImg} src="https://img.shields.io/badge/-Node.js-05122A?style=flat&logo=node.js" alt="node.js" />
                    <img className={style.aptitudImg} src="https://img.shields.io/badge/-Bootstrap-05122A?style=flat&logo=bootstrap&logoColor=563D7C" alt="bootstrap" />
                    <img className={style.aptitudImg} src="https://img.shields.io/badge/-CSS-05122A?style=flat&logo=CSS3&logoColor=1572B6" alt="CSS3" />
                    <img className={style.aptitudImg} src="https://img.shields.io/badge/-Git-05122A?style=flat&logo=git" alt="git" />
                    <img className={style.aptitudImg} src="https://img.shields.io/badge/-HTML-05122A?style=flat&logo=HTML5" alt="HTML5" />
                    <img className={style.aptitudImg} src="https://img.shields.io/badge/-GitHub-05122A?style=flat&logo=github" alt="github" />
                    <img className={style.aptitudImg} src="https://img.shields.io/badge/-Visual%20Studio%20Code-05122A?style=flat&logo=visual-studio-code&logoColor=007ACC" alt="VS code" />
                    <h6 className={style.aptitud}>PostgreSQL</h6>
                    <h6 className={style.aptitud}>Redux</h6>
                </div>
            </div>
        </div>
    )
};

export default ProyectoUno