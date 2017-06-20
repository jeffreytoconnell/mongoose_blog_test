exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                       'mongodb://jeff:gunner@ds115352.mlab.com:15352/blogchallenge'

exports.TEST_DATABASE_URL = (
	process.env.TEST_DATABASE_URL ||
	'mongodb://localhost/test-blog-app');

exports.PORT = process.env.PORT || 8080;
