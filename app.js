const express = require('express')
const app = express()
const port = 4000

app.use(express.static('source'))

app.get('/', (req, res) => {
    res.send('This is Home Page!!')
})

app.get('/test', (req, res) => {
    res.send('This is Test Page!!')
})

app.get('/next', (req, res, next) => {
    res.send('This is Test Page!!')
    next()
}, (req, res) => {
    res.send('This is Next Page!!')
})

app.get('/query', (req, res) => {
    var query = req.query
    res.send(`ID : ${query.id} / PWD : ${query.pwd}`)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})