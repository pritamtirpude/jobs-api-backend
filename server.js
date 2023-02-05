const http = require("http");
require("dotenv").config();

const mongoConnect = require("./services/mongoDB");

const app = require("./app");

const PORT = process.env.PORT || 7070;

const server = http.createServer(app);

const startServer = async () => {
  try {
    await mongoConnect();
    server.listen(PORT, () => {
      console.log(`Server Listening to ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
