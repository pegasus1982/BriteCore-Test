let Fernet = require('fernet');
let secret = new Fernet.Secret('TluxwB3fV_GWuLkR1_BzGs1Zk90TYAuhNMZP_0q4WyM=');

let message = 'gAAAAABcDtparq-2ZldxH0uhCZXDPAIThqT-rw7VSvRo9DfCe9UDu0Oqte0flRcZzH_vrEkK6D43eqNEoErBHKlpSQ3-qN8_VZcTaP4-8U0j9uCgWJIrQXex-wHfh_vhnKOaxLwOL9fpBA9_XtSNCVMUYYHHYh5sBF8NoBhPJ4YaqCPbgJeZ0ftTW9j9Sokr6r4-3hIBM4DC'
let token = new Fernet.Token({secret: secret, token: message, ttl:0})
let msg = token.decode();
console.log('fernet message is ',msg);