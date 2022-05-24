const express = require("express");
const app = express();
const PORT = 9001;
const graphql = require("graphql");
const schema = require("./Schemas");
const cors = require("cors");

const { graphqlHTTP } = require("express-graphql");

app.use(cors()); // enable `cors` to set HTTP response header: Access-Control-Allow-Origin: *
app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));
app.listen(PORT, () => {
  console.log("Server running");
});
