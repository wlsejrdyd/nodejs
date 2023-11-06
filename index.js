const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const { User } = require("./models/User");

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
// application/json
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jindy:WlsEjr1!@atlascluster.0tp6ydt.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.post('/register', (req, res) => {

  // client 회원가입정보 DB 전송
    const user = new User(req.body)

    user.save((err, userInfo) => {
      if (err) return res.json({ success: false, err })
      return res.status(200).json({
        success: true
      })
    })
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})