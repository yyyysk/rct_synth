const repository = require('../repositories/patch-repository');
const repo = new repository();

/**
 * patch 作成
 */
exports.create = (req, res, next) => {
	const data = req.body;
	repo.create(data)
		.then(patch => res.json({ result: patch }))
		.catch(err => console.error(err));
};

/**
 * ページング
 */
exports.getAll = (req, res, next) => {
	const page = req.query.page;
	repo.getAll(page)
		.then(patches => res.json({ result: patches }))
		.catch(err => console.error(err));
};

/**
 * Patch取得
 */
exports.getOne = (req, res, next) => {
	const id = req.params.id;
	console.log('repo', id);
	repo.getOne(id)
		.then(patch => res.json({ result: patch}))
		.catch(err => console.error(err));
};

