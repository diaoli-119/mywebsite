const fs = require('fs');

function getVideoNames(folderPath) {
  return new Promise((resolve, reject) => {
    fs.readdir(folderPath, (err, files) => {
      if (err) {
        console.error('Error reading directory:', err);
        reject(err);
        return;
      }

      const videoNames = files.filter(file => {
        // Filter out non-video files if needed
        return file.endsWith('.mp4') || file.endsWith('.avi') || file.endsWith('.mkv');
      });

      resolve(videoNames);
    });
  });
}

module.exports = getVideoNames;
