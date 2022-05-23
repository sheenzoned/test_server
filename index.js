const express = require("express");
const app = express();
const PORT = 9001;
const graphql = require("graphql");
const schema = require("./Schemas");

const { graphqlHTTP } = require("express-graphql");

app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));
app.listen(PORT, () => {
  console.log("Server running");
});
