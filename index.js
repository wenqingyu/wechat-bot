var connect = require('camo').connect;
var config = require('./config.js')
const { Wechaty } = require('wechaty')

var Conversation = require('./lib/conversation.js');

var database;  
console.log(config.mongodb);
connect(config.mongodb).then(function(db) {  
    database = db;
});
