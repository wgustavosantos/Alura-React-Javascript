import { useState } from 'react';
import {Banner} from './componentes/Banner/Banner.js';
import Formulario from './componentes/Formulario';


function App() {

  const [colaboradoress, setColaboradoress] = useState([]);

  const colaboradores = (colaborador) => {
    setColaboradoress([...colaboradoress, colaborador]);

    console.log("Colaborador foi Submetido! => ", colaboradoress);
  } 

  return (
    <div className="App">
      <Banner/>
      <Formulario aoColaboradorCadastrado={colab => colaboradores(colab)}/>
    </div>
  );
}

export default App;
