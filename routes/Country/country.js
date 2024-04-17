import express from "express";
import {addCountry,findCountry} from './countryOperations.js'

const router= express.Router()

router.get('/:name',async (req,res)=>{
    const {name} =req.params
    let response=await findCountry(name);
    res.send(response);
})

router.post('/add',async (req,res)=>{
    const{name,info,history,geography,culture}=req.body;
    console.log(req.body);
    let response =await addCountry(name,info,history,geography,culture)
    res.send(response)
})

export default router
