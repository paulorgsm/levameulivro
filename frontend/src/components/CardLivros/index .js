import { StyledCard } from "./StyledCard";
import imgSalvar from "../../assets/img/salvar.svg";
import imgRelatar from "../../assets/img/relarUmPro.svg";

function CardLivro(props) {
 

    return (
    <StyledCard>
    <div>
          <img src={props.imgLivro} alt="" />

          <div className="texto">
            <p className="mat">{props.materia}</p>
            <p>{props.titulo}</p>
          </div>

          <div className="btn">
            <input className="btn1" type="button" value="QUERO ESTE!" />
            <input className="btn2" type="button" value="+DETALHES" />
          </div>

          <div className="img-assets">
            <p>DISPONÍVEL</p>
            <img src={imgSalvar} alt="" />
            <img src={imgRelatar} alt="" />
          </div>
        </div>
    </StyledCard>
);
}

export default CardLivro;