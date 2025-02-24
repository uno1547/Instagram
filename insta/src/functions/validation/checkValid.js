import Posts from "../../components/Profile/Posts";

function isContactValid(contact) {
  // 올바른 형식일때 true반환 나머지는 메세지 반환
  if (!contact.length > 0) {
    return "전화번호 또는 이메일 주소를 입력해주세요"
  }

  if (contact.includes('@')) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(contact) ? true : "이메일 형식이 올바르지 않아요"
  } else {
    const phoneRegex = /^(?:\+82|0)(\d{1,2})-?\d{3,4}-?\d{4}$/;
    return phoneRegex.test(contact) ? true : "전화번호 형식이 올바르지 않아요"
  }
}

function isPasswordValid(password) {
  // 올바른 형식일때 true반환 나머지는 메세지 반환
  return (password.length >= 6) ? true : "비밀번호는 6자리 이상이에요"
}

function isNameValid(name) {
  // 올바른 형식일때 true반환 나머지는 메세지 반환
  return (name.length >= 2) ? true : "이름을 입력해주세요"
}

// 닉네임이 중복되는지 확인
async function isNickNameValid(nickName) {
  // 중복아닐때 true반환 나머지는 메세지 반환
  if (!nickName.length > 0) {
    return "사용자 이름을 입력해주세요"
  }
  // console.log(nickName);
  const response = await fetch("http://localhost:4000/signup/duplicate-id", {
    method : "POST",
    headers : {
      'Content-Type' : 'application/json'
    },
    body : JSON.stringify({
      nickName
    })
  })
  const {message} = await response.json()
  // console.log(message);

  // 중복될경우 
  return message ? true : "중복된 사용자 이름입니다."
}

async function isValuesValid({ contact, password, name, nickName }) {
  const validations = {
    contact : isContactValid(contact),
    password : isPasswordValid(password),
    name : isNameValid(name),
    nickName : await isNickNameValid(nickName) // 프로미스 채로 Signup의 message로 넘어가더라도 문제없을듯
  }

  const map = Object.entries(validations).find(([_, value]) => {
    return value != true
  })
  console.log(map);
  return map ? map[1] : true // 모두 만족하면 true, 만족하지않는다면
  // return map
}

export { isContactValid, isPasswordValid, isNickNameValid , isValuesValid }