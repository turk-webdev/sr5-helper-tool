const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const PORT = 3001

if (process.env.NODE_ENV == 'dev')

// Routing
app.use('/', require('./routes/index'))

// Middleware
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})