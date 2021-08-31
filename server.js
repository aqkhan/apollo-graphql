const express = require("express");
const cors = require("cors");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./Schema/typeDefs");
const resolvers = require("./Schema/resolvers");
const dotenv = require("dotenv");
const generateCustomerModel = require("./Schema/models/customerModel");

dotenv.config();
const PORT = process.env.PORT || 5500;

(async function () {
  // Creating apollo server
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => {
      return {
        models: {
          customerModel: generateCustomerModel(),
        },
      };
    },
  });

  const app = express();

  // Middlewares
  app.use(express.json()); // bodyparser
  app.use(cors());

  // Starting Apollo Server
  await server.start();
  server.applyMiddleware({ app });

  // Starting Express server
  app.listen(PORT, () =>
    console.log(
      `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
    )
  );
})();
