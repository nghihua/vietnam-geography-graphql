const { gql } = require("apollo-server");

const typeDefs = gql`
	type Region {
		code: String!
		name: String!
		area: Float!
	}

	type Subregion {
		code: String!
		region: Region
		name: String!
		area: Float!
	}

	type Query {
		regions: [Region]!
		region(code: String!): Region
		subregions: [Subregion]!
		subregion(code: String!): Subregion
	}
`;

module.exports = { typeDefs };