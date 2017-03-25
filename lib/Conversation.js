var Member = require('./class/Member.js')
var Message = require('./class/Message.js')
const { Wechaty } = require('wechaty')


// Wechaty
    Wechaty.instance() // Singleton 
    .on('scan', (url, code) => console.log(url, code))
    // .on('scan', (url, code) => console.log(`Scan QR Code to login: ${code}\n${url}`))
    .on('login',       user => console.log(`User ${user} logined`))
    .on('message',  message => {

        // self filter and non-string filter
        if(message.self()) {
            console.log('self')
            return ;
        }else if(message.type() != 1){
            console.log('非文字输入。。。' + message.type())
            message.say('请输入String ： ）')
            return ;
        }else{

            // 

            // console.log("from wechat ID: " + from.weixin())
            // console.log("To: ");
            // console.log(message.to());
            // console.log("Content: ");
            // console.log(message.content());
            // console.log("Room: ");
            // console.log(message.room());
            // console.log("Type: ");
            // console.log(message.type());
            
            var wechatName = message.from() + ""
            var content = message.content() + ""

            // Message log: TODO

            // Member Check
            Member.findOne({wechatName: wechatName}).then(function(m){
                if(m == null){ // Not a member User
                    message.say('Not a member')

                    var member = Member.create({name: '余文卿', wechatName: '余非文青也'});
                    member.save();
                }else{ // Member User
                    message.say("Welcome Member" + m.name)
                }      
            })



        }
    

    }
   
    )
    .init()

    console.log(Wechaty.instance().version(true))

