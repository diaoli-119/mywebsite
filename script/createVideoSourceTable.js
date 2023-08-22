

async function createVideoSourceTable() {

    try {
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS videosource (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(100),
          link VARCHAR(255)
        );
      `;
  
      await pool.query(createTableQuery);
      console.log('videosource table created successfully!');
    } catch (error) {
      console.error('Error creating videosource table:', error.message);
    } finally {
      pool.end();
    }
  }