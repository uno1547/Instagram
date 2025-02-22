const express = require('express')
const cors = require('cors')
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : false}))



const database = [
  { id : 1 , title : '글1'},
  { id : 2 , title : '글2'},
  { id : 3 , title : '글3'},
]
const hased = async () => {

  const hash1 = await argon2.hash("yongjunpassword")
  const hash2 = await argon2.hash("unopassword")
  console.log(hash1);
  console.log(hash2);
}

hased()

console.log(hased);

const users = [
  { id : 1, name : "yongjun", nickName : "dbdydwns", password : "$argon2id$v=19$m=65536,t=3,p=4$pAGSgdBaJaEcCCoZ7x0Whw$6aCDGgQQKxlNU3m5vU3p8Pg0f26ZvX/a5C9Ff//ctPo"},
  { id : 2, name : "uno", nickName : "yuno4034", password : "$argon2id$v=19$m=65536,t=3,p=4$1J2KAfMmP2Lv2LDF6MWD7Q$woVh4pQdjniEvaKvJZP64EUTwy9sKBfE9AWIShPyVHU"}
]

app.get('/', function (req, res) {
  // res.send('Hello World!')
  res.sendFile(__dirname + '/views/index.html')
})

app.get('/test', function (req, res) {
  res.send('Hello World!')
})

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

// 사용자 정보확인후 jwt토큰 발급(인증)
app.post('/login', function (req, res) {
  console.log('로그인요청이 왔어요');
  const {id, password} = req.body
  console.log(id, password);
  const user = users.find(user => user.user_name === id)
  console.log(user);
  if(!user) {
    res.status(403).send("해당 user가 없어요")
    return 
  }

  if(user.password !== password) {
    res.status(403).send("비밀번호가 달라요!")
    return
  }

  console.log(user.user_name);
  // 인증 완료된 사용자에게 토큰발급
  const accessToken = jwt.sign({ name : user.user_name}, 'secretkey')
  res.cookie('accessToken', accessToken)
  res.send({accessToken})

}) 

app.post('/signup', async function(req, res) {
  const { name, nickName, password, email, phoneNum } = req.body
  const hashedPassword = await argon2.hash(password)
  database.push({
    name,
    nickName,
    password : hashedPassword,
    email,
    phoneNum
  })
})


// jwt를 response에 담는 방법
app.post('/login-response', async function (req, res) {
  console.log('로그인요청이 왔어요');
  const {userValue, password} = req.body
  console.log(userValue, password);
  const user = users.find(user => user.nickName === userValue)
  console.log(user);
  // 2. 사용자 검증
  if(!user) {
    res.status(403).send("해당 user가 없어요")
    return 
  }

  if(!(await argon2.verify(user.password, password))) {
    res.status(403).send("비밀번호가 달라요!")
    return
  }

  // res.send({ message : "로그인완료했어요"})
  // 3. 검증 완료된 사용자에게 토큰발급 (이후 특정api호출시 사용자 인증을 위함)
  const accessToken = jwt.sign({ name : user.name}, 'secretkey')
  console.log(accessToken);
  res.send({accessToken, message : "토큰이왔어요"})

}) 
// jwt를 쿠키에 담는 방법
app.post('/login-cookie', function (req, res) {
  console.log('로그인요청이 왔어요');
  const {id, password} = req.body
  console.log(id, password);
  const user = users.find(user => user.user_name === id)
  console.log(user);
  if(!user) {
    res.status(403).send("해당 user가 없어요")
    return 
  }

  if(user.password !== password) {
    res.status(403).send("비밀번호가 달라요!")
    return
  }

  console.log(user.user_name);
  // 인증 완료된 사용자에게 토큰발급
  const accessToken = jwt.sign({ name : user.user_name}, 'secretkey')
  res.cookie('accessToken', accessToken)
  res.send({accessToken})

}) 



// 특정 api요청에 대해서 jwt여부, 유효성검사과정 (인가)
app.get('/hello', function (req, res) {
  const token = req.header('Authorization')?.split(' ')[1];
  // const { token } = req.cookies //쿠키를 사용하는경우
  // console.log(token);
  if (!token) return res.sendStatus(401); // 토큰이 없다면 오류전송
  // 토큰 유효성 검사 with secretkey
  jwt.verify(token, 'secretkey', (err, user) => { // 있다면 유효성 검사
    if (err) return res.sendStatus(403);
    console.log(user);
    res.json({ message : `반가워요 ${user.name}`})
  })
  console.log('검증완료');  
})

// authorization헤더에 포함된 토큰으로 인증된 유저의 API
app.get('/hello-response', function (req, res) {
  const token = req.header('Authorization')?.split(' ')[1];
  // const { token } = req.cookies //쿠키를 사용하는경우
  // console.log(token);
  if (!token) return res.sendStatus(401); // 토큰이 없다면 오류전송
  // 토큰 유효성 검사 with secretkey
  jwt.verify(token, 'secretkey', (err, user) => { // 있다면 유효성 검사
    if (err) return res.sendStatus(403);
    console.log(user);
    res.json({ message : `반가워요 ${user.name}`})
  })
  console.log('검증완료');  
})

function authenticateToken(req, res, next) {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, 'SECRET_KEY', (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    // next();
  });
}


app.listen(4000, () => {
  console.log('server running!');
})