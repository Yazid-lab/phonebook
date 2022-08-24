const express = require('express')
const PORT = 3001
const app = express()
app.get('/', (request, response) => {
  response.end('hello')
})
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
