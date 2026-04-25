const { calcular } = require("../services/calculadora");

test("suma correctamente", () => {
  expect(calcular("2+2")).toBe("4");
});

test("multiplicación correcta", () => {
  expect(calcular("3*3")).toBe("9");
});

test("expresión inválida", () => {
  expect(() => calcular("2+")).toThrow("Expresión inválida");
});