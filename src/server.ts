import express, {Express, Request, Response} from 'express';
import router from './app/database/routes.js';
import bodyParser from 'body-parser';
import cors from 'cors';


const app: Express = express();
const port: number = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('This is Express + Typescript!');
});


app.use("/api/v1/flashcards", router);

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.listen(port, () => console.log(`app is listening on port ${port}`));


