import style from "./Experiencia.module.css";
import henry from "../../../Assets/img/soyHenry.jpg";
import tecnicam from "../../../Assets/img/tecnicam.jpg";
import als from "../../../Assets/img/als.jpg";
import energitelco from "../../../Assets/img/energitelco.jpg";
import renault from "../../../Assets/img/renault.jpg";

const Experiencia = () => {
    return (
        <div className={style.experiencia} id="experiencia">
            <fieldset className={style.formacion}>

                <div className={style.divFlecha}>
                    <h3 className={style.flecha}>➤</h3>
                    <a href="#portfolio" className={style.aFlecha}>
                        <h3 className={style.home}>Home</h3>
                    </a>
                </div>

                <legend>
                    <h1 className={style.titulo}>EXPERIENCIA</h1>
                </legend>

                <div className={style.card}>
                    <div className={style.arriba}>
                        <div className={style.encabezado}>
                            <h3 className={style.institucion}>Soy Henry</h3>
                            <h3 className={style.logro}>Programador Web Full Stack</h3>
                            <h4 className={style.fecha}>Mar 2023 - Nov 2023</h4>
                        </div>
                        <div className={style.contLogo}>
                            <a href="https://www.soyhenry.com/" target="blank" className={style.a}>
                                <img className={style.logo} src={henry} alt="henry" />
                            </a>
                        </div>
                    </div>
                    <div className={style.abajo}>
                        <h5 className={style.apt}>En Henry aprendí a crear páginas web desde el Front End pasando por el Back End y
                            bases de datos relacionales. En mi perfil de GitHub se pueden ver los diferentes
                            proyectos finalizados tanto de forma individual como grupal.</h5>
                    </div>
                </div>

                <div className={style.card}>
                    <div className={style.arriba}>
                        <div className={style.encabezado}>
                            <h3 className={style.institucion}>TECNICAM cctv</h3>
                            <h3 className={style.logro}>Técnico Cámaras seguridad</h3>
                            <h4 className={style.fecha}>Jun 2015 - Actualmente</h4>
                        </div>
                        <div className={style.contLogo}>
                            <a href="https://i.ibb.co/pPh4x6X/tecnicam.jpg" target="blank" className={style.a}>
                                <img className={style.logo} src={tecnicam} alt="henry" />
                            </a>
                        </div>
                    </div>
                    <div className={style.abajo}>
                        <h6 className={style.apt}>Actualmente soy técnico independiente de cámaras de seguridad fundador de
                            TECNICAM cctv con servicio de venta, instalación y mantenimiento de circuitos
                            cerrados de televisión, con más de 8 años de experiencia en redes locales de internet,
                            configuración de equipos en red y seguridad electrónica.</h6>
                    </div>
                </div>

                <div className={style.card}>
                    <div className={style.arriba}>
                        <div className={style.encabezado}>
                            <h3 className={style.institucion}>ALS global</h3>
                            <h3 className={style.logro}>Supervisor de Mantenimiento</h3>
                            <h4 className={style.fecha}>Ene 2015 – Jun 2015</h4>
                        </div>
                        <div className={style.contLogo}>
                            <a href="https://www.alsglobal.com/es/" target="blank" className={style.a}>
                                <img className={style.logo} src={als} alt="henry" />
                            </a>
                        </div>
                    </div>
                    <div className={style.abajo}>
                        <h6 className={style.apt}>Mi labor era hacer mantenimiento a equipos electromecánicos de trituración y
                            pulverización de muestras de minería; estar pendiente del taller de mantenimiento,
                            llevar inventario de insumos y herramientas, dar inducciones a trabajadores nuevos
                            para el área de mantenimiento y cuando era necesario apoyar a los operarios de las
                            máquinas cuando había mucho para hacer.</h6>
                    </div>
                </div>

                <div className={style.card}>
                    <div className={style.arriba}>
                        <div className={style.encabezado}>
                            <h3 className={style.institucion}>Energitelco</h3>
                            <h3 className={style.logro}>Técnico instalador</h3>
                            <h4 className={style.fecha}>Jun 2014 – Dic 2014</h4>
                        </div>
                        <div className={style.contLogo}>
                            <a href="https://www.energitelco.com.co/" target="blank" className={style.a}>
                                <img className={style.logo} src={energitelco} alt="henry" />
                            </a>
                        </div>
                    </div>
                    <div className={style.abajo}>
                        <h5 className={style.apt}>Técnico de instalación de equipos de telecomunicaciones con experiencia en trabajos en alturas, instalación de bancos de baterías, cableado para las diferentes tecnologías (2G, 3G, 4G), instalación de software para equipos programables.</h5>
                    </div>
                </div>

                <div className={style.card}>
                    <div className={style.arriba}>
                        <div className={style.encabezado}>
                            <h3 className={style.institucion}>SOFASA Renault</h3>
                            <h3 className={style.logro}>Auxiliar de mantenimiento</h3>
                            <h4 className={style.fecha}>Ene 2014 – Jun 2014</h4>
                        </div>
                        <div className={style.contLogo}>
                            <a href="https://www.renaultgroup.com/en/our-company/locations/envigado-sofasa-plant-2/" target="blank" className={style.a}>
                                <img className={style.logo} src={renault} alt="henry" />
                            </a>
                        </div>
                    </div>
                    <div className={style.abajo}>
                        <h6 className={style.apt}>En esta empresa de ensamble de vehículos Renault realicé mi etapa practica haciendo mantenimiento a equipos electromecánicos de soldadura por punto, prensas neumáticas, rieles automáticos en línea de producción, estaba encargado del inventario de herramientas del taller y hacía parte de un proyecto de descontaminación del área laboral en el tema de exceso de CO2 en el área de producción.</h6>
                    </div>
                </div>

            </fieldset>
        </div>
    )
};

export default Experiencia