

const fundWaletService = ({ response,wallets,users,funds,ObjectId,axios,initialize,verify }) => {
	return {
		async fund({ user,req,res }) {
            let amount = req.body.amount
			try {
                if(!amount || isNaN(amount) || amount<100) {
                	return response.badRequestError(
						"provide a valid amount also provide an amount more than 100",
						null,
						400
                    );}
                let init = await initialize(axios,req.user,amount,req)
                console.log(init)
				
                    res.redirect(init.data. authorization_url)
				// }
				// return response.serverError();
			} catch (e) {
				return response.serverError(e.toString());
			}
        },
        async verify({ref,req,res }) {
            // let amount = req.body.amount
			try {
                let verifi = await verify(axios,ref)
                // console.log(verifi)
                // console.log(verifi.data.metadata.userId)
                
                return response.success(
						"payment verified",
						{userPaid:verifi.data.metadata.userId,data:verifi.data},
						200
                    );
			} catch (e) {
				return response.serverError(e.toString());
			}
		},
	};
};

export default fundWaletService;


