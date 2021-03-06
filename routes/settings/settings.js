const express = require('express');
const router = express.Router();

const Settings = require('../../models/poolcontrol/settings');

//Alle Settings laden
router.get('/loadAllSettings', async (req, res) => {
    Settings.findOne().sort({ field: 'asc', _id: -1 }).limit(1).exec((err, settings) => {
        if (err || settings == null) {
            console.log(err);
            return res.json({ success: false });
        } else {
            return res.json({ success: true, data: settings });
        }
    })
})

//Settings speichern
router.put('/saveSettings', async (req, res) => {
    const settings = await Settings.findOne().sort({ field: 'asc', _id: -1 }).limit(1);

    if (settings) {
        settings.shellyConnected = req.body.shellyConnected;
        settings.raspberryPiConnected = req.body.raspberryPiConnected;
        settings.shellyIp = req.body.shellyIp;

        settings.sensor1name = req.body.sensor1name;
        settings.sensor1id = req.body.sensor1id;
        settings.sensor1icon = req.body.sensor1icon;
        settings.sensor2name = req.body.sensor2name;
        settings.sensor2id = req.body.sensor2id;
        settings.sensor2icon = req.body.sensor2icon;
        settings.sensor3name = req.body.sensor3name;
        settings.sensor3id = req.body.sensor3id;
        settings.sensor3icon = req.body.sensor3icon;
        settings.sensor4name = req.body.sensor4name;
        settings.sensor4id = req.body.sensor4id;
        settings.sensor4icon = req.body.sensor4icon;
        settings.sensor5name = req.body.sensor5name;
        settings.sensor5id = req.body.sensor5id;
        settings.sensor5icon = req.body.sensor5icon;
        settings.sensor6name = req.body.sensor6name;
        settings.sensor6id = req.body.sensor6id;
        settings.sensor6icon = req.body.sensor6icon;
        settings.sensor7name = req.body.sensor7name;
        settings.sensor7id = req.body.sensor7id;
        settings.sensor7icon = req.body.sensor7icon;
        settings.sensor8name = req.body.sensor8name;
        settings.sensor8id = req.body.sensor8id;
        settings.sensor8icon = req.body.sensor8icon;

        settings.weatherName = req.body.weatherName;
        settings.weatherCity = req.body.weatherCity;
        settings.weatherAppId = req.body.weatherAppId;
        settings.weatherCountryCode = req.body.weatherCountryCode;

        settings.hbDisabled = req.body.hbDisabled;
        settings.pumpConnectedShellyRelay = req.body.pumpConnectedShellyRelay;
        settings.shellyRelay0Name = req.body.shellyRelay0Name;
        settings.shellyRelay1Name = req.body.shellyRelay1Name;
        settings.shellyRelay2Name = req.body.shellyRelay2Name;
        settings.temperatureSensorIdSkimmer = req.body.temperatureSensorIdSkimmer;
        settings.temperatureSensorIdSolar = req.body.temperatureSensorIdSolar;

        settings.temperatureSensorSolarActivation = req.body.temperatureSensorSolarActivation;
        settings.temperatureSensorSolarDeactivation = req.body.temperatureSensorSolarDeactivation;
        settings.temperatureSensorSolarWatertemperature = req.body.temperatureSensorSolarWatertemperature;
        settings.temperatureSolarActivation = parseInt(req.body.temperatureSolarActivation);
        settings.temperatureSolarDeactivation = parseInt(req.body.temperatureSolarDeactivation);
        settings.temperatureWaterDeactivation = parseInt(req.body.temperatureWaterDeactivation);
        settings.automatedSolarActivation = req.body.automatedSolarActivation;
        settings.automatedWatertemperatureDeactivation = req.body.automatedWatertemperatureDeactivation;

        settings.pumpActivationTime1 = req.body.pumpActivationTime1;
        settings.pumpDeactivationTime1 = req.body.pumpDeactivationTime1;
        settings.activateFilterInterval1 = req.body.activateFilterInterval1;
        settings.pumpActivationTime2 = req.body.pumpActivationTime2;
        settings.pumpDeactivationTime2 = req.body.pumpDeactivationTime2;
        settings.activateFilterInterval2 = req.body.activateFilterInterval2;
        settings.pumpActivationTime3 = req.body.pumpActivationTime3;
        settings.pumpDeactivationTime3 = req.body.pumpDeactivationTime3;
        settings.activateFilterInterval3 = req.body.activateFilterInterval3;

        if(!settings.automatedSolarActivation && settings.automatedWatertemperatureDeactivation){
            return res.json({success: false, msg: 'Sie k??nnen das automatische Abschalten bei einer gew??nschten Wassertemperatur nur nutzen, wenn Sie gleichzeit den Automatismus f??r die Solarsteuerung aktivieren.'})
        }

        if(settings.automatedSolarActivation && (settings.temperatureSensorIdSolar === '' || settings.temperatureSensorIdSkimmer === '' || settings.temperatureSensorSolarActivation === '' || settings.temperatureSolarDeactivation <= 19 || settings.temperatureSolarActivation <= 24)){
            return res.json({success: false, msg: 'Um die automatische Solarsteuerung zu nutzen, legen Sie bitte alle 3 Sensoren und die zwei Temperaturwerte fest!'});
        }

        if(((settings.temperatureSolarActivation - settings.temperatureSolarDeactivation) < 5) && settings.automatedSolarActivation){
            return res.json({success: false, msg: 'Die Temperatur zur Solar-Deaktivierung muss mindestens 5C?? unter dem Wert zur Solar-Aktivierung liegen!'});
        }

        if(settings.automatedWatertemperatureDeactivation && settings.temperatureWaterDeactivation <= 22){
            return res.json({success: false, msg: 'Bitte w??hlen Sie eine Temperatur aus, wenn Sie die automatische Abschaltung bei Wunschtemperatur nutzen m??chten.'}); 
        }

        await settings.save((err, saved) => {
            if (err) {
                console.log(err);
                return res.json({ success: false });
            } else {
                return res.json({ success: true });
            }
        });

    } else {
        newSettings = new Settings({
            shellyConnected: req.body.shellyConnected,
            raspberryPiConnected: req.body.raspberryPiConnected,
            shellyIp: req.body.shellyIp
        })

        newSettings.save();
        return res.json({ success: true });
    }
})

