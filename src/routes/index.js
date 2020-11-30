const router = require('express-promise-router')();

const { getJokeByID, getRandomJoke } = require('../handlers');

router.get('/:id', getJokeByID);
router.get('/', getRandomJoke);

module.exports = router;
