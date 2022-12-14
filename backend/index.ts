import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import artRoutes from './routes/artRoutes';
dotenv.config();

const PORT = 8000;
const app = express();

app.use(cors());
app.use('/art', artRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

export default app;
