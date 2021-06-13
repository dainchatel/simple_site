const express = require('express')
const njk = require('nunjucks')
const { join } = require('path')
const favicon = require('serve-favicon')

const app = express()

app.use(favicon(join(__dirname, 'public', 'favicon.ico')))
app.use(express.static('public'))

app.get('/', (_req, res) => {
  console.log('getting')
  njk.configure(join(__dirname, 'views'))
  const page = njk.render('index.html', { image: 'image3.jpg' })
  res.status(200).send(page)
})

app.use('*', (_req, res) => {
  const message = { message: 'endpoint not found' }
  res.status(404).send(message)
})

const PORT = process.env.PORT || 3098

app.listen(PORT, () => {
  console.log(`Application is running on port ${PORT}`)
})


module.exports = app