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

	type Province {
		code: String!
		name: String!
		capital: String!
		subregion: Subregion!
		license_plate: [Int]!
		zip_code: String!
		website: String!
		area: Float!
	}

	type Query {
		regions: [Region]!
		region(code: String!): Region
		subregions: [Subregion]!
		subregion(code: String!): Subregion
		provinces: [Province]!
		province(code: String!): Province
	}
`;

module.exports = { typeDefs };