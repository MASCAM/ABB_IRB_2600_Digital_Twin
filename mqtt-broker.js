const aedes = require('aedes')();
const net = require('net');
const httpServer = require("http").createServer();
const ws = require("websocket-stream");
ws.createServer({ server: httpServer }, aedes.handle);
var util=require('util');


module.exports = function (options) {

    let _port = options.port || 1883;
    this.connected = 0;
    this.server = net.createServer(aedes.handle);

    //Initialize the broker server on the config.json determined port
    this.server.listen(_port, function () {

        console.log('MQTT server started and listening on port ', _port);
      
    });
    this.server.on('connection', (socket) => {

        const clientAddress = socket.remoteAddress.split(':')[3] + ' ' + socket.remotePort;
        console.log("New socket client connected: " + clientAddress);
        this.connected += 1;

    });

    //Monitor messages sent to the server
    this.server.on('data',function(data){

        util.puts(data);

    });

    //Cria um websocket
    httpServer.listen(7777, () => {

        console.log("MQTT server started and listening on port", 7777);

    });
      

    httpServer.on("connection", (socket) => {

        const clientAddress = socket.remoteAddress.split(":")[3] + " " + socket.remotePort;
        console.log("New socket client connected: " + clientAddress);

    });


}