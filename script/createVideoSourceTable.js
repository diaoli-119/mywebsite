const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: '192.166.225.8',
  user: 'sexypoolz_root',
  password: 'wMMCJftG7Dxa43AE',
  database: 'sexypoolz_root',
});

async function createVideoSourceTable() {

    try {
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS videoresource (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(100),
          link VARCHAR(255)
        );
      `;
  
      await pool.query(createTableQuery);
      console.log('videoresource table created successfully!');
    } catch (error) {
      console.error('Error creating videosource table:', error.message);
    } finally {
      pool.end();
    }
  }

  createVideoSourceTable()