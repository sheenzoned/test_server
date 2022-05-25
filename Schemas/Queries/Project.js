const graphql = require("graphql");
const { GraphQLList } = graphql;

const ProjectType = require("../TypeDefs/ProjectType");
const projectData = require("../../data/projects.json");

const GET_ALL_PROJECTS = {
  type: new GraphQLList(ProjectType),
  args: {},
  resolve(parent, args) {
    return projectData;
  },
};

module.exports = { GET_ALL_PROJECTS };
