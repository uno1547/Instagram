const express = require('express')
const app = express()

const database = [
  { id : 1 , title : '글1'},
  { id : 2 , title : '글2'},
  { id : 3 , title : '글3'},
]

app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.get('/', function (req, res) {
  // res.send('Hello World!')
  res.sendFile(__dirname + '/views/index.html')
})

// get all articles
app.get('/articles', function (req, res) {
  res.send(database)
})

// get articles with specific id
app.get('/articles/:id', function (req, res) {
  const id = Number(req.params.id)
  const filteredArticles = database.filter(article => article.id === id)
  res.send(filteredArticles)
})

// get 메소드, params를 통한 create
// app.get('/articles/:title', function (req, res) {
//   const title = req.params.title
//   database.push({
//     id : database.length + 1,
//     title
//   })
//   res.send('추가완료!!')
// })

// post 메소드, req.body를 통한 create
app.post('/articles', function (req, res) {
  // rest api "app.post('/articles')"
  const title = req.body.title
  database.push({
    id : database.length + 1,
    title
  })
  res.send('추가완료!!')
})

// post 메소드 > update 
app.put('/articles', function (req, res) {
  // rest api " app.put('/articles') "
  const id = req.body.id
  const newTitle = req.body.title
  const prevArticle = database.find(article => article.id === id)
  prevArticle.title = newTitle
  res.send('추가완료!!')
})

app.delete('/articles', function (req, res) {
  // rest api " app.delete('/articles') "
  const id = req.body.id
  database.splice(id-1, 1)
  res.send('추가완료!!')
})

app.listen(3000, () => {
  console.log('server running!');
})