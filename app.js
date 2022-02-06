const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./schema/type-defs.js');
const { resolvers } = require('./schema/resolvers.js');

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({url}) => {
	console.log(`server is running at ${url}`);
});