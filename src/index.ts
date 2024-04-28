import express from 'express';
import UserRoute from './routes/UsersRoute';

const app = express();

app.use('/api/users',UserRoute);

const PORT = 4000;

app.listen(PORT,()=>{
    console.log(`Running on Port ${PORT}`);
});