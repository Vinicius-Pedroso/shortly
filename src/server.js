import express from "express";
import cors from "cors";
import routerSigns from './routes/signs.routes.js';
import routerUrls from './routes/urls.routes.js';
import routerUsers from './routes/users.routes.js';
import routerRankings from './routes/rankings.routes.js';
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json);

app.use(routerSigns);
app.use(routerUrls);
app.use(routerUsers);
app.use(routerRankings);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`server running on port ${port}`));
