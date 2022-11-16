const jsonServer = require('json-server')
const schedule = require('node-schedule')
require('dotenv').config()

const generateDitado = require('./generate')
const tooter = require('./tooter')
const halves = require('./halves.json')

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

if (process.env.MAST_TOKEN) { // assumes that the correct Mastodon URL is also set if a token is provided, uses default masto.pt nevertheless
  schedule.scheduleJob('30 9 * * *', () => {
    const ditado = db.get('ditados').sample().value()
    tooter(`Ditado do dia: \n\n--${ditado.content}\n\nSignificado: ${ditado.meaning}`)
  })
}
