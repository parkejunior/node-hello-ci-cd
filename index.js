import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/hello/:name', (req, res) => {
  const name = req.params.name ?? "World";
  res.send(`Hello ${name}!`);
})

const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

export { app, server }