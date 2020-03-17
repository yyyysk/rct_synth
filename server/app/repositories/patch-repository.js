const db = require('../models/index');
const patch = db.patch;

class PatchRepository {

	/**
	 * Patch作成
	 * @param {object} data
	 * @return promise
	 */
	create(params) {
		return new Promise((resolve, reject) => {
			patch.create(params)
				.then(patch => resolve(patch))
				.catch(err => console.error(err));
		});
	};

	/**
	 * Pagination
	 * @param pageNum
	 */
	getAll(page) {
		const pageNum = 10;
		return new Promise((resolve, reject) => {
			patch.findAll({
				limit: pageNum,
				offset: pageNum * page,
				order: [['id', 'ASC']],
				raw: true
			})
				.then(patches => resolve(patches))
				.catch(err => console.log(err));
		});
	}

}

module.exports = PatchRepository;
