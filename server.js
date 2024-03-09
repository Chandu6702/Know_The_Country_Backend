import app from './app.js'
import dbConnect from './Database/dbConnect.js'

dbConnect().then(()=>{
    const Port=3000
    app.listen(Port,()=>{
        console.log('Server is running');
        console.log('http://127.0.0.1:3000/');
    })
}).catch((reason)=>{
    console.log(reason.message);
})