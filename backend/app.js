const express = require('express')
const cors = require('cors')
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

const app = express()
app.use(cors({
  origin : "http://localhost:5173",
  credentials : true
}))
// app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cookieParser())


const database = [
  { id : 1, name : "yongjun", nickName : "dbdydwns", password : "$argon2id$v=19$m=65536,t=3,p=4$pAGSgdBaJaEcCCoZ7x0Whw$6aCDGgQQKxlNU3m5vU3p8Pg0f26ZvX/a5C9Ff//ctPo", contact : '010-1234-5678'},
  { id : 2, name : "uno", nickName : "yuno4034", password : "$argon2id$v=19$m=65536,t=3,p=4$1J2KAfMmP2Lv2LDF6MWD7Q$woVh4pQdjniEvaKvJZP64EUTwy9sKBfE9AWIShPyVHU", contact : 'unoei@naver.com'}  
]
let idx = database.length
// const hased = async () => {

//   const hash1 = await argon2.hash("yongjunpassword")
//   const hash2 = await argon2.hash("unopassword")
//   console.log(hash1);
//   console.log(hash2);
// }

// hased()

// console.log(hased);

// const users = [
//   { id : 1, name : "yongjun", nickName : "dbdydwns", password : "$argon2id$v=19$m=65536,t=3,p=4$pAGSgdBaJaEcCCoZ7x0Whw$6aCDGgQQKxlNU3m5vU3p8Pg0f26ZvX/a5C9Ff//ctPo"},
//   { id : 2, name : "uno", nickName : "yuno4034", password : "$argon2id$v=19$m=65536,t=3,p=4$1J2KAfMmP2Lv2LDF6MWD7Q$woVh4pQdjniEvaKvJZP64EUTwy9sKBfE9AWIShPyVHU"}
// ]

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


/*
사용자가 홈페이지접속('/'라우트) > 서버에 GET '/home' 
사용자의 토큰여부에 따라 응답 1. 사용자 정보(token O ) 2. 에러? (token X)
받은 응답에따라 사용자정보로 홈페이지 랜더링 or login페이지 랜더링


*/

// 얜 아직 필요할지 모르겠음
app.get('/home', (req, res) => {
  const accessToken = req.cookies.access_token
  // 토큰이 없다면 '로그인랜더링해' 응답
  // 토큰이 있다면 인스타 유저인지 판단후 '여기로가라' 응답
  if (!accessToken) { // 토큰이없음
    res.json(false)
    return
  }
  // res.send("hi") // 문자열 보내면 클라에서 response.text()로 받아야함
  // res.send("false") //얘는 아마 자동 형변환이 이루어져서 response.json()으로 받을수 있는듯
  // res.send(true) 
  // res.send({"result" : true})
  // res.send({message : true})
  res.json(true) //????얘는 뭐임
})













// 사용자 정보확인후 jwt토큰 발급 cookie방식
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



// 회원가입
app.post('/api/users', async function(req, res) {
  // 데이터 저장 형태는 나중에 생각해보기로
  const { contact, password, name, nickName } = req.body
  // const { name, nickName, password, email, phoneNum } = req.body
  const hashedPassword = await argon2.hash(password)
  idx = idx + 1
  // 데이터 베이스에 추가
  database.push({
    id : idx, 
    name,
    nickName,
    password : hashedPassword,
    contact
  })
  console.log(database, idx);
  // DB추가 과정이있다면 예외처리 해주면 될듯
  res.json({
    "success" : true,
    "message" : "회원가입에 성공했습니다."
  })
})

// 중복닉네임을 검증함
app.post('/api/users/dup-nick', function(req, res) {
  const { nickName } = req.body
  console.log(nickName);
  const dupUser = database.find(user => {
    return user.nickName == nickName
  })
  console.log(dupUser);
  // 중복 유저가있을경우
  if(dupUser) {
    console.log('중복유저가 있어요');
    res.status(409).json({
      "success" : false,
      "message" : "중복된 사용자이름입니다"
    })
    // res.json({message : false})
    return
  }
  // 사용가능한 아이디인경우
  console.log('사용가능한 id에요');
  // res.json({message : true})
  res.json({
    "success" : true,
    "message" : "사용가능한 닉네임 이에요"
  })
})

// jwt를 response에 담는 방법
app.post('/api/login', async function (req, res) {
  console.log('로그인요청이 왔어요');
  const {userValue, password} = req.body
  console.log(userValue, password);
  // 1. DB랑 비교
  const user = database.find(user => {
    return (user.nickName == userValue) || (user.contact == userValue)
  })
  // const user = users.find(user => user.nickName === userValue)
  console.log(user);
  // 2. 사용자 검증
  if(!user) {
    res.status(404).json({
      "success" : false,
      "message" : "존재하지않는 사용자입니다"
    })
    return 
  }

  if(!(await argon2.verify(user.password, password))) {
    res.status(401).json({
      "success" : false,
      "message" : "비밀번호가 틀려요"
    })
    return
  }

  // res.send({ message : "로그인완료했어요"})
  // 3. 검증 완료된 사용자에게 토큰발급 (이후 특정api호출시 사용자 인증을 위함)
  const accessToken = jwt.sign({ name : user.name}, 'secretkey')
  console.log(accessToken);
  res.json({
    "success" : true,
    "message" : "로그인 성공",
    accessToken
  })
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

// jwt를 쿠키에 담는 방법
app.post('/login-cookie', async function (req, res) {
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
  // res.send('로그인 성공')
  res.cookie('access_token', accessToken , { 
    httpOnly : true,
    // sameSite : 'strict'
  }) // cookie에 담아서 클라이언트에게 전송
  res.send({message : "토큰이왔어요"})
  // res.send("꺼져")
  // res.cookie('access_token', accessToken)

})


app.get('/hello-cookie', function (req, res) {
  const accessToken = req.cookies.access_token //이걸 위해 쿠키파서가 필요
  console.log(accessToken);
  if(!accessToken) { // 토큰이 없는 경우
    res.status(401).send("토큰이 없네요")
    return
  }
  jwt.verify(accessToken, 'secretkey', (err, decoded) => { // 있다면 유효성 검사
    if (err) return res.sendStatus(403);
    console.log(decoded);
    res.json({ message : `반가워요 ${decoded.name}`})
  })
  console.log('검증완료');  
  
  // res.send("유저 인증이 필요한 API!!")
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
  console.log(database);
})