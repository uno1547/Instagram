const posts = require('./datas/posts')
const postInfos = require('./datas/postInfos')

const express = require('express')
const cors = require('cors')
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

const app = express()
app.use(cors({
  origin : "http://localhost:5173",
  // credentials : true 얜뭐지
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

const arr2 = [
  {
    userID : "사람1",
  },
  {
    userID : "사람2",
  },
  {
    userID : "사람3",
  },
  {
    userID : "사람4",
  },
  {
    userID : "사람5",
  },
  {
    userID : "사람6",
  }, 
  {
    userID : "사람7",
  },
  {
    userID : "사람8",
  },
  {
    userID : "사람9",
  },
  {
    userID : "사람10",
  },
  {
    userID : "사람11",
  },
  {
    userID : "사람12",
  },
  {
    userID : "사람13",
  },
  {
    userID : "사람14",
  }, 
  {
    userID : "사람15",
  },
  {
    userID : "사람16",
  }
]
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
/*
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
*/

// 회원가입
app.post('/api/users', async function(req, res) {
  // 데이터 저장 형태는 나중에 생각해보기로
  console.log('회원가입요청왔음');
  const { phoneNumber, email, password, name, nickName } = req.body
  // const { name, nickName, password, email, phoneNum } = req.body
  const hashedPassword = await argon2.hash(password)
  idx = idx + 1
  // 데이터 베이스에 추가
  database.push({
    id : idx, 
    phoneNumber,
    email,
    name,
    nickName,
    password : hashedPassword,
  })
  console.log(database, idx);
  // DB추가 과정이있다면 예외처리 해주면 될듯
  console.log('데이터 베이스에 추가완료');
  res.json({
    "success" : true,
    "message" : "회원가입에 성공했습니다."
  })
})

//로그인
app.post('/api/login', async function (req, res) {
  console.log('로그인요청이 왔어요');
  const {contact, password} = req.body
  console.log(contact, password);
  // 1. DB랑 비교
  const user = database.find(user => {
    return (user.nickName == contact) || (user.contact == contact) // 이거 서버에서 알아서하니깐 닉네임으로 뚫어야함
  })
  // const user = users.find(user => user.nickName === userValue)
  console.log(user);
  // 2. 사용자 검증
  if(!user) {
    console.log('존재하지않는 사용자');
    res.status(404).json({
      "success" : false,
      "message" : "존재하지않는 사용자입니다"
    })
    return 
  }

  if(!(await argon2.verify(user.password, password))) {
    console.log('비번이 틀림');
    res.status(401).json({
      "success" : false,
      "message" : "비밀번호가 틀려요"
    })
    return
  }

  // res.send({ message : "로그인완료했어요"})
  // 3. 검증 완료된 사용자에게 토큰발급 (이후 특정api호출시 사용자 인증을 위함)
  // const accessToken = jwt.sign({ name : user.name }, 'secretkey')
  const accessToken = jwt.sign({ nickName : user.nickName }, 'secretkey')
  console.log(accessToken);
  res.json({
    "success" : true,
    "message" : "로그인 성공",
    accessToken
  })
}) 


// jwt토큰 포함된 요청에서 userId반환(Sidebar컴포넌트 초기화할때 사용)
// { name : user.name } 가 payload임
app.get('/api/users/userID', function(req, res) {
  console.log('닉네임 요청이 왔어요');
  const token = req.header('Authorization')?.split(' ')[1];
  console.log(token);
  if (!token) return res.status(401).json({
    "success" : false,
    "message" : "토큰이 없어요"
  }); // 무조건 올테지만 토큰이 없다면 오류전송

  // 토큰 유효성 검사 with secretkey
  jwt.verify(token, 'secretkey', (err, user) => { // 있다면 유효성 검사
    if (err) return res.status(403).json({
      "success" : false,
      "message" : "알수없는 오류발생"
    });
    // console.log(user);
    res.json({
      "success" : true,
      "userID" : user.nickName,
      "message" : "userid에요"
    })
  })

  // console.log('검증완료');    
})

// 프로필 정보 조회
app.get('/api/users/:userID/profile', (req, res) => {
  /* 
  받은 userID, 토큰을 통해서 
  1) userID인 사용자가 존재하는지 검사 없다면 에러응답
  2) userID랑 토큰 payload의 사용자가 일치하는지 판단(본인프로필 or 제3자를 판단)
  3) 제3자라면 나(토큰사용자)랑 팔로우 여부를 확인
  4) userID의 게시글수, 팔로워수, 팔로잉수 응답
  반환은 아마도
  1) 존재하지않는 사용자 2) 본인/게워잉 3) 제3자/친구/게워잉 4) 제3자/모름/게워잉
  {
    status : XXX,
    success : true/false,
    message : 알맞게,

    isYou : true/false,
    isFriend : true/false,
    postNums : 100,
    followers : 200,
    followings : 100,
    describe : "간단한 소개글"
  }
  */
  const {userID} = req.params
  console.log(`${userID} 에 대한 프로필요청!!`);

  // API 에 인가된 사용자인지 확인을 위해 token검사
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) {
    res.status(401).json({
      message : "토큰이 필요해요"
    })
    return
  }
  
  try {
    const decoded = jwt.verify(token, "secretkey")
    console.log('해독된 토큰은',decoded); // 여기서 해독된정보까지 알긴해 userID인사용자 존재를 파악하기전에
  } catch(err) {
    res.status(400).json({
      message : "토큰이 유효하지않아요" // API접근을 자유롭게 할지말지, 정하면 될부분인가 ?하는게 좋긴할듯
    })
    return
  }

  // 1. userID인 사용자가 존재하는지 먼저 확인후 응답
  // const isUserExist = database.some(user => user.nickName === userID)
  // if(!isUserExist) { // 존재하는 사용자가 없다면 
  //   console.log('입력한 URL의 사용자는 존재하지않아요!!');
  //   res.status(401).json({
  //     success : false,
  //     status : 401,
  //     message : "해당 아이디의 사용자는 없어요",
  //   })
  //   return
  // }

  const rests = [
    {
      userID : "yuno4034",
      isFollowee : false,
      postNums : 1,
      followers : 108,
      followees : 142,
      article : "@yuno4034"
    },
    {
      userID : "dbdydwns",
      isFollowee : true,
      postNums : 10,
      followers : 290,
      followees : 245,
      article : "유용준 스물다섯 안녕하세요"
    },
    {
      userID : "00_woowoo_",
      isFollowee : true,
      postNums : 2,
      followers : 248,
      followees : 243,
      article : "영우 루이 집사"
    },
    {
      userID : "0724.32",
      isFollowee : true,
      postNums : 90,
      followers : "115.5만",
      followees : 61,
      article : "𝐋𝐄𝐄 𝐉𝐔𝐄𝐔𝐍 李珠珢"
    },     {
      userID : "katarinabluu",
      isFollowee : false,
      postNums : 227,
      followers : "2410만",
      followees : 4,
      article : "KARINA aespa"
    }
  ]

  // 2. 토큰과 userID를 비교해서, 본인인지 아닌지 확인
  const tokenID = jwt.verify(token, "secretkey").nickName
  const isYou = tokenID === userID // true or false

  // 3. 해당 userID의 사용자와 토큰ID를 비교해서, 팔로우관계인지 확인
  /* 
  정확하게는 토큰ID(나)가 userID를 팔로우하고 있는지만알면됌 (user가 나를 팔로우하는지는 중요치않음 버튼을 생각해보셈)
  1) Follows테이블에서 followerId가 토큰ID이고 followeeID가 userID인 행찾기
  2) Follows테이블에서 
  */
  // const isFollowee = true // isYou가 true면 얜 무조건 false임 자기를 팔로우할순없으니까, 일단 클라에서 이 프로퍼티를 쓸까????
  // const isFollowee = isYou ? true : DB체크 

  // 4. 게시글수, 팔로워수, 팔로잉수, 설명 받기 이건 User테이블에 필드 마련해두는게 좋으려나, 
  // 아니면 요청받으면 서버가 그때 카운트해서 알려주는게 나으려나 시간이 좀더 걸릴것같긴한데
  // const [postNums, followers, followees] = [1, 108, 142]

  const userrest = rests.find(rest => rest.userID === userID)
  console.log(userrest);

  if(!userrest) { // 없는 유저면 null반환
    res.send(null)
    return
  }

  // res.status(200).json({
  //   success : true,
  //   message : "여기 회원정보에요",
  //   isYou,
  //   isFollowee,
  //   postNums,
  //   followers,
  //   followees,
  //   article : "안녕 하세요 인사말이에요"
  // })
  const result = {
    success : true,
    message : "여기 회원정보에요",
    isYou,
    ...userrest
  }
  console.log(result);
  res.status(200).json({
    success : true,
    message : "여기 회원정보에요",
    data : {
      isYou,
      ...userrest
    }
  })
})

// 팔로워 목록 조회
app.get('/api/users/:userID/followers', (req, res) => {
  // follow앤티티에서 userID이 follower인 모든 결과를 카운트
  // 
  const { userID } = req.params
  console.log(`${userID}가 팔로우하는 사람은??`);
  const followers = [
    { "userID" : "dbdydwns"},
    { "userID" : "00_woowoo_"},
    { "userID" : "0724.32"},
    { "userID" : "katarinabluu"},
    // { "userID" : "jsjinee"},
    // { "userID" : "팔로워6"},
    // { "userID" : "yunho389"},
    // { "userID" : "팔로워8"}
  ]
  res.json({
    status : 200,
    success : true,
    data : followers
  })
  return
})
// 팔로잉목록 조회
app.get('/api/users/:userID/followings', (req, res) => {
  // const 
  const { userID } = req.params
  console.log(`${userID}를 팔로잉하는 사람은??`);
  const followings = [
    { "userID" : "이주은"},
    { "userID" : "강해린"},
    { "userID" : "아이유"},
    { "userID" : "팔로잉4"},
    { "userID" : "팜하니"},
    { "userID" : "김민지"},
    { "userID" : "karinabluee"},
    { "userID" : "팔로잉8"}
  ]
  res.json({
    status : 200,
    success : true,
    data : followings
  })
  return
})

// 특정회원 언팔로우
app.delete('/api/users/:userID/follow', (req, res) => {
  const { userID } = req.params
  console.log('delete요청');
  
  // API 에 인가된 사용자인지 확인을 위해 token검사
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) {
    res.status(401).json({
      message : "토큰이 필요해요"
    })
    return
  }
  // token정보확인
  try {
    const decoded = jwt.verify(token, "secretkey")
    console.log('해독된 토큰은',decoded); // 여기서 해독된정보까지 알긴해 userID인사용자 존재를 파악하기전에
    const {nickName} = decoded
    console.log(`${nickName}이 ${userID} 를 언팔로우한대요!!`);

  } catch(err) {
    res.status(400).json({
      message : "토큰이 유효하지않아요" // API접근을 자유롭게 할지말지, 정하면 될부분인가 ?하는게 좋긴할듯
    })
    return
  }
  // console.log();

  /*unfollow 과정*/

  res.json({
    "success" : true,
    "message" : "언팔로우성공!"
  })
  return
})

// 특정 회원 팔로우
app.post('/api/users/:userID/follow', (req, res) => {
  const { userID } = req.params
  console.log('post요청');
  
  // API 에 인가된 사용자인지 확인을 위해 token검사
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) {
    res.status(401).json({
      message : "토큰이 필요해요"
    })
    return
  }
  // token정보확인
  try {
    const decoded = jwt.verify(token, "secretkey")
    console.log('해독된 토큰은',decoded); // 여기서 해독된정보까지 알긴해 userID인사용자 존재를 파악하기전에
    const {nickName} = decoded
    console.log(`${nickName}이 ${userID} 를 팔로우한대요!!`);
  } catch(err) {
    res.status(400).json({
      message : "토큰이 유효하지않아요" // API접근을 자유롭게 할지말지, 정하면 될부분인가 ?하는게 좋긴할듯
    })
    return
  }

  /*unfollow 과정*/

  res.json({
    "success" : true,
    "message" : "팔로우성공!"
  })
  return
})

