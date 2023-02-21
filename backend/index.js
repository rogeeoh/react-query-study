const port = 3030;

// create express server
const express = require('express');
const app = express();
const cors = require('cors');
const models = require('./models');
const userRouter = require('./routes');

app.use(cors());
app.use(express.json());
app.use('/users', userRouter);

app.listen(port, () => {
  console.log("서버가 실행되고 있습니다.");
  models.sequelize
    .sync()
    .then(() => {
      console.log("DB연결 성공!");
    })
    .catch((err) => {
      console.error(err);
      console.log("DB 연결 에러");
      process.exit();
    });
});