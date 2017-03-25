'use strict';

var Document = require('camo').Document;

console.log('in member')

module.exports = class Member extends Document {  
    constructor() {
        super();

        this.name = {
            type: String,
            default: ''
        };
    
        this.github = {
            type: String,
            default: ''
        }

        this.wechatName = {
            type: String,
            default: ''
        }

        this.cellphone = String;

        this.email = String;

        this.createdDate = {
            type: Date,
            default: Date.now
        }
        // Schema declaration here...

    }

}

