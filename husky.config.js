module.exports = {
	hooks: {
		"commit-msg": "commitlint -e",
		"pre-commit": "lint-staged"
	}
};
