const router = require('express').Router();
const userRouter = require('./users');
const cardRouter = require('./cards');

router.get('/', (req, res) => {
  res.status(200);
  res.send('Hello World');
});

router.use('/users', userRouter);
router.use('/cards', cardRouter);

module.exports = router;
