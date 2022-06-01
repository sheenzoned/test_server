const graphql = require("graphql");
const { GraphQLInt, GraphQLBoolean, GraphQLString } = graphql;

const ProjectType = require("../TypeDefs/ProjectType");
const projectData = require("../../data/projects.json");
const FlowType = require("../TypeDefs/FlowType");

const FAVORITE_PROJECT = {
  type: ProjectType,
  args: {
    id: { type: GraphQLInt },
    isFavorite: { type: GraphQLBoolean },
  },
  resolve(parent, args) {
    projectData.map((data) => {
      if (data.id === args.id) data.isFavorite = args.isFavorite;
    });
    return args;
  },
};

const CREATE_NEW_WORKFLOW = {
  type: FlowType,
  args: {
    id: { type: GraphQLInt }, //projectID
    flowName: { type: GraphQLString },
    scope: { type: GraphQLString },
    lastRun: { type: GraphQLString },
  },
  resolve(parent, args) {
    projectData.map((data) => {
      if (data.id === args.id)
        data.flows.push({
          id: data.flows.length + 1,
          flowName: args.flowName,
          scope: args.scope,
          lastRun: args.lastRun,
        });
    });
    return args;
  },
};

module.exports = { FAVORITE_PROJECT, CREATE_NEW_WORKFLOW };