// 팔로우 리스트에서 삭제
/*
userID, token이 있으면 userID > token인 팔로우관계를 삭제
*/
app.delete('/api/users/:userID/removeFollower', (req, res) => {
  const { userID } = req.params
  
  // API 에 인가된 사용자인지 확인을 위해 token검사
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) {
    res.status(401).json({
      message : "토큰이 필요해요"
    })
    return
  }
  // token정보확인
  try {
    const decoded = jwt.verify(token, "secretkey")
    console.log('해독된 토큰은',decoded); // 여기서 해독된정보까지 알긴해 userID인사용자 존재를 파악하기전에
    const {nickName} = decoded
    console.log(`${nickName}가 ${userID} 이 자기팔로우하는게 맘에안듬`);
  } catch(err) {
    res.status(400).json({
      message : "토큰이 유효하지않아요" // API접근을 자유롭게 할지말지, 정하면 될부분인가 ?하는게 좋긴할듯
    })
    return
  }

  /*unfollow 과정*/

  res.json({
    "success" : true,
    "message" : "팔로우금지성공!"
  })
  return
})

// 사용자의 게시글 리스트 조회

// 특정 유저의 게시글 목록 불러오기 
app.get('/api/users/:userID/posts', (req, res) => {
  /*
  Posts 데이터들에서 userID값들로 쿼리!!
  각 Post데이터는 postID가지고있고, 썸네일 가짐
  */
  const {userID} = req.params
  console.log(userID);

  // 토큰 검사
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) {
    res.status(401).json({
      message : "토큰이 필요해요"
    })
    return
  }

  try {
    const decoded = jwt.verify(token, "secretkey")
    console.log('해독된 토큰은',decoded); // 여기서 해독된정보까지 알긴해 userID인사용자 존재를 파악하기전에
  } catch(err) {
    res.status(400).json({
      message : "토큰이 유효하지않아요" // API접근을 자유롭게 할지말지, 정하면 될부분인가 ?하는게 좋긴할듯
    })
    return
  }

  const userPosts = posts.filter(post => post.userID === userID)
  console.log(userPosts);
  res.json({
    "success" : true,
    "message" : `${userID}님의 게시글들이에요`,
    "posts" : userPosts
  })
})


