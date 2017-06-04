module.exports = function (models, jwt) {
	var controller = {
		authenticate: authenticate,
		authorize: authorize
	};
	return controller;

	function authenticate(req, res, next) {

		var User = models.User;
		var username = req.query.username;
		var password = req.query.password;
		User.where('username', username)
			.fetch()
			.then(function (user) {

				if (user && user.attributes.id && user.attributes.status === 'A') {
					var token = jwt.sign({
						id: user.id,
						username: user.username
					}, 'supersecret!!');
					res.status(200)
						.json({
							status: 200,
							token: token
						})
				} else {
					res.status(401)
						.json({
							status: 401,
							errorMsg: "Unauthorized"
						})
				}
			})
			.catch(function (e) {
				console.error(e);
				res.status(500)
					.json({
						status: 500,
						errorMsg: "Authentication error"
					});
			});

	};


	function authorize(req, res, next) {
		
	};


};
