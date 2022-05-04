const express = require('express')
const exphbs = require('express-handlebars')
// const methodOverride = require('method-override')
const port = 3000

const routes = require('./routes/router')
const app = express()

// handlebars settings
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(routes)

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})