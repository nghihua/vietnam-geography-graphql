const regions_data = require('../data/regions.json');
const subregions_data = require('../data/subregions.json');

const resolvers = {
	Query: {
		regions() {
			return regions_data;
		},
		region(parent, args) {
			return regions_data.find(region => region.code == args.code);
		},
		subregions() {
			return subregions_data;
		},
		subregion(parent, args) {
			return subregions_data.find(subregion => subregion.code == args.code);
		}
	},

	Subregion: {
		region(parent, args) {
			return regions_data.find(region => region.code = parent.region);
		}
	}
}

module.exports = { resolvers };