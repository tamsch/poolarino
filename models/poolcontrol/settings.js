const mongoose = require('mongoose');


const SettingsSchema = mongoose.Schema({
    shellyConnected: {
        type: Boolean,
        default: false
    },
    shellyIp: {
        type: String,
        default: '192.168.178.188'
    },
    raspberryPiConnected: {
        type: Boolean,
        default: false
    },
    versionInfo:{
        type: Number,
        default: 0.1
    },
    actualVersion:{
        type: Number,
        default: 0.1
    },
    machineId:{
        type: String,
        default: '000000000'
    },
    hbId:{
        type: String,
        default: '1234567890'
    },
    hbDisabled:{
        type: Boolean,
        default: false
    },
    osType:{
        type: String,
        default: 'OSType'
    },
    osVersion:{
        type: String,
        default: 'OSVersion'
    },
    country:{
        type: String,
        default: 'notSet'
    },
    region:{
        type: String,
        default: 'notSet'
    },
    sensor1name:{
        type: String,
        default: '1'
    },
    sensor1id:{
        type: String,
        default: '11'
    },
    sensor2name:{
        type: String,
        default: '2'
    },
    sensor2id:{
        type: String,
        default: '22'
    },
    sensor3name:{
        type: String,
        default: '3'
    },
    sensor3id:{
        type: String,
        default: '33'
    },
    sensor4name:{
        type: String,
        default: '4'
    },
    sensor4id:{
        type: String,
        default: '44'
    },
    sensor5name:{
        type: String,
        default: '5'
    },
    sensor5id:{
        type: String,
        default: '55'
    },
    sensor6name:{
        type: String,
        default: '6'
    },
    sensor6id:{
        type: String,
        default: '66'
    },
    sensor7name:{
        type: String,
        default: '7'
    },
    sensor7id:{
        type: String,
        default: '77'
    },
    sensor8name:{
        type: String,
        default: '8'
    },
    sensor8id:{
        type: String,
        default: '88'
    },
    weatherName:{
        type: String,
        default: 'Mein Wetter'
    },
    weatherCity:{
        type: String,
        default: 'Bremen'
    },
    weatherAppId:{
        type: String,
        default: 'fb6b2394qq52acs23d0dd23dab3fb6de'
    },
    weatherCountryCode:{
        type: String,
        default: 'de'
    },
    sensor1icon:{
        type: String,
        default: 'fas fa fa-home'
    },
    sensor2icon:{
        type: String,
        default: 'fas fa fa-home'
    },
    sensor3icon:{
        type: String,
        default: 'fas fa fa-home'
    },
    sensor4icon:{
        type: String,
        default: 'fas fa fa-home'
    },
    sensor5icon:{
        type: String,
        default: 'fas fa fa-home'
    },
    sensor6icon:{
        type: String,
        default: 'fas fa fa-home'
    },
    sensor7icon:{
        type: String,
        default: 'fas fa fa-home'
    },
    sensor8icon:{
        type: String,
        default: 'fas fa fa-home'
    },
    pumpConnectedShellyRelay:{
        type: String
    },
    lastPowerConsumptionPump:{
        type: Number
    },
    shellyRelay0Name: {
        type: String,
        default: 'Channel 0 Bezeichnung'
    },
    shellyRelay1Name: {
        type: String,
        default: 'Channel 1 Bezeichnung'
    },
    shellyRelay2Name: {
        type: String,
        default: 'Channel 2 Bezeichnung'
    },
    //Temperatursensor-ID Skimmer
    temperatureSensorIdSkimmer: {
        type: String,
        default: ''
    },
    //Temperatursensor-ID Solar-R??cklauf
    temperatureSensorIdSolar: {
        type: String,
        default: ''
    },
    //Temperatursensor Solar Aktivierung?
    temperatureSensorSolarActivation: {
        type: String,
        default: ''
    },
    temperatureSensorSolarDeactivation: {
        type: String,
        default: ''
    },
    temperatureSensorSolarWatertemperature: {
        type: String,
        default: ''
    },
    temperatureSolarActivation: {
        type: Number,
        default: 0
    },
    temperatureSolarDeactivation: {
        type: Number,
        default: 0
    },
    temperatureWaterDeactivation: {
        type: Number,
        default: 0
    },
    automatedSolarActivation: {
        type: Boolean,
        default: false
    },
    automatedWatertemperatureDeactivation: {
        type: Boolean,
        default: false
    },
    pumpActivationTime1: {
        type: String,
        default: ''
    },
    pumpDeactivationTime1: {
        type: String,
        default: ''
    },
    activateFilterInterval1:{
        type: Boolean
    },
    justChangedInterval1: {
        type: Boolean,
        default: false
    },
    pumpActivationTime2: {
        type: String,
        default: ''
    },
    pumpDeactivationTime2: {
        type: String,
        default: ''
    },
    activateFilterInterval2:{
        type: Boolean
    },
    justChangedInterval2: {
        type: Boolean,
        default: false
    },
    pumpActivationTime3: {
        type: String,
        default: ''
    },
    pumpDeactivationTime3: {
        type: String,
        default: ''
    },
    activateFilterInterval3:{
        type: Boolean
    },
    justChangedInterval3: {
        type: Boolean,
        default: false
    },
    blueConnectUsername: {
        type: String
    },
    blueConnectPassword: {
        type: String
    },
    blueConnectLoggedIn: {
        type: Boolean,
        default: false
    },
    blueConnectPoolId: {
        type: String
    },
    blueConnectBlueId: {
        type: String
    }
})


//Settings extern verf??gbar machen
const Settings = module.exports = mongoose.model('Settings', SettingsSchema);