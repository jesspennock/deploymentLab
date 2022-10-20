const express = require("express")
const cors = require("cors")


const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('public'))

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '40f294bc36764c8a81cc403c076fc417',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

const {getHTML, getCSS} = require('./controller')

app.get('/', getHTML)
app.get('/css', getCSS)

const port = process.env.PORT || 4001

app.listen(port, console.log(`Server running on ${port}`))