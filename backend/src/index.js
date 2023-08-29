const express = require("express")
const dotenv = require("dotenv")
const https = require("https")
const fs = require("fs")
const { ApolloServer } = require("apollo-server-express")
const { readFileSync } = require("fs")
const path = require("path")
const cors = require("cors")
const { resolvers } = require("./resolvers/resovler")
const { VideoURLS } = require("./datasources/videoUrl")

const app = express()
app.use(cors())

async function startApolloServer() {
  const schemaPath = path.join(__dirname, "schema", "schema.graphql")
  const typeDefs = readFileSync(schemaPath, "utf8")
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async () => {
      return {
        dataSources: {
          VideoURLS: new VideoURLS(),
        },
      }
    },
  })

  await server.start()

  server.applyMiddleware({
    app,
    cors: {
      origin: "https://sexypoolz.com",
      credentials: true,
    },
  })

  const options = {
    key: fs.readFileSync("./private.key"),
    cert: fs.readFileSync("./certificate.crt"),
  }

  console.log("options =", options)

  dotenv.config()
  const port = parseInt(process.env.PORT || "8011")
  try {
    const httpsServer = https.createServer(options, app)

    httpsServer.listen(port, () => {
      console.log(`🚀 Server ready at https://sexypoolz.com:${port}`)
    })
  } catch (err) {
    console.error(err)
  }
}

startApolloServer()
