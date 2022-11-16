const { login } = require('masto')
require('dotenv').config()

const tooter = async msg => {
  // URL and access token for a specific Mastodon account should be defined as env variables
  const masto = await login({ url: process.env.MAST_URL || 'https://masto.pt/', accessToken: process.env.MAST_TOKEN })
  await masto.statuses.create({ status: msg, visibility: 'public' })
}

module.exports = tooter
