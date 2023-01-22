const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static("."));

const cors = require('cors');
app.use(cors());

app.listen(8070);
const rootRoute = require('./routes');
app.use("/api", rootRoute);

const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const options = {
    definition: {
        info: {
            title: "Airbnb",
            version: "1.0.0"
        }
    },
    apis: ["swagger/index.js"]
}

const specs = swaggerJsDoc(options);

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(specs));