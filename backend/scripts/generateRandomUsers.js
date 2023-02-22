const axios = require('axios');

// random email list
const emailList = [
  '@gmail.com',
  '@naver.com',
  '@daum.net',
  '@nate.com',
  '@yahoo.com',
  '@hotmail.com',
  '@outlook.com',
  '@icloud.com',
  '@msn.com',
  '@live.com',
]

// generate random email address
const generateRandomEmail = () => {
  const randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  return randomString + emailList[Math.floor(Math.random() * emailList.length)];
}

// generate random password
const generateRandomPassword = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

async function main() {
  // loop 100
  for (let i = 0; i < 1000; i++) {
    // generate random email and password
    const email = generateRandomEmail();
    const password = generateRandomPassword();
    // create a user
    const result = await axios.post('http://localhost:3030/users', {
      email,
      password
    });
    console.log(result.data);
  }
}

main();