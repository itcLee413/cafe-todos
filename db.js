const mysql = require("mysql2/promise");

// 커넥션 풀: 연결을 미리 만들어 두고 재사용한다
const pool = mysql.createPool({
  host: "localhost",
  user: "subject042",
  password: "subject042",
  database: "cafe",
  connectionLimit: 5,
});

module.exports = pool;
