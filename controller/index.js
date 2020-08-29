import Restaurant from '../model/restaurantModel.js';

export default {
	// Get all data from data Base
	getAllData: async (req, res) => {
		try {
			const { page, limit } = req.body;
			const options = {
				page,
				limit,
			};
			const result = await Restaurant.getAllDataFromModel(options);
			const total = result.length;
			return res
				.status(200)
				.json({ data: { msg: true, page, limit, totalPages: Math.ceil(total / limit), result } });
		} catch (err) {
			return res.status(500).json({ data: { msg: false, error: err } });
		}
	},
	searchBy: async (req, res) => {
		try {
			const { page, limit, q, f } = req.body;
			const options = { page, limit, q };
			let results = [];
			results = await Restaurant.searchByAllField(options);
			let total = results.length;
			const regex = new RegExp(f, 'gi');
			const filterResult = results.filter((result) => result.Category.match(regex));
			total = filterResult.length;
			return res.status(200).json({
				data: { msg: true, page, limit, total, totalPages: Math.ceil(total / limit), filterResult },
			});
		} catch (err) {
			return res.status(500).json({ data: { msg: false, error: err } });
		}
	},
};
