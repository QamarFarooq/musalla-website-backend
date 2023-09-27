const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'musallah_website_database',
    password: `${process.env.MUSALLAH_WEBSITE_DATABASE_PASSWORD}`
})

module.exports = pool.promises();