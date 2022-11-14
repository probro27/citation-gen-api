import express, { Application } from 'express';
import routes from './routes';

const app: Application = express();

const PORT = process.env.PORT || 8080;

app.use(routes);

app.listen(PORT, () => {
    console.log(`Express API is listening on port ${PORT}`);
});

export default app;
