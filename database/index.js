const { Pool } = require('pg')

const pool = new Pool({
    user: 'qslexwdr',
    host: 'mahmud.db.elephantsql.com',
    database: 'qslexwdr',
    password: 'zD1lWEUE5C51gizZalyV8ANvWDYZn4BI',
    port: 5432,
    max: 2
  });

pool.connect((err) => {
    if (err) throw new Error(err);
    else console.log('connected to db!');
});

module.exports = pool;