const initialize =async (axios,user,amount,req)=>{
    try{

    
    let initialize = await axios.post('https://api.paystack.co/transaction/initialize',{
        email:`${user.email}`,
        name:`${user.name}`,
        amount:amount*100,
        callback_url:`${req.hostname}:${process.env.PORT}/fundWallet/verify/`,
        
        metadata:{
            "custom_fields":[
                           {"userId":`${user._id}`,}
                        ]
        }
   },
   {
       headers : {
           authorization: process.env.MySecretKey,
           'content-type': 'application/json',
           'cache-control': 'no-cache'    
       },})
       return initialize.data
}catch (e) {
    return e.response.data

}

}
const verify = async(axios,ref)=>{
    try{
        let verify =  await axios.get(`https://api.paystack.co/transaction/verify/${(ref)}` ,{
            headers : {
                authorization: process.env.MySecretKey,
                'content-type': 'application/json',
                'cache-control': 'no-cache'    
            }
    
                })
       return verify.data

    }catch(e){
    return e.response.data
    }
   
}
export {initialize,verify}