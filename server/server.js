import express from 'express';
import cors from 'cors';
import authRouter from "./router/authapi.js"
import infoRouter from "./router/infoapi.js"
import wsRouter from "./router/wsapi.js"

const app = express();
const PORT = process.env.PORT || 5000;

// readdirSync("router").map(p => app.use("api",require(`./router/${p}`)))
app.use(express.json());
app.use(cors())

app.use('api/ws' , wsRouter)
app.use('/api/auth', authRouter);
app.use('/api/info' , infoRouter)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
