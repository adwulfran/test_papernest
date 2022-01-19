const express = require("express");
const bodyParser = require("body-parser");
const { graphqlHTTP } = require("express-graphql");
const { connect } = require("./db");
const artistsController = require("./controllers/artists");
const schema = require("./schema");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    pretty: true,
    graphiql: true,
  })
);

app.get("/", (_, res) => {
  res.send("Hello API");
});

app.get("/artists", artistsController.all);

app.get("/artists/:id", artistsController.findById);

app.post("/artists", artistsController.create);

app.put("/artists/:id", artistsController.update);

app.delete("/artists/:id", artistsController.delete);

const startServer = async () => {
  await connect("mongodb://localhost:27017/api");

  app.listen(3012, function () {
    console.log("API app started");
  });
};

startServer();