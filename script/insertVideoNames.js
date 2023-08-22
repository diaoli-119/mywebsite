const mysql = require('mysql2/promise');
const getVideoNames = require('./getVideoNames')

const pool = mysql.createPool({
  host: '192.166.225.8',
  user: 'eksvideo_root',
  password: 'siS2xshBSxnSXAnH',
  database: 'eksvideo_videoresources',
});

async function insertVideoNames() {
  // await createVideoSourceTable()
  const nameList = await getVideoNames('F:/video/jpmm');
  console.log('nameList =', nameList);
  try {
    const connection = await pool.getConnection();
    const insertQuery = `
      INSERT INTO videoresource (name, link)
      VALUES (?, ?);
    `;
  
    for (const name of nameList) {
      const [rows] = await connection.execute(insertQuery, ['', name]);
    
      console.log('Inserted:', rows.affectedRows, 'row(s)');
    }
  } catch (error) {
    console.error('Error inserting data:', error);
  } finally {
    // Release the connection back to the pool
    pool.end();
  }
}

insertVideoNames();
