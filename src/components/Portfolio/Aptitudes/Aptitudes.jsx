import style from "./Aptitudes.module.css";
import henry from "../../../Assets/img/soyHenry.jpg";
import tecnicam from "../../../Assets/img/tecnicam.jpg";
import als from "../../../Assets/img/als.jpg";
import energitelco from "../../../Assets/img/energitelco.jpg";
import renault from "../../../Assets/img/renault.jpg";

const Aptitudes = () => {
    return (
        <div className={style.contAptitudes} id="aptitudes">
            <fieldset className={style.aptitudes}>

                <div className={style.divFlecha}>
                    <h3 className={style.flecha}>➤</h3>
                    <a href="#portfolio" className={style.aFlecha}>
                        <h3 className={style.home}>Home</h3>
                    </a>
                </div>

                <legend>
                    <h1 className={style.titulo}>Aptitudes y habilidades</h1>
                </legend>

                <div className={style.contApt}>
                    <div className={style.apt}>
                        <h3 className={style.tituloApt}>Conocimiento en programación web:</h3>
                    </div>
                    <h4 className={style.descripApt}>Javascript - HTML - CSS - React - Redux - PostgreSQL - NodeJS - ExpressJS - Sequelize</h4>
                </div>

                <div className={style.contApt}>
                    <div className={style.apt}>
                        <h3 className={style.tituloApt}>Desarrollo frontend:</h3>
                    </div>
                    <h4 className={style.descripApt}>Creación de interfaces de usuario atractivas y funcionales</h4>
                </div>

                <div className={style.contApt}>
                    <div className={style.apt}>
                        <h3 className={style.tituloApt}>Desarrollo backend:</h3>
                    </div>
                    <h4 className={style.descripApt}>Habilidades para crear servidores y bases de datos.</h4>
                </div>

                <div className={style.contApt}>
                    <div className={style.apt}>
                        <h3 className={style.tituloApt}>Control de versiones:</h3>
                    </div>
                    <h4 className={style.descripApt}>Trabajo con sistemas de control de versiones como Git.</h4>
                </div>

                <div className={style.contApt}>
                    <div className={style.apt}>
                        <h3 className={style.tituloApt}>Experiencia en el uso de herramientas y frameworks:</h3>
                    </div>
                    <h4 className={style.descripApt}>Habilidades para trabajar con herramientas y frameworks</h4>
                </div>

                <div className={style.contApt}>
                    <div className={style.apt}>
                        <h3 className={style.tituloApt}>Conocimientos de seguridad:</h3>
                    </div>
                    <h4 className={style.descripApt}>habilidades para proteger aplicaciones web de posibles vulnerabilidades.</h4>
                </div>

                <div className={style.contApt}>
                    <div className={style.apt}>
                        <h3 className={style.tituloApt}>Resolución de problemas:</h3>
                    </div>
                    <h4 className={style.descripApt}>Habilidades para identificar y solucionar problemas en aplicaciones web.</h4>
                </div>

                <div className={style.contApt}>
                    <div className={style.apt}>
                        <h3 className={style.tituloApt}>Trabajo en equipo:</h3>
                    </div>
                    <h4 className={style.descripApt}>Habilidades para colaborar con otros desarrolladores y diseñadores.</h4>
                </div>

                <div className={style.contApt}>
                    <div className={style.apt}>
                        <h3 className={style.tituloApt}>Aprender y adaptarse rápidamente:</h3>
                    </div>
                    <h4 className={style.descripApt}>Habilidades para mantenerse actualizado con las últimas tecnologías y tendencias.</h4>
                </div>

                <div className={style.contApt}>
                    <div className={style.apt}>
                        <h3 className={style.tituloApt}>Comunicación efectiva:</h3>
                    </div>
                    <h4 className={style.descripApt}>Habilidades para comunicarse claramente con otros miembros del equipo y clientes.</h4>
                </div>

                <div className={style.contApt}>
                    <div className={style.apt}>
                        <h3 className={style.tituloApt}>Pensamiento crítico:</h3>
                    </div>
                    <h4 className={style.descripApt}>Habilidades para analizar información y tomar decisiones informadas.</h4>
                </div>

                <div className={style.contApt}>
                    <div className={style.apt}>
                        <h3 className={style.tituloApt}>Gestión del tiempo:</h3>
                    </div>
                    <h4 className={style.descripApt}>Habilidades para administrar el tiempo de manera efectiva y cumplir con los plazos.</h4>
                </div>

                <div className={style.contApt}>
                    <div className={style.apt}>
                        <h3 className={style.tituloApt}>Liderazgo:</h3>
                    </div>
                    <h4 className={style.descripApt}>Habilidades para liderar y motivar a otros miembros del equipo.</h4>
                </div>

                <div className={style.contApt}>
                    <div className={style.apt}>
                        <h3 className={style.tituloApt}>Creatividad:</h3>
                    </div>
                    <h4 className={style.descripApt}>Habilidades para pensar fuera de la caja y encontrar soluciones innovadoras.</h4>
                </div>

                <div className={style.contApt}>
                    <div className={style.apt}>
                        <h3 className={style.tituloApt}>Organización:</h3>
                    </div>
                    <h4 className={style.descripApt}>Habilidades para mantenerse organizado y enfocado en los objetivos.</h4>
                </div>

                <div className={style.contApt}>
                    <div className={style.apt}>
                        <h3 className={style.tituloApt}>Integridad:</h3>
                    </div>
                    <h4 className={style.descripApt}>Habilidades para actuar con honestidad y ética en el trabajo.</h4>
                </div>

                <div className={style.contApt}>
                    <div className={style.apt}>
                        <h3 className={style.tituloApt}>Toma de decisiones:</h3>
                    </div>
                    <h4 className={style.descripApt}>Habilidades para tomar decisiones informadas y efectivas en situaciones de trabajo.</h4>
                </div>

                <div className={style.contApt}>
                    <div className={style.apt}>
                        <h3 className={style.tituloApt}>Capacidad de trabajo con datos</h3>
                    </div>
                    <h4 className={style.descripApt}>Habilidades para trabajo con bases de datos relacionales.</h4>
                </div>

            </fieldset>
        </div>
    )
};

export default Aptitudes