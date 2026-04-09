import { useState } from "react";
import "./App.css";

function App() {
  const [pantalla, setPantalla] = useState("");
  const [resultadoMostrado, setResultadoMostrado] = useState(false);

  const agregarNumero = (valor) => {
    if (resultadoMostrado) {
      setPantalla(valor);
      setResultadoMostrado(false);
    } else {
      setPantalla(pantalla + valor);
    }
  };

  const agregarOperador = (operador) => {
    setPantalla(pantalla + operador);
    setResultadoMostrado(false);
  };

  const calcular = () => {
    try {
      const res = eval(pantalla);
      setPantalla(res.toString());
      setResultadoMostrado(true);
    } catch {
      setPantalla("Error");
    }
  };

  const limpiar = () => {
    setPantalla("");
    setResultadoMostrado(false);
  };

  return (
    <div className="contenedor">
      <div className="pantalla">{pantalla || "0"}</div>
      <p>Modo edición: agregando mejora en botón borrar</p>

      <div className="botones">
        <button className="ac" onClick={limpiar}>AC</button>
        <button className="operador" onClick={() => agregarOperador("/")}>÷</button>
        <button className="operador" onClick={() => agregarOperador("*")}>×</button>
        <button className="operador" onClick={() => agregarOperador("-")}>−</button>

        <button onClick={() => agregarNumero("7")}>7</button>
        <button onClick={() => agregarNumero("8")}>8</button>
        <button onClick={() => agregarNumero("9")}>9</button>
        <button className="operador" onClick={() => agregarOperador("+")}>+</button>

        <button onClick={() => agregarNumero("4")}>4</button>
        <button onClick={() => agregarNumero("5")}>5</button>
        <button onClick={() => agregarNumero("6")}>6</button>
        <button className="igual" onClick={calcular}>=</button>

        <button onClick={() => agregarNumero("1")}>1</button>
        <button onClick={() => agregarNumero("2")}>2</button>
        <button onClick={() => agregarNumero("3")}>3</button>

        <button className="cero" onClick={() => agregarNumero("0")}>0</button>
      </div>
    </div>
  );
}

export default App;