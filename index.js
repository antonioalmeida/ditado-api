const jsonServer = require('json-server')
const router = jsonServer.router('ditados.json')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
const random = require('./random')
const ditadosArray = require('./ditados.json').ditados;
// PORT
const PORT = process.env.PORT || 3000;
//Middlewares
server.use(middlewares)

// Custom Routes
server.get('/', function (req, res) {
  res.send('Hello World')
});
// Return random ditado.
server.get('/ditados/random', function (req, res) {
  const ditado = random.getRandomDitado(false,ditadosArray);
  res.status(200).send(ditado)
})


// 
server.use(router)
// Listen
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
