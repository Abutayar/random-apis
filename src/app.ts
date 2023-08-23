import express from 'express';
import path from 'path';
import { createServer } from 'http';
import { engine } from 'express-handlebars';
import routes from './routes';

const app = express();
const server = createServer(app);

app.engine(
  'hbs',
  engine({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, '../views/layouts'),
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../views'));

app.use(express.static(path.join(__dirname, '../public')));
app.use('/', routes);

export default server;
