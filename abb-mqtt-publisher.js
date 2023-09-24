const Ethernet = require('./abb-irb-ethernet')
const Simulator = require('./data_simulator')
const config = require('./config.json')

const mqtt = require('mqtt')
const Broker = require('./mqtt-broker')

//init
//const simulation = config.publisher.simulation

var first = true

const broker = new Broker(config.publisher)
const pub = mqtt.connect(`mqtt://${config.publisher.host}:${config.publisher.port}`)
const ethernet = new Ethernet(config.ethernet, pub)

var position = ""
//console.log(config.publisher.heartbit)
pub.on('connect', () => {
    /*
    setInterval(() => {

        if (broker.connected >= 1) {

            start()

        }

    }, config.publisher.heartbit)*/

})

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