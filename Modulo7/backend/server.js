
const express = require('express')

const app = express()
const PORT = 3001

app.use(express.json())

// Ruta principal: Hola Mundo
app.get('/', (req, res) => {
  res.send('Hola Mundo')
})

// Ruta de prueba para el frontend
app.get('/api/saludo', (req, res) => {
  res.json({
    mensaje: 'Hola desde Express',
    estado: 'OK',
  })
})

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`)
})
