const graphql = require("graphql");
const { GraphQLInt, GraphQLBoolean } = graphql;

const ProjectType = require("../TypeDefs/ProjectType");
const projectData = require("../../data/projects.json");

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

module.exports = { FAVORITE_PROJECT };
