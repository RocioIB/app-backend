const express = require("express");
const os = require("os");

const app = express();

// Puerto dinámico
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    hostname: os.hostname(),
    hora: new Date().toLocaleString(),
    mensaje: "App desplegada por ROCIO ITURRIAGA",
    puerto: PORT
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});