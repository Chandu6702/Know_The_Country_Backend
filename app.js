import  express from 'express'
import cors from 'cors'
import countryRoutes from './routes/Country/country.js'

const app=express()

app.use(cors())
app.use(express.json())
app.use(countryRoutes)

export default app