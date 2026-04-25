const cors = require("cors");
const express = require("express");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

// 🔹 Ruta base
app.get("/", (req, res) => {
  res.send("API Calculadora funcionando");
});

// 🔹 Guardar operación
app.post("/operacion", async (req, res) => {
  const { expresion, resultado } = req.body;

  try {
    const nuevaOperacion = await prisma.operacion.create({
      data: {
        expresion,
        resultado,
      },
    });

    res.json(nuevaOperacion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al guardar operación" });
  }
});

// 🔹 Obtener historial
app.get("/operaciones", async (req, res) => {
  try {
    const operaciones = await prisma.operacion.findMany({
      orderBy: { fecha: "desc" },
    });

    res.json(operaciones);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener operaciones" });
  }
});

// 🔹 Iniciar servidor
app.listen(3000, () => {
  console.log("Servidor corriendo en puerto 3000");
});