const jsonServer = require('json-server')
const generateDitado = require('./generate')
const halves = require('./halves.json')
const schedule = require('node-schedule')

const router = jsonServer.router('ditados.json')
const { db } = router
const server = jsonServer.create()
const middlewares = jsonServer.defaults()

const PORT = process.env.PORT || 3000

server.use(middlewares)

// Custom Routes

// Return random ditado.
server.get('/ditados/random', (req, res) => {
  const ditado = db.get('ditados').sample().value()
  res.status(200).send(ditado)
})

// Return generated ditado.
server.get('/ditados/generate', (req, res) => {
  const ditado = generateDitado(halves)
  res.status(200).send(ditado)
})

server.use(router)
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

var tooter = schedule.scheduleJob('* * * * *', function(){
  console.log('This will run once a minute. It should be set up for the desired time once the Mastodon posting flow is perfected')
})

