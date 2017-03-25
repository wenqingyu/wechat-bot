'use strict';

var Document = require('camo').Document;

module.exports = class Message extends Document {  
    constructor() {
        super();

        this.content = String;

        this.member = Member;

        this.createdDate = {
            type: Date,
            default: Date.now
        }
        // Schema declaration here...

    }

}