// 특정 게시글에 대한 정보를 불러옵니다. (댓글 좋아요 수등)
app.get('/api/posts/:postID', (req, res) => {
  /*
  위에서 얻은 postID?로 다시요청
  */

  const {postID} = req.params
  console.log(postID, '아이디의 게시글에 대한 추가정보요청이 왔어요!!');

  // 토큰 검사
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) {
    res.status(401).json({
      message : "토큰이 필요해요"
    })
    return
  }

  try {
    const decoded = jwt.verify(token, "secretkey")
    console.log('해독된 토큰은',decoded); // 여기서 해독된정보까지 알긴해 userID인사용자 존재를 파악하기전에
  } catch(err) {
    res.status(400).json({
      message : "토큰이 유효하지않아요" // API접근을 자유롭게 할지말지, 정하면 될부분인가 ?하는게 좋긴할듯
    })
    return
  }

  const info = postInfos.find(postInfo => postInfo.postID == postID)
  console.log(info);
  res.json({
    "success" : true,
    "message" : `${postID} post에 대한 추가정보!`,
    info
  })
  // res.json({
  //   "success" : true,
  //   "message" : `${userID}님의 게시글들이에요`,
  //   "posts" : userPosts
  // })
})


























































// 중복닉네임을 검증함 (폐기)
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


app.listen(8080, () => {
  console.log('server running!');
  console.log(database);
})