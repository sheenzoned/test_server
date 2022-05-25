const { CREATE_USER } = require("./Mutations/User");
const { GET_ALL_PROJECTS } = require("./Queries/Project");
const { GET_ALL_USERS, GET_USER } = require("./Queries/User");

const graphql = require("graphql");
const { FAVORITE_PROJECT } = require("./Mutations/Project");
const { GraphQLObjectType, GraphQLSchema } = graphql;

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getUser: GET_USER,
    getAllUsers: GET_ALL_USERS,
    getAllProjects: GET_ALL_PROJECTS,
  },
});
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: CREATE_USER,
    favoriteProject: FAVORITE_PROJECT,
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
