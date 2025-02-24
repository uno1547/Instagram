function isContactValid(contact) {
  return contact.length > 0
}

function isPasswordValid(password) {
  return password.length > 0
}

function isNameValid(name) {
  return name.length > 0
}

// 닉네임이 중복되는지 확인
function isNickNameValid(nickName) {

  return nickName.length > 0
}

function isValuesValid({ contact, password, name, nickName }) {
  const validations = {
    contact : isContactValid(contact),
    password : isPasswordValid(password),
    name : isNameValid(name),
    nickName : isNickNameValid(nickName) 
  }

  const isValid = isContactValid(contact) && isPasswordValid(password) && isNameValid(name) && isNickNameValid(nickName)

  if (isValid) {
    console.log('모두 올바르네요');
    return
  }

  for(let value in validations) {
    // console.log(value, validations[value]);
    if(!validations[value]) {
      console.log(value)
      break
    }
  }
  

  console.log();




}

export { isContactValid, isPasswordValid, isNickNameValid , isValuesValid}