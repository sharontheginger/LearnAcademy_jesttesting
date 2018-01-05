var express = require('express')
var app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.json())

var Word = require('./models').Word
var Quote = require('./models').Quote

app.get('/', (req, res)=>{
  Word.findAll({limit: 1}).then((word)=>{
    Quote.findAll({limit:1}).then((quote)=> {
    res.json({
      greeting: "Hello World",
      wordOfTheDay: word[0],
      quoteOfTheDay: quote[0]
    })
  })
  })
})

app.post('/words', (req, res)=>{
  Word.create({
    word: req.body.word,
    type: req.body.type,
    definition: req.body.definition
  }).then((word)=>{
    res.status(201)
    res.json({word: word})
  })
})

app.post('/quotes', (req, res)=>{
  Quote.create({
    quote: req.body.quote,
    author: req.body.author
  }).then((quote)=>{
    res.status(201)
    res.json({quote: quote})
  })
})
module.exports = app
