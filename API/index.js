import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import busRoutes from "./routes/route.js"

dotenv.config();

const mongoString = process.env.DATABASE_URL

mongoose.connect(mongoString, { useNewUrlParser: true });
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})


const app = express();

const PORT = process.env.PORT || 5002;

app.use(bodyParser.json());

app.use('/', busRoutes)

app.listen(
    PORT,
    () => console.log(`Server running on http://localhost:${PORT}`)
)