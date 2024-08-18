const https = require("https");
const { app } = require("./src/app");
const PORT = process.env.PORT || 7777;
const server = https.createServer(app);
server.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});
