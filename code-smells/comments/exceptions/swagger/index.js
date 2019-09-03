const express = require('express');
const app = express();
const expressSwagger = require('express-swagger-generator')(app);

const PORT = 3000;
const DOCS_URL = "/docs/api";

const options = {
  swaggerDefinition: {
    info: {
      description: 'This is a sample server',
      title: 'Swagger',
      version: '1.0.0',
      contact: { email: 'inigo.marquinez@guidesmiths.com' },
    },
    host: 'localhost:3000',
    basePath: '/v1',
    produces: [
      "application/json",
      "application/xml"
    ],
    schemes: ['http', 'https'],
    securityDefinitions: {
      JWT: {
        type: 'apiKey',
        in: 'header',
        name: 'Authorization',
        description: "",
      }
    }
  },
  basedir: __dirname, //app absolute path
  files: ['./routes.js'], //Path to the API handle folder
  route: {
    url: DOCS_URL,
    docs: `${DOCS_URL}.json`,
  },
};

expressSwagger(options);

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}`);
  console.log(`Check documentation at localhost:${PORT}${DOCS_URL}`);
});
