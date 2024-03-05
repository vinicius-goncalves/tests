import path from 'path';
import express, { type Express, type Response, type Request } from 'express';

const app: Express = express();

const p = path.join(path.dirname(import.meta.url), 'assets');
console.log(p);

app.use('/data', express.static('public'))

app.get('/', (req: Request, res: Response): void => {
    res.status(200).json({ success: true }).end();
});

app.listen(8080, (): void => console.log('Server started on port %d', 8080));