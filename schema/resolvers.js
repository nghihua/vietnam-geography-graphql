const regions_data = require('../data/regions.json');
const subregions_data = require('../data/subregions.json');
const provinces_data = require('../data/provinces.json');

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
		},
		provinces() {
			return provinces_data;
		},
		province(parent, args) {
			return provinces_data.find(province => province.code == args.code);
		}
	},

	Subregion: {
		region(parent, args) {
			return regions_data.find(region => region.code = parent.region);
		}
	},

	Province: {
		subregion(parent, args) {
			return subregions_data.find(subregion => subregion.code = parent.subregion);
		}
	}
}

module.exports = { resolvers };