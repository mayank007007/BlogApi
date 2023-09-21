import express from 'express';
import swagger, { serve } from 'swagger-ui-express';
import mongoose from 'mongoose';
import router from './routes/user-routes.js';
import blogRouter from './routes/blog-routes.js';

import apiDocs from './swagger.json' assert {type: 'json'};
import jwtAuth from './middlewares/jwtMiddleware.js';
const app = express();
app.use(express.json());
// mongodb+srv://mayanksaraswat77:WLC14CHVVGXn49Et@issue-tracker.bhysxdn.mongodb.net/?retryWrites=true&w=majority
//hN2GBjK6mY7hkNK2
app.use('/api/user', router);
app.use('/api/blog', jwtAuth, blogRouter);
app.use('/api-docs', swagger.serve, swagger.setup(apiDocs));
app.use((req, res) => {
    res.status(404).send('API not found. Please check our docs at localhost:5000/');
});
mongoose.connect('mongodb+srv://mayanksaraswat77:WLC14CHVVGXn49Et@issue-tracker.bhysxdn.mongodb.net/Blog?retryWrites=true&w=majority'
).then(() => {
    app.listen(5000, () => {
        console.log("server listening on port 5000");
    })
}).then(() => { console.log("Connected to Database") }).catch((err) => {
    console.log(err);
});
