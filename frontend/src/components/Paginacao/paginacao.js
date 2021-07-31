import {StyledPaginacao} from "./StyledPaginacao";
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md'
function Paginacao(props) {
    //props.mudancaPagina();
    return (
      <StyledPaginacao>
        <div className="paginacao">
            <button type =" button" className="pag-nav"
             disabled={props.page === 1} 
             onClick={() => props.onPageChange(props.page - 1)}>
                  <MdNavigateBefore size={24} className="cor"/>
            </button>
            <span className="pag-nav-numb">
                      <p>{props.page}</p>
            </span>
            <button type =" button" className="pag-nav" 
             onClick={() => props.onPageChange(props.page + 1)}>
                 <MdNavigateNext size={24} className="cor"/>
            </button>
        </div>
      </StyledPaginacao>
    );
  }
  
  export default Paginacao;
  