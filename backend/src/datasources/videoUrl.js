const { RESTDataSource } = require("apollo-datasource-rest");
const { DatabaseProcess } = require("../db/databaseProcess");
const { VideoProps } = require("../db/constant");

class VideoURLS extends RESTDataSource {
  constructor(databaseRepo = new DatabaseProcess()) {
    super();
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
