const { DatabaseProcess } = require("../db/databaseProcess");

class VideoURLS  {
  constructor(databaseRepo = new DatabaseProcess()) {
    this.databaseRepo = databaseRepo;
  }

  async getVideoUrls() {
    try {
      const idAndLinks = await this.databaseRepo.checkTableAndSelectData();
      return idAndLinks;
    } catch (error) {
      console.error("Unable to connect to the database:", error.message);
    }
  }
}

module.exports = { VideoURLS };
