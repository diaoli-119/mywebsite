import axios from 'axios';
import cheerio from 'cheerio';
import mysql from 'mysql2/promise';


const pool = await mysql.createPool({
  host: 'au32.tmd.cloud',
  user: 'eksvideo_root',
  password: '92n]PocV$+]b',
  database: 'eksvideo_videoresources',
});

async function parseHTMLAndGetHrefs(url = 'https://eksvideo.com/videos/') {
  try {
    const response = await axios.get(url);
    const html = response.data;
  
    const $ = cheerio.load(html);
  
    const hrefValues = [];
    $('td[data-sort] a').each((index, element) => {
      const hrefValue = $(element).attr('href');
      const cleanHref = hrefValue.replace('/videos/', '');
      if (cleanHref) {
        hrefValues.push(cleanHref);
      }
    });
  
    return hrefValues;
  } catch (error) {
    console.error('Error fetching or parsing the HTML:', error.message);
    return [];
  }
}

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

async function insertVideoLinks() {
    // await createVideoSourceTable()
    const urlList = await parseHTMLAndGetHrefs();
    try {
      const connection = await pool.getConnection();
      const insertQuery = `
        INSERT INTO videosource (name, link)
        VALUES (?, ?);
      `;
  
      for (const hrefValue of urlList) {
        const name = 'Video Name'; // You can set the name as needed
        console.log('hrefValue =', hrefValue)
        const [rows] = await connection.execute(insertQuery, [name, hrefValue]);
    
        console.log('Inserted:', rows.affectedRows, 'row(s)');
      }
    } catch (error) {
      console.error('Error inserting data:', error);
    } finally {
      // Release the connection back to the pool
      pool.end();
    }
}

insertVideoLinks();