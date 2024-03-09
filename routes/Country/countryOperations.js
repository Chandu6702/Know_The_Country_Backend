import Country from '../../Database/Schemas/Country.js'

async function addCountry(name,info,history,geography,culture){
    await Country.insertMany({name:name,info:info,history:history,geography:geography,culture:culture});
    console.log("added successfully");
}

async function findCountry(name){
    let res=await Country.findOne({name:name});
    console.log(res);
    return res;
}

export {addCountry,findCountry}