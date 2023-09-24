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
    this.server.listen(_port, function () {

        console.log('MQTT server started and listening on port ', _port);
      
    });
    this.server.on('connection', (socket) => {

        const clientAddress = socket.remoteAddress.split(':')[3] + ' ' + socket.remotePort;
        console.log("New socket client connected: " + clientAddress);
        this.connected += 1;

    });
    this.server.on('data',function(data){

        util.puts(data);

    });
    httpServer.listen(7777, () => {

        console.log("MQTT server started and listening on port", 7777);

    });
      
    httpServer.on("connection", (socket) => {

        const clientAddress = socket.remoteAddress.split(":")[3] + " " + socket.remotePort;
        console.log("New socket client connected: " + clientAddress);

    });
    /*server.on('timeout', (socket) => {

        const clientAddress = socket.remoteAddress.split(':')[3] + ' ' + socket.remotePort
        console.log("Socket client disconnected: " + clientAddress)
        this.connected -= 1

    })*/


}
/*
MODULE MainModule
    
    VAR socketdev socket1;
    VAR string received_string;
    VAR num length ;
    VAR num width ;
    VAR num area ;  
    VAR string message;
    PROC main()
        SocketCreate socket1;
        SocketConnect socket1, "127.0.0.1", 1883;
        ! Communication
        SocketSend socket1 \Str:="Hello server";
        !SocketReceive socket1 \Str:=received_string;
        !TPWrite "Server wrote - " + received_string;
        !received_string := "";
        ! Continue sending and receiving
        ! Shutdown the connection
        SocketSend socket1 \Str:="Shutdown connection";
        length := 10;
        width := 5;
        area := length * width ;
        message:= NumToStr(area, 3);
        SocketSend socket1 \Str:=message;
        !SocketReceive socket1 \Str:=received_string;
        TPWrite "Server wrote - " + received_string;
        SocketClose socket1;
    ENDPROC

    
ENDMODULE
*/