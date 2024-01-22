import style from "./Formacion.module.css";
import logo from "../../../Assets/img/soyHenry.jpg";

const Formacion = () => {
    return (
        <div className={style.contFormacion} id="contFormacion">
            <fieldset className={style.formacion}>
                <legend>
                    <h1 className={style.titulo}>FORMACION</h1>
                </legend>
                <div className={style.info}>
                    <div className={style.arriba}>
                        <div className={style.encabezado}>
                            <h3 className={style.institucion}>Soy Henry</h3>
                            <h3 className={style.logro}>Programador Web Full Stack</h3>
                            <h4 className={style.fecha}>Mar 2023 - Nov 2023</h4>
                        </div>
                        <div className={style.contLogo}>
                            <img className={style.logo} src={logo} alt="henry" />
                        </div>
                    </div>
                    <div className={style.abajo}>
                        <h5 className={style.apt}>JavaScript - HTML - CSS - React - Redux - Node.js - ExpressJS - Sequelize - PostgreSQL </h5>
                    </div>
                </div>
            </fieldset>
        </div>
    )
};

export default Formacion