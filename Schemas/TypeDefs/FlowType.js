const graphql = require("graphql");
const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql;

const FlowType = new GraphQLObjectType({
  name: "Flow",
  fields: () => ({
    id: { type: GraphQLInt },
    flowName: { type: GraphQLString },
    scope: { type: GraphQLString },
    lastRun: { type: GraphQLString },
  }),
});

module.exports = FlowType;
