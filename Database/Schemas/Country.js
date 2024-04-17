import mongoose from 'mongoose'

const Schema = {
    name:{
        type:String,
        required:true,
        unique:true
    },
    info:{
        type:String,
        required:true,
        // unique:true
    },
    history:{
        type:String,
        required:true,
        // unique:true
    },
    geography:{
        type:String,
        required:true,
        // unique:true
    },
    culture:{
        type:String,
        required:true,
        // unique:true
    }
}

const CountrySchema=new mongoose.Schema(Schema)

const Country=new mongoose.model('Countries',CountrySchema)



export default Country