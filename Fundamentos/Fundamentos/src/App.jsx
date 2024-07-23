import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FirstComponent from "./components/FirstComponent";
import TemplateExpressions from "./components/TemplateExpressions";
import MyComponent from "./components/MyComponent";
import Events from "./components/Events";
//Avançando no React
import night from './assets/night.jpg'

function App() {
  const [count, setCount] = useState(0);
  // Comentário
  return (
    <>
      <div>
        <h1>Fundamentos do React</h1>
        {/* Comentário */}
        <FirstComponent />
        <TemplateExpressions />
        <MyComponent />
        <Events></Events>
        <h1>Avançando no React</h1>
        {/* Colocando Imagens */}
        <img src="/img.jpg" alt="Imagem" />
        <img src={night} alt="Imagem 2" />
      </div>
    </>
  );
}

export default App;
