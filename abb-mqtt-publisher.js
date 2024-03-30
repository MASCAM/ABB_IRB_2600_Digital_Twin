//João Vítor Arantes Cabral
//MQTT publisher in adapter for publishing messages

const Ethernet = require('./abb-irb-ethernet')
const config = require('./config.json')

const mqtt = require('mqtt')
const Broker = require('./mqtt-broker')
var first = true

//Starts the broker and publisher, and initializes the Ethernet socket module
const broker = new Broker(config.publisher)
const pub = mqtt.connect( `mqtt://${config.publisher.host}:${config.publisher.port}` )
const ethernet = new Ethernet(config.ethernet, pub)

//Ending procedure when ctrl+c is pressed
process.on('SIGINT', function() {

    ethernet.server.close()
    console.log('Finishing process and closing publisher.')
    pub.publish(config.publisher.topic + 'status', 'OFFLINE')
    pub.end()
    broker.server.close()
    throw new Error("Process ended");

    /*
    for (key in ethernet.clients) {

        console.log(`${key}: ${ethernet.clients[key]}`);

    }*/
    //
    

})