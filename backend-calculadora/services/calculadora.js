function calcular(expresion) {
  try {
    const resultado = eval(expresion);
    return resultado.toString();
  } catch {
    throw new Error("Expresión inválida");
  }
}

module.exports = { calcular };