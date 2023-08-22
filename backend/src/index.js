const dotenv = require("dotenv");
const { ApolloServer } = require("apollo-server"); // Import from apollo-server
const { readFileSync } = require("fs");
const path = require("path");
const { resolvers } = require("./resolvers/resovler");
const { VideoURLS } = require("./datasources/videoUrl");

async function startApolloServer() {
  const schemaPath = path.join(__dirname, "schema", "schema.graphql");
  const typeDefs = readFileSync(schemaPath, "utf8");
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async () => {
      return {
        dataSources: {
          VideoURLS: new VideoURLS(),
        },
      };
    },
  });

  dotenv.config();
  const port = parseInt(process.env.PORT || "8011");

  try {
    await server.listen(port); // Use server.listen directly
    console.log(`🚀  Server ready at http://localhost:${port}`);
  } catch (err) {
    console.error(err);
  }
}

startApolloServer();
