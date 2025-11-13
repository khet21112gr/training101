import express from 'express';
import cors from 'cors';
import authRouter from "./router/authapi.js"

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors())

app.use('/api/auth', authRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
