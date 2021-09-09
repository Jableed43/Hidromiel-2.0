const express = require('express')
const app = express()
const path = require('path')
const port = 3030

/* Middleware, establecer ruta estatica para requerir archivos */
app.use(express.static('public'))

/* app get */
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'index.html')))

/* app get */
app.get('/form', (req, res) => res.sendFile(path.join(__dirname, 'views', 'formularioweb.html')))

/* app get */
app.get('/productos', (req, res) => res.sendFile(path.join(__dirname, 'views', 'productos.html')))

/* app get */
app.get('/venta', (req, res) => res.sendFile(path.join(__dirname, 'views', 'puntosventa.html')))

/* app get */
app.get('/somos', (req, res) => res.sendFile(path.join(__dirname, 'views', 'quienes-somos.html')))

/* Servidor escuchando, siempre va al final */
app.listen(port, () => console.log("Server corriendo en http://localhost:"+port))
