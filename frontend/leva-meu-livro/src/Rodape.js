import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <footer className ="footer">
        <div className ="descricaoSobre">
            <h2>SOBRE      <strong>LEVA MEU LIVRO</strong></h2>
            <span>
                Mussum Ipsum, cacilds vidis litro abertis. Pra lá , depois divoltis porris, paradis. Per aumento de cachacis, eu reclamis. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.
            </span>
        <span>
            <a className ="leiaMais" href="#" >LEIA MAIS</a>
        </span>
        </div>

        <div className ="redesSociais">
            <h2>REDES<strong>SOCIAIS</strong></h2>
        <span>
            <img  src="../assets/img/facebook.svg" alt="não encontrada"/>
            <img  src="../assets/img/redesSociais.svg" alt="não encontrada"/>
         </span>
       </div>
       <div className ="footer2">
        <div className ="direitos"> LEVA MEU LIVRO ©  | 2021 - Todos os direitos reservados   </div>
     </div>
     </footer>
     
  );
}

export default App;
