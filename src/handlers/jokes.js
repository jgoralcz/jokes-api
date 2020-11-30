const db = require('../db/queries');

const getJokeByID = async (req, res) => {
  const { id } = req.params;

  // TODO: use ajv? that'd be lit
  if (id == null || isNaN(id)) {
    return res.status(400).send({ error: `${id} is not a valid id.`, status: 400 });
  }

  const rows = await db.getJokeByID(id);
  if (!rows || rows.length <= 0) {
    return res.status(400).send({ error: `could not find a joke by id ${id}`, status: 404 });
  }

  res.status(200).send(rows);
};

const getRandomJoke = async (req, res) => {
  const {
    category: categoryQuery,
    search: searchQuery,
  } = req.query;

  const category = categoryQuery && categoryQuery.length > 1024 ? categoryQuery.substring(0, 1024) : categoryQuery;
  const search = searchQuery && searchQuery.length > 1024 ? searchQuery.substring(0, 1024) : searchQuery;

  if (category) {
    const rows = await db.getJokeCategory(category);
    return res.status(200).send(rows);
  }

  if (search) {
    const rows = await db.getJokeExact(search);
    if (rows && rows.length > 0) {
      return res.status(200).send(rows);
    }

    const rowsExtra = await db.getJokeAnyWord(search);
    if (rowsExtra && rows.length > 0) {
      return res.status(200).send(rowsExtra);
    }
    return res.status(400).send({ error: `error fetching joke with search ${search}`, status: 400 });
  }

  const rows = await db.getRandomJoke();
  if (!rows || rows.length <= 0) {
    return res.status(400).send({ error: 'error fetching random joke', status: 400 });
  }

  return res.status(200).send(rows);
};

module.exports = {
  getJokeByID,
  getRandomJoke,
};
