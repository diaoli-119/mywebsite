const { sequelize, closeDatabaseConnection } = require('../db/sequelize');
const readCSVFile = require('./CSVReader');

async function saveLinkToDatabase(links) {
  try {
    const query = 'INSERT INTO videosource (name, link) VALUES ($1, $2)';
    for (const elem of links) {
        const { name, link } = elem;
        const values = [name, link];
        await sequelize.query(query, { bind: values });
      }
    console.log('Link saved successfully');
  } catch (error) {
    console.error('Error saving link:', error);
  } finally {
    // Close the database connection
    closeDatabaseConnection();
  }
}

const csvFile = '../files/videoLinks.csv'
readCSVFile(csvFile)
  .then((links) => {
    saveLinkToDatabase(links);
    console.log('Links:', links);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
