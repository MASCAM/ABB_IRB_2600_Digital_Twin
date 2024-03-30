## MQTT Publisher for ABB IRB 2600 (RobotWare 5.13.0)

This Node js project creates a MQTT adapter to fetch machine status data from a ABB IRB 2600 ICR5 controller, and send it to subscribers through a MQTT broker server.

## Install

You can download or clone this project [here](https://github.com/MASCAM/ABB_IRB_2600_Digital_Twin). However, keep in mind that to install this project you must have `Node js` and `npm` installed on your computer or IoT device. You can download both from [here](https://nodejs.org/en/).

In the project directory, you can install the solution by using:

```console
npm install
```

## How to use

You should add the respective settings for both ethernet communication and MQTT adapter server in the `config.json` file like this:

```json
{

    "ethernet": {

        "host": "127.0.0.1",
        "port": 1884,
        "topic": "abb/irb2600/"
        
    },

    "publisher": {

        "host": "localhost",
        "port": 1883,
        "topic": "abb/irb2600/",
        "heartbit": 500,
        "simulation": false

    }

}
```

Depending on your operating system you should set the serial port name (e.g. `'COM9'` on Windows or `'/dev/ttyUSB0'` on Linux).

This MQTT adapter has been used with an ABB IRB 2600 ICR5 controller with RobotWare 5.13.0 OS. To start the adapter, being in the project directory, you can run:

```console
npm run mqtt
```

In order for it to work you need to install and set up a MQTT broker, the broker used to test this project can be found at `https://github.com/moscajs/aedes/`. In the `config.json` file mentioned above, adjustments are needed in the "publisher" section accordingly to the configurations done to set up the broker. 

## Credits
The project is part of the research developments in the LaDPRER laboratory, UnB, Brazil.

Contributor: João Vítor Arantes Cabral <br/>
[Github profile](https://github.com/MASCAM) <br/>

## License

This software is Open Source provided "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
