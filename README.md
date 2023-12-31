# nodejs

## 환경
* [Visual Studio](https://code.visualstudio.com)
* Node : [20.9.0](https://nodejs.org/dist/v20.9.0/node-v20.9.0-x64.msi)
  * [Express](https://expressjs.com) : 4.18.2
* [MongoDB](https://www.mongodb.com/ko-kr) `Atlas Cluster?`
  * Mongoose : 8.0.0

## 설치
### nodejs 설치
* Visual Studio Working Directory Open.
* npm packages install
  * **npm init**
  * init 진행 중 author 에 구분할 이름만 넣고 생성해줌
  * package.json 생성 됐는지 확인

### expressjs 설치
* framework for nodejs
* Visual Studio Terminal
* **npm install express --save**

### index 생성
* Visual Studio Create new file **index.js**
```
const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

### nodejs 실행
* index.js 파일 매핑 **"start": "node index.js",**
```
{
  "name": "boiler-plate",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "jindy",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2",
  }
}
```
* Visual Studio Terminal
* **npm run start**
* 로컬 PC의 브라우저에서 localhost:5000 접속확인

### Mongoose 설치
* MongoDB를 간편하게 사용할 수 있게 만들어 주는 툴
* **npm install mongoose --save**

### MongoDB 연결
* 몽고 DB 사용자 계정생성 이후 index.js 파일에 추가
```
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jindy:<PASSWORD>@atlascluster.0tp6ydt.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))
```
* **npm run start**
  * "MongoDB Connected..." 출력되면 정상연결

### User schema 생성
* 
