const graphql = require("graphql");
const { GraphQLInt, GraphQLList } = graphql;
const UserType = require("../TypeDefs/UserType");
const userData = require("../../data/users.json");

const GET_ALL_USERS = {
  type: new GraphQLList(UserType),
  args: {},
  resolve(parent, args) {
    return userData;
  },
};

const GET_USER = {
  type: new GraphQLList(UserType),
  args: { id: { type: GraphQLInt } },
  resolve(parent, args) {
    return userData;
  },
};
module.exports = { GET_ALL_USERS, GET_USER };
