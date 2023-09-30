import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './routes/routes.js';
import DBConnection from './database/db.js';

const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/', router);

DBConnection();


app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));