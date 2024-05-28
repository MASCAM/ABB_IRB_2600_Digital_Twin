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
Code snippets present in "lines_to_add" directory must be copied and adapted to your RAPID programs for the MQTT adapter to work, server and client must also be properly configured to allow the exchange of TCP/IP socket messages.

This MQTT adapter has been used with an ABB IRB 2600 ICR5 controller with RobotWare 5.13.0 OS. To start the adapter, being in the project directory, you can run:

```console
npm run mqtt
```

In order for it to work you need to install and set up a MQTT broker, the broker used to test this project can be found at `https://github.com/moscajs/aedes/`. In the `config.json` file mentioned above, adjustments are needed in the "publisher" section accordingly to the configurations done to set up the broker. 

## Project's choices

Throughout the development of this DT's framework, many choices were made regarding the technologies involved in the interfacing between layers/domains of the Digital Twin and the general architecture of the whole project. Each one of them is explained below.

The ISO 23247 standard was chosen as the main basis for the framework development since this norm facilitates reproducibility and general documentation of the project. In fact, the authors of this work were present as listeners at the committee's virtual meetings during the middle cycles of iterations and presentations regarding the development of the ISO 23247. Having that in mind, this whole project also serves as a confirmation of the norm's effectiveness in providing a background for choosing communication standards, data pipeline design and architecture of layers of data representation.

Among protocols available in the market regarding supervisory systems' data pipelines such as OPC UA/DA, MTConnect, Profibus, and the chosen MQTT; the contemplated protocol was chosen because of its' simple assembly and adaptability to many different systems and programming languages available in the market. The MQTT IoT protocol also serves as a fast, reliable and low-processing impact communication protocol commonly used in IoT applications.

The next choice is the Node.js Node-RED framework used for the general subscriber's pipeline and local dashboard HMI. This framework was chosen because of its simplicity in nesting IoT applications with a built-in MQTT compatibility, the function blocks-oriented programming also makes it easier to replace snippets of the code, to maintain the pipeline and to test new iterations and subscriber's topics.

Regarding the cloud database chosen, the Google Cloud Firebase Firestore database was chosen because of its easy port to many programming languages, and also because of its easy initial assembly and configuration, having an easy integration with Node-RED. Being a NoSQL-based database, it is also fast and easy to export documents as text-based files such as .json.

Finally, being a freemium and well-documented solution available in the market, RoboDK was chosen as the simulation workspace for the DT movements and processes. More than that, RoboDK can also be used to simulate environments in a browser using both local and cloud-nested servers. RoboDK also facilitates the modeling of robot's kinematics, having many options of manufacturers and robots' models available in its library.



## Credits
The project is part of the research developments in the LaDPRER laboratory, UnB, Brazil.

Contributor: João Vítor Arantes Cabral <br/>
[Github profile](https://github.com/MASCAM) <br/>

## License

This software is Open Source provided "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
