const jsonServer = require('json-server')
const schedule = require('node-schedule')
const { login } = require('masto')
require('dotenv').config()

const generateDitado = require('./generate')
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

async function tooter(msg) {
  // URL and access token for a specific Mastodon account should be defined as env variables
  const masto = await login({ url: process.env.MAST_URL, accessToken: process.env.TOKEN })
  await masto.statuses.create({ status: msg, visibility: 'direct' })
}

schedule.scheduleJob('* * * * *', () => {
  console.log(`This will run once a minute. testing: ${Date.now()}`)
  tooter(`Mastodon bot. testing: ${Date.now()}`)
})
