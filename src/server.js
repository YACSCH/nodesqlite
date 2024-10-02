import express from 'express';
import itemsRoutes from './routes/items.routes.js'
const app = express();

app.use(express.json());

app.use("/api/v1", itemsRoutes);

app.listen(3000, ()=> {
    console.log('Server is running on port 3000')
})