import style from "./ProyectoDos.module.css";
import food1 from "../../../../Assets/img/food1.jpg";
import food2 from "../../../../Assets/img/food2.jpg";
import food3 from "../../../../Assets/img/food3.jpg";
import { useState } from "react";

const ProyectoDos = () => {

    const [isFullScreen, setIsFullScreen] = useState(false);

    const contFullScreen1 = () => !isFullScreen ? style.contPantallazo1 : style.contPantallazoFull1;
    const contFullScreen2 = () => !isFullScreen ? style.contPantallazo2 : style.contPantallazoFull2;
    const contFullScreen3 = () => !isFullScreen ? style.contPantallazo3 : style.contPantallazoFull3;

    const pantallazoFullScreen = () => !isFullScreen ? style.pantallazo : style.pantallazoFull;

    return (
        <div className={style.ProyectoDos}>
            <div className={style.pantallazos}>
                <div className={contFullScreen1()} onClick={() => !isFullScreen ? setIsFullScreen(true) : setIsFullScreen(false)}>
                    <img className={pantallazoFullScreen()} onClick={() => !isFullScreen ? setIsFullScreen(true) : setIsFullScreen(false)} src={food1} alt="food1" />
                </div>
                <div className={contFullScreen2()} onClick={() => !isFullScreen ? setIsFullScreen(true) : setIsFullScreen(false)}>
                    <img className={pantallazoFullScreen()} onClick={() => !isFullScreen ? setIsFullScreen(true) : setIsFullScreen(false)} src={food2} alt="food2" />
                </div>
                <div className={contFullScreen3()} onClick={() => !isFullScreen ? setIsFullScreen(true) : setIsFullScreen(false)}>
                    <img className={pantallazoFullScreen()} onClick={() => !isFullScreen ? setIsFullScreen(true) : setIsFullScreen(false)} src={food3} alt="food3" />
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

export default ProyectoDos