//VersionInfo laden
router.get('/checkVersion', async (req, res) => {
    Settings.findOne().sort({ field: 'asc', _id: -1 }).limit(1).select('actualVersion versionInfo blueConnectLoggedIn').exec((err, settings) => {
        if (err || settings == null) {
            console.log(err);
            return res.json({ success: false });
        } else {
            if (settings.actualVersion > settings.versionInfo) {
                return res.json({ success: true, updateAvailable: true, data: settings });
            } else {
                return res.json({ success: true, updateAvailable: false, data: settings });
            }

        }
    })
})

//Laden der Relaybezeichnungen
router.get('/loadRelayTitles', async (req, res) => {
    Settings.findOne().sort({ field: 'asc', _id: -1 }).limit(1).exec((err, settings) => {
        if (err || settings == null) {
            console.log(err);
            return res.json({ success: false });
        } else {
            let helper = {
                shellyRelay0Name: settings.shellyRelay0Name,
                shellyRelay1Name: settings.shellyRelay1Name,
                shellyRelay2Name: settings.shellyRelay2Name
            }
            
            return res.json({success: true, data: helper});
        }
    })
})


//Alle Sensoricons laden
router.get('/loadSensorIcons', async (req, res) => {
    Settings.findOne().sort({ field: 'asc', _id: -1 }).limit(1).select('sensor1icon sensor2icon sensor3icon sensor4icon sensor5icon sensor6icon sensor7icon sensor8icon sensor9icon').exec((err, settings) => {
        if (err || settings == null) {
            console.log(err);
            return res.json({ success: false });
        } else {
            return res.json({ success: true, data: settings });
        }
    })
})

//IDs der Solar und Skimmer Temperatursensoren abfragen
router.get('/getSolarAndSkimmerSensorIds', async (req, res) => {
    Settings.findOne().sort({ field: 'asc', _id: -1 }).limit(1).exec((err, settings) => {
        if(settings != null) {
            return res.json({success: true, skimmerSensorId: settings.temperatureSensorIdSkimmer, solarSensorId: settings.temperatureSensorIdSolar})
        } else {
            return res.json({success: false});
        }
    })
})
module.exports = router; 