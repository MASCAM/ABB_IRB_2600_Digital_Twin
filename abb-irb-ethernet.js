const net = require('net');
//var util=require('node:util');
//import util from 'util';
const {promisify} = require('util')


const sleep = promisify(setTimeout)

module.exports = function (options, pub) {

    let initial_time = Date.now();
    let number_of_messages = 0;
    let _port = options.port || 1884;
    let _host = options.host || "127.0.0.1"
    this.clients = {}; 
    this.pub = pub;
    pub.publish(options.topic + "test", "test");
    this.server=net.createServer(function(conn){

        conn.on('connect',function(){

            console.log('connect');
            this.clients[socket.id] = socket;

        });
        conn.on('data',function(data){
            
            var message = data.toString()
            
            number_of_messages++;
            console.log("Delay of message: ", Date.now() - initial_time), "";
            //console.log('CLIENT:', message, "\n");
            console.log("Number of messages: ", number_of_messages);
            extract_data(message, pub, options);
            initial_time = Date.now();
            try {

                conn.write("PONG");

            }
            catch (e){

                console.log(e)
            
            }

        });

    });
    this.server.listen(_port, _host, function () {

        console.log('Ethernet TCP/IP Socket server started and listening on port ', _port);
      
    });
    /*
    this.server.on('connection', (stream) => {

        stream.connect

    })
    */
    function extract_data(message, pub, options) {

        var topic = message.split(";")[0]
        var payload = message.split(";")[1]
        if (payload.includes("Timestamp")) {

            payload.replace("Timestamp", "")

        } else if (payload.includes("Execution")) {

            payload.replace("Execution", "")

        }
        console.log(topic)
        if (topic == "PR"){

            topic = "PosRotation"

        } else if (topic == "CR") {

            topic = "CRobT"

        } else if (topic == "W") {

            topic = "Welding"

        } else if (topic == "T") {

            topic = "Tool"

        } else if (topic == "CW") {

            topic = "CWobj"

        }
        
        if (topic == "Status") {

            if (payload.includes("ONLINE")) {

                payload = "ONLINE"

            } else {

                payload = "OFFLINE"

            }

            console.log("Status: ", payload, "\n")
            pub.publish(options.topic + "status", payload)
    
        } else if (topic == "Mode") {

            //console.log("mode: ", payload, "\n")
            pub.publish(options.topic + "mode", payload)
        
        } else if (topic == "Execution") {

            //console.log("Speed: ", payload, "\n")
            pub.publish(options.topic + "execution", payload)
        
        } else if (topic == "Tool") {

            console.log("Tool: ", payload, "\n")
            pub.publish(options.topic + "tool", payload)

        } else if (topic == "CWobj") {

            console.log("Work object: ", payload, "\n")
            pub.publish(options.topic + "cwobj", payload)

        } else if (topic == "Speed") {

            //console.log("Speed: ", payload, "\n")
            payload = payload.replace(/[^\d.-]/g, '')
            pub.publish(options.topic + "speed", payload)
        
        } else if (topic == "RSpeed") {

            //console.log("Speed: ", payload, "\n")
            payload = payload.replace(/[^\d.-]/g, '')
            pub.publish(options.topic + "rspeed", payload)
        
        } else if (topic == "Welding") {

            //console.log("Speed: ", payload, "\n")
            if (payload == "1") {

                payload = "TRUE"

            } else {

                payload = "FALSE"

            }
            pub.publish(options.topic + "welding", payload)
        
        } else if (topic == "PosRotation") {

            //console.log("Speed: ", payload, "\n")
            //payload = payload.replace(/[a-z]/gi, ''); 
            payload = payload.replace("CR", "")
            let aux_arr = JSON.parse("[" + payload + "]")
            pub.publish(options.topic + "posrotation", payload)
        
        }  else if (topic == "CRobT"){


            console.log(payload)
            //payload = payload.replace(/[a-z]/gi, ''); 
            console.log(payload)
            if (payload.includes("Timestamp")) {

                payload.replace("Timestamp", "")
    
            }
            let aux_arr = JSON.parse("[" + payload + "]");
            console.log(aux_arr)
            //console.log("CRobT: ", payload, "\n")
            //console.log(options.topic + "crobt", payload)
            pub.publish(options.topic + "crobt", "[" + payload + "]")
            pub.publish(options.topic + "x_pos", String(aux_arr[0][0]))
            pub.publish(options.topic + "y_pos", String(aux_arr[0][1]))
            pub.publish(options.topic + "z_pos", String(aux_arr[0][2]))
            pub.publish(options.topic + "rorient", `[${String(aux_arr[1][0])},${String(aux_arr[1][1])},${String(aux_arr[1][2])},${String(aux_arr[1][3])}]`)
            //pub.publish(options.topic + "crobt", "[" + payload + "]")

        } else if (topic == "Timestamp") {

            console.log("Timestamp: ", payload, "\n")
            var date = new Date()
            pub.publish(options.topic + "timestamp", String(Date.now()))

        } else {

            pub.publish(options.topic + "status", "ONLINE")

        }

    }

}