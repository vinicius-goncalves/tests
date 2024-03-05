import path from 'path';
import express from 'express';
const app = express();
const p = path.join(path.dirname(import.meta.url), 'assets');
console.log(p);
app.use('/data', express.static('public'));
app.get('/', (req, res) => {
    res.status(200).json({ success: true }).end();
});
app.listen(8080, () => console.log('Server started on port %d', 8080));
