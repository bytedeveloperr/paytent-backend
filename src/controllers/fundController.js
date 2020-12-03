
const fundWalletController = ({ fundWalletService }) => {
	return {
		async fund(req, res) {
			try {
				let response = await fundWalletService.fund({
					user: req.user,req,res
				});
				res.status(response.status).json(response);
			} catch (e) {
				res.status(500).json({ message: e.toString(), status: 500 });
				throw e;
			}
        },
        async verify(req, res) {
			try {
				let response = await fundWalletService.verify({
					ref:req.query.trxref,req,res
				});
				res.status(response.status).json(response);
			} catch (e) {
				res.status(500).json({ message: e.toString(), status: 500 });
				throw e;
			}
		},
	};
};

export default fundWalletController;
