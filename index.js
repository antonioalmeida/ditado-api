const jsonServer = require('json-server')
const router = jsonServer.router('ditados.json')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
 
server.use(router)
server.use(middlewares)

server.get('/', function (req, res) {
  res.send('Hello World')
})
 
server.listen(3000, () => {
  console.log('Server running on port 3000');
});
