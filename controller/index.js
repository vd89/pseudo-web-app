import Restaurant from '../model/restaurantModel.js';

export default {
	getAllData: async (req, res) => {
		try {
			const { page, limit } = req.body;
			const options = {
				page,
				limit,
			};
			const result = await Restaurant.getAllDataFromModel(options);
			return res.status(200).json({ data: { msg: true, result } });
		} catch (err) {
			return res.status(500).json({ data: { msg: false, error: err } });
		}
	},
};
