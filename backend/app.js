const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : false}))



const database = [
  { id : 1 , title : '글1'},
  { id : 2 , title : '글2'},
  { id : 3 , title : '글3'},
]


app.get('/', function (req, res) {
  // res.send('Hello World!')
  res.sendFile(__dirname + '/views/index.html')
})

// get all articles
// app.get('/articles', function (req, res) {
//   res.send(database)
// })

// app.get('/string', function (req, res) {
//   // res.send("this is your name")
//   res.send("hi")
// })

// app.get('/name', function (req, res) {
//   // res.send("this is your name")
//   res.send({ name : "peter"})
// })

// get articles with specific id
// app.get('/articles/:id', function (req, res) {
//   const id = Number(req.params.id)
//   const filteredArticles = database.filter(article => article.id === id)
//   res.send(filteredArticles)
// })

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
// app.post('/articles', function (req, res) {
//   // rest api "app.post('/articles')"
//   const title = req.body.title
//   database.push({
//     id : database.length + 1,
//     title
//   })
//   res.send('추가완료!!')
// })

// post 메소드 > update 
// app.put('/articles', function (req, res) {
//   // rest api " app.put('/articles') "
//   const id = req.body.id
//   const newTitle = req.body.title
//   const prevArticle = database.find(article => article.id === id)
//   prevArticle.title = newTitle
//   res.send('추가완료!!')
// })

// app.delete('/articles', function (req, res) {
//   // rest api " app.delete('/articles') "
//   const id = req.body.id
//   database.splice(id-1, 1)
//   res.send('추가완료!!')
// })

// fetch get
app.get('/articles', function (req, res) {
  console.log('get요청이 왔습니다');
  res.send(database)
})

// fetch post
app.post('/articles', function (req, res) {
  console.log('post요청이 왔습니다');
  console.log(req.body);
  const {id, title} = req.body
  console.log(id, title);
  const newArticle = {
    id : Number(id),
    title
  }
  console.log(newArticle);
  database.push(newArticle)
  // console.log(formJson);
  // console.log(req.body);
  res.send("생성에 성공했다!")
})

// fetch put
app.put('/articles', function (req, res) {
  console.log(req.body);
  console.log('put요청이 왔습니다');
  const {id, title} = req.body
  const originArticle = database.find(article => article.id == id)
  originArticle.title = title
  // console.log(req.body);
  res.send('수정에 성공했다!!')
})

// fetch delete
app.delete('/articles', function (req, res) {
  console.log('delete요청이 왔습니다');
  const {id} = req.body
  const idx = database.findIndex(article => article.id == id)
  console.log(`${idx} 부터 1개자름`);
  database.splice(idx, 1)
  res.send(`${id}글 삭제에 성공했다!!`)
})

app.listen(4000, () => {
  console.log('server running!');
})