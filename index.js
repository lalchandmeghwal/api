import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import studnetRouters from './app/routes/web/studentRoutes.js';


const app = express();
app.use(express.json());

app.use('/web/api', studnetRouters)









mongoose.connect(process.env.DBURL).then(() => {
    console.log('connected to mongodb');
    const port = process.env.PORT || 1000;
    app.listen(port, () => {
        console.log(`Server is runing on //http://localhost:${port}`)
    });
})