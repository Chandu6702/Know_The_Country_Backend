import mongoose from 'mongoose'

async function dbConnect(){
    try{
        const URI='mongodb+srv://chandrasekhara:chandu067@cluster0.6apvkj6.mongodb.net/countries'
        await mongoose.connect(URI)
        console.log('connected to database')
    }
    catch(error){
        throw new Error(error.message);
    }
}

export default dbConnect