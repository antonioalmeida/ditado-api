const jsonServer = require('json-server')
const router = jsonServer.router('ditados.json')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()

const PORT = process.env.PORT || 3000;
 
server.use(router)
server.use(middlewares)

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
