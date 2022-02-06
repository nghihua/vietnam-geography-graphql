const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./schema/type-defs.js');
const { resolvers } = require('./schema/resolvers.js');

const server = new ApolloServer({
	typeDefs,
	resolvers,
	introspection: true,
  	playground: true
});

server.listen({ port: process.env.PORT || 4000 }).then(({url}) => {
	console.log(`
	    🚀  Server is ready at ${url}
	    📭  Query at https://studio.apollographql.com/dev
	  `);
});