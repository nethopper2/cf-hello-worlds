const http = require('http');
const os = require('os');
const port = process.env.PORT || 5000;

const runTimeEnv = process.env.RUNTIMEENV || "CloudFoundry";

http.createServer( (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(`Hello World from NodeJS \nListening on port ${port} \nFrom container ${os.hostname()} \nIn runtime env = ${runTimeEnv} \n`);
}).listen(port, () => {
  console.log("Listening on " + port + "\n");
});
