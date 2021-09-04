const initOptions = {}
const pgp = require('pg-promise')(initOptions)
if (process.env.NODE_ENV == 'development')
    require('dotenv').config()

const connection = pgp(process.env.DATABASE_URL)

module.exports = connection
