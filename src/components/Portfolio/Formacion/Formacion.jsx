import style from "./Formacion.module.css";
import henry from "../../../Assets/img/soyHenry.jpg";
import sena from "../../../Assets/img/sena.jpg";

const Formacion = () => {
    return (
        <div className={style.contFormacion} id="contFormacion">
            <fieldset className={style.formacion}>

                <div className={style.divFlecha}>
                    <h3 className={style.flecha}>➤</h3>
                    <a href="#portfolio" className={style.aFlecha}>
                        <h3 className={style.home}>Home</h3>
                    </a>
                </div>

                <legend>
                    <h1 className={style.titulo}>FORMACION</h1>
                </legend>

                <div className={style.card}>
                    <div className={style.arriba}>
                        <div className={style.encabezado}>
                            <h3 className={style.institucion}>Soy Henry</h3>
                            <h3 className={style.logro}>Programador Web Full Stack</h3>
                            <h4 className={style.fecha}>Mar 2023 - Nov 2023</h4>
                            <a href="https://certificates.soyhenry.com/new-cert?id=ebb3efb79682b045e43b41f61ed915a44a595116857cc2a4d4b7a6885fff8b44" target="blank" className={style.a}>
                                <p className={style.ver}>{"Ver certificado aquí >>"}</p>
                            </a>
                        </div>
                        <div className={style.contLogo}>
                            <img className={style.logo} src={henry} alt="henry" />
                        </div>
                    </div>
                    <div className={style.abajo}>
                        <h5 className={style.apt}>JavaScript - HTML - CSS - React - Redux - Node.js - ExpressJS - Sequelize - PostgreSQL - Visual Studio Code</h5>
                    </div>
                </div>

                <div className={style.card}>
                    <div className={style.arriba}>
                        <div className={style.encabezado}>
                            <h3 className={style.institucion}>SENA</h3>
                            <h3 className={style.logro}>Tecnólogo Mecatrónico</h3>
                            <h4 className={style.fecha}>Jun 2012 – jun 2014</h4>
                            <a href="https://drive.google.com/file/d/1OY7Ycv1rr5n6Vk-BEIba6izgyDFqfa53/view?usp=sharing" target="blank" className={style.a}>
                                <p className={style.ver}>{"Ver certificado aquí >>"}</p>
                            </a>
                        </div>
                        <div className={style.contLogo}>
                            <img className={style.logo} src={sena} alt="henry" />
                        </div>
                    </div>
                    <div className={style.abajo}>
                        <h5 className={style.apt}> Diseño 3D - programacion Arduino - Mecánica - electricidad - Electrónica - Hidráulica - Neumática - Scanners ECU</h5>
                    </div>
                </div>

                <div className={style.card}>
                    <div className={style.arriba}>
                        <div className={style.encabezado}>
                            <h3 className={style.institucion}>SENA</h3>
                            <h3 className={style.logro}>Curso admin documental</h3>
                            <h4 className={style.fecha}>Nov 2021</h4>
                            <a href="https://drive.google.com/file/d/1yjVwt4voKDoSa-Ko3UA1r5-3O5y6_6dg/view?usp=sharing" target="blank" className={style.a}>
                                <p className={style.ver}>{"Ver certificado aquí >>"}</p>
                            </a>
                        </div>
                        <div className={style.contLogo}>
                            <img className={style.logo} src={sena} alt="henry" />
                        </div>
                    </div>
                    <div className={style.abajo}>
                        <h5 className={style.apt}>Administración Archivos - Clasificación documental - Historial de Documentación</h5>
                    </div>
                </div>

                <div className={style.card}>
                    <div className={style.arriba}>
                        <div className={style.encabezado}>
                            <h3 className={style.institucion}>SENA</h3>
                            <h3 className={style.logro}>Curso Inglés</h3>
                            <h4 className={style.fecha}>Jul 2013</h4>
                            <a href="https://drive.google.com/file/d/1pTaFJI97gsyJcNo7eSPmwIWvowxS9UfQ/view?usp=sharing" target="blank" className={style.a}>
                                <p className={style.ver}>{"Ver certificado aquí >>"}</p>
                            </a>
                        </div>
                        <div className={style.contLogo}>
                            <img className={style.logo} src={sena} alt="henry" />
                        </div>
                    </div>
                    <div className={style.abajo}>
                        <h5 className={style.apt}> Saludo - Colores - Lugares - Verbos - Objetos - Sustantivos - Adjetivos - oraciones - frases</h5>
                    </div>
                </div>

            </fieldset>
        </div>
    )
};

export default Formacion