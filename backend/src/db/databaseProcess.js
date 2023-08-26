const mysql = require('mysql2/promise');

class DatabaseProcess {
  constructor() {}

  async checkTableAndSelectData() {
    const connection = await mysql.createConnection({
      host: '192.166.225.8',
      user: 'sexypoolz_root',
      password: 'wMMCJftG7Dxa43AE',
      database: 'sexypoolz_root',
    });

    try {
      const selectQuery = `SELECT * FROM videoresource`;

      const [rows] = await connection.query(selectQuery);

      const videoPropsArray = rows.map((row) => ({
        id: row.id,
        name: row.name,
        link: row.link,
      }));

      console.log('videoPropsArray =', videoPropsArray);
      return videoPropsArray;
    } catch (error) {
      console.error('Error creating videosource table:', error.message);
    } finally {
      connection.end();
    }
  }
}

module.exports = {
  DatabaseProcess
};
