import express from 'express';
import mongoose from 'mongoose';
import { setResourceRoutes } from './routes/resourceRoutes';
import { responseFormatter } from './middlewares/response';
import { config } from 'dotenv'

config();

const app = express();
const PORT = process.env.PORT || 3000;
const DB_CONNECTION = process.env.DB_CONNECTION || 'mongodb://127.0.0.1:27017/demo'

app.use(express.json());
app.use(responseFormatter);

mongoose.connect(DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to the database');
})
.catch(err => {
  console.error('Database connection error:', err);
});

setResourceRoutes(app);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});