const graphql = require("graphql");
const FlowType = require("./FlowType");
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLBoolean,
} = graphql;

const ProjectType = new GraphQLObjectType({
  name: "Project",
  fields: () => ({
    id: { type: GraphQLInt },
    projectName: { type: GraphQLString },
    isActive: { type: GraphQLBoolean },
    flows: { type: new GraphQLList(FlowType) },
  }),
});

module.exports = ProjectType;
