import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routerSigns from './routes/signs.routes.js';
import routerUrls from './routes/urls.routes.js';
import routerUsers from './routes/users.routes.js';
import routerRankings from './routes/rankings.routes.js';
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json)

app.use(routerSigns);
app.use(routerUrls);
//app.use(routerUsers);
//app.use(routerRankings)

const port = process.env.PORT;
app.listen(port, ()=> console.log(`server running on port ${port}`))