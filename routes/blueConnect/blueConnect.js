const express = require('express');
const router = express.Router();
const Settings = require('../../models/poolcontrol/settings');
const fetch = require('node-fetch');

const {BlueriiotAPI} = require('blueriiot-api-client');


//Blue Connect Login
router.post('/login', async (req, res) => {
    var api = new BlueriiotAPI(req.body.blueConnectUsername, req.body.blueConnectPassword);

    api.init().then(async function(){

        if(api.isAuthenticated()){

            let swimmingPools = await api.getSwimmingPools();
            swimmingPools = JSON.parse(swimmingPools);

            let blueDevice = await api.getSwimmingPoolBlueDevices(swimmingPools.data[0].swimming_pool_id);
            blueDevice = JSON.parse(blueDevice)

            const settings = await Settings.findOne().sort({ field: 'asc', _id: -1 }).limit(1);

            if(settings){
                settings.blueConnectUsername = req.body.blueConnectUsername;
                settings.blueConnectPassword = req.body.blueConnectPassword;
                settings.blueConnectPoolId = swimmingPools.data[0].swimming_pool_id;
                settings.blueConnectBlueId = blueDevice.data[0].blue_device_serial;
                settings.blueConnectLoggedIn = true;

                settings.save();

                return res.json({success: true, msg: 'Sie wurden erfolgreich bei Blue Connect angemeldet!'});
            } else {
                return res.json({success: false, msg: 'Bitte legen Sie zuerst andere Einstellungen an, bevor Sie sich mit BlueConnect verbinden!'});
            }
        }
    }).catch( function(error){
        return res.json({success: false, msg: error});
    });  
})

//Blue Connect logout
router.get('/logout', async (req, res) => {
    const settings = await Settings.findOne().sort({ field: 'asc', _id: -1 }).limit(1);

    if(settings.blueConnectLoggedIn){
        settings.blueConnectLoggedIn = false;
        settings.blueConnectPassword = '';
        settings.blueConnectUsername = '';

        settings.save();

        return res.json({success: true, msg: 'Sie wurden erfolgreich abgemeldet. Ihre Zugangsdaten wurden gelöscht!'});
    } else {
        return res.json({success: false, msg: 'Sie waren gar nicht bie Blue Connect angemeldet!'});
    }
})

//BlueConnect get last measurements
router.get('/getLastMeasurements', async (req, res) => {
    const settings = await Settings.findOne().sort({ field: 'asc', _id: -1 }).limit(1);

    if(settings.blueConnectLoggedIn){
        var api = new BlueriiotAPI(settings.blueConnectUsername, settings.blueConnectPassword);

        api.init().then(function(){

            api.getLastMeasurements(settings.blueConnectPoolId, settings.blueConnectBlueId).then(function(data){
                return res.json({success: true, data: JSON.parse(data)});
            })

        }).catch(function(error) {
            return res.json({success: false, msg: error});
        })

    } else {
        return res.json({success: false, msg: 'Bitte melden Sie sich zuerst bei Blue Connect an!'});
    }
})

//BlueConnect get guidance
router.get('/getGuidance', async (req, res) => {
    const settings = await Settings.findOne().sort({ field: 'asc', _id: -1 }).limit(1);

    if(settings.blueConnectLoggedIn){
        var api = new BlueriiotAPI(settings.blueConnectUsername, settings.blueConnectPassword);

        api.init().then(function(){

            api.getGuidance(settings.blueConnectPoolId, 'de').then(function(data){
                return res.json({success: true, data: JSON.parse(data)});
            })

        }).catch(function(error) {
            return res.json({success: false, msg: error});
        })

    } else {
        return res.json({success: false, msg: 'Bitte melden Sie sich zuerst bei Blue Connect an!'});
    }
})

module.exports = router; 