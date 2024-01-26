import style from "./ProyectoUno.module.css";
import carrito from "../../../../Assets/img/carrito.png";
import home from "../../../../Assets/img/home.png";
import detalle from "../../../../Assets/img/detalle.png";
import { useState } from "react";

const ProyectoUno = () => {

    const [isFullScreen1, setIsFullScreen1] = useState(false);
    const [isFullScreen2, setIsFullScreen2] = useState(false);
    const [isFullScreen3, setIsFullScreen3] = useState(false);

    const contFullScreen1 = () => !isFullScreen1 ? style.contPantallazo1 : style.contPantallazoFull;
    const contFullScreen2 = () => !isFullScreen2 ? style.contPantallazo2 : style.contPantallazoFull;
    const contFullScreen3 = () => !isFullScreen3 ? style.contPantallazo3 : style.contPantallazoFull;

    const pantallazoFullScreen1 = () => !isFullScreen1 ? style.pantallazo : style.pantallazoFull;
    const pantallazoFullScreen2 = () => !isFullScreen2 ? style.pantallazo : style.pantallazoFull;
    const pantallazoFullScreen3 = () => !isFullScreen3 ? style.pantallazo : style.pantallazoFull;

    return (
        <div className={style.proyectoUno}>
            <div className={style.pantallazos}>
                <div className={contFullScreen1()} onClick={() => !isFullScreen1 ? setIsFullScreen1(true) : setIsFullScreen1(false)}>
                    <img className={pantallazoFullScreen1()} onClick={() => !isFullScreen1 ? setIsFullScreen1(true) : setIsFullScreen1(false)} src={home} alt="food1" />
                </div>
                <div className={contFullScreen2()} onClick={() => !isFullScreen2 ? setIsFullScreen2(true) : setIsFullScreen2(false)}>
                    <img className={pantallazoFullScreen2()} onClick={() => !isFullScreen2 ? setIsFullScreen2(true) : setIsFullScreen2(false)} src={carrito} alt="food2" />
                </div>
                <div className={contFullScreen3()} onClick={() => !isFullScreen3 ? setIsFullScreen3(true) : setIsFullScreen3(false)}>
                    <img className={pantallazoFullScreen3()} onClick={() => !isFullScreen3 ? setIsFullScreen3(true) : setIsFullScreen3(false)} src={detalle} alt="food3" />
                </div>
            </div>
            <div className={style.encabezado}>
                <h3 className={style.fecha}>Sep 2023</h3>
                <h2 className={style.nombre}>MoveOn</h2>
                <h6 className={style.descripcion}>Tienda virtual que permite la compra de productos deportivos, suplementos y   proteína. Cuenta con dos vistas, usuario, y admin, con ambos permite registrarse, comprar, ver los productos, filtrarlos, modificar el perfil. Siendo admin podrá agregar y modificar productos, ver usuarios registrados y actualiza el estado de la compra.</h6>
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