import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cookieParser from 'cookie-parser';

import connectDB from './config/db.js';
import { notFound,errorHandler } from './middlewares/errorMiddleware.js';
import userRoutes from './routes/userRoutes.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.use('/api/users',userRoutes)

app.use(notFound);
app.use(errorHandler);

connectDB();
app.listen(port, () => console.log(`Server running on port ${port}`));

