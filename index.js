const jsonServer = require('json-server')
const router = jsonServer.router('ditados.json')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()

const PORT = process.env.PORT | 80;                  
 
server.use(router)
server.use(middlewares)

server.get('/', function (req, res) {
  res.send('Hello World')
})
 
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
