const mysql = require('mysql2/promise');
const { VideoProps } = require('./constant');

class DatabaseProcess {
  constructor() {}

  async checkTableAndSelectData() {
    const connection = await mysql.createConnection({
      host: 'au32.tmd.cloud',
      user: 'eksvideo_root',
      password: '92n]PocV$+]b',
      database: 'eksvideo_videoresources',
    });

    try {
      const selectQuery = `SELECT * FROM videosource`;

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
