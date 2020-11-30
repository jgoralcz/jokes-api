const { poolQuery } = require('./pool');

const addJoke = async (title, body, score, category, redditID) => poolQuery(`
  INSERT INTO jokes_table (title, body, score, category, reddit_id)
  VALUES ($1, $2, $3, $4, $5)
  ON CONFLICT (title, body) DO NOTHING;
`, [title, body, score, category, redditID]);

const getJokeCategory = async wordOrPhrase => poolQuery(`
  SELECT *
  FROM (
    SELECT *
    FROM jokes_table
    WHERE length(body) <= 1400 AND category = $1 AND (score >= 2 OR score IS NULL)
    ORDER BY score
    LIMIT 1000
  ) t1
  ORDER BY random()
  LIMIT 20;
`, [wordOrPhrase]);


/**
 * gets the joke exactly how it was spelt from the user.
 * @param wordOrPhrase the word or phrase they're looking for.
 * @returns {Promise<void>}
 */
const getJokeExact = async wordOrPhrase => poolQuery(`
  SELECT *
  FROM (
    SELECT *
    FROM jokes_table
    WHERE length(body) <= 1400 AND ( body ~ ('(\\s+|^)' || $1 || '([^a-zA-Z]|$)') OR title ~ ('(\\s+|^)' || $1 || '([^a-zA-Z]|$)') )
      AND (score >= 2 OR score IS NULL)
    ORDER BY score
    LIMIT 1000
  ) t1
  ORDER BY random()
  LIMIT 20;
`, [wordOrPhrase]);

const getJokeAnyWord = async wordOrPhrase => poolQuery(`
  SELECT *
  FROM (
    SELECT *
    FROM jokes_table
    WHERE length(body) <= 1400 AND (body ILIKE '%' || $1 || '%'  OR title ILIKE '%' || $1 || '%' ) AND (score >= 4 OR score IS NULL)
    ORDER BY score
    LIMIT 1000
  ) t1
  ORDER BY random()
  LIMIT 20;
`, [wordOrPhrase]);

const getRandomJoke = async () => poolQuery(`
  SELECT *
  FROM jokes_table
  WHERE length(body) <= 1400 AND (score >= 20) AND
  r > (
    SELECT MAX(r)
    FROM jokes_table
  ) * random()
  ORDER BY r
  LIMIT 20;
`, []);

const getJokeByID = async (id) => poolQuery(`
  SELECT *
  FROM jokes_table
  WHERE id = $1;
`, [id])

module.exports = {
  addJoke,
  getJokeCategory,
  getJokeExact,
  getJokeAnyWord,
  getRandomJoke,
  getJokeByID,
};
