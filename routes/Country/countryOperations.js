import Country from '../../Database/Schemas/Country.js'

async function addCountry(name,info,history,geography,culture){
    try
    {
        await Country.insertMany({name:name,info:info,history:history,geography:geography,culture:culture});
        console.log("added successfully");
        return {status:true}
    }
    catch(error){
        return {status:false}
    }
}

async function findCountry(name){
    let res=await Country.findOne({name:name});
    if(res)
    { 
        console.log(res);
        return {res,status:true};
    }
    return {status:false}
}

export {addCountry,findCountry}