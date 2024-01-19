import style from "./Portfolio.module.css";
import foto from "../../Assets/img/isra.jpg";

const Portfolio = () => {
    return (
        <div className={style.Portfolio}>
            <img src={foto} alt="foto" className={style.foto} />
            <h1 className={style.nombre}>Israel David Aguilar Cepeda</h1>
        </div>
    )
};

export default Portfolio