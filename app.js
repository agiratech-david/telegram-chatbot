var express = require('express');
var app = express();
const request = require('request');
var http = require('http');
// connect node lib for the telegram
var TelegramBot = require('node-telegram-bot-api');
var bot = new TelegramBot('428231486:AAFMaaaB3fls5VczjVHkgPy5AIBAiwViKRs', {
    polling: true
});
app.use(express.static(__dirname + '/public'));
app.engine('html', require('ejs').renderFile);



var teleurl='https://chatbot.agiratech.com'



app.get('/', function(req, res) {
    res.render('index.html');
});







var intro = ['hi','hello','home','there'];
bot.on('message', function(msg) {


    if (intro.indexOf(msg.text.toLowerCase()) != -1) {

        var text = 'RailsConf 2017 is coming to beautiful Phoenix, Arizona! We’ll be at the Phoenix Convention Center this Spring, so come join us to talk all things Rails with other developers and enthusiasts.\n' +
            '\n' +
            'RailsConf is our annual gathering of Ruby on Rails enthusiasts, practitioners, and companies. It\'s not only the largest, but the oldest as well -- 2017 marks our 12th year! The conference has only grown more robust and exciting from year to year, which is a testament to the incredible Rails community. Whether you\'re just hearing about how welcoming our community is or you\'re one of our #RubyFriends selfie experts. RailsConf is an experience that you just can\'t miss!';

        var keyboardStr = JSON.stringify({
            inline_keyboard: [
                [
                    {text: 'Programs', callback_data: 'Programs'},
                    {text: 'Schedule', callback_data: 'Schedule'},
                    {text: 'Location', callback_data: 'Location'},
                    {text: 'Sponsor', callback_data: 'Sponsor'},
                    {text: 'About', callback_data: 'About'}
                ]
            ],


        });

        var keyboard = {reply_markup: JSON.parse(keyboardStr)};
        bot.sendMessage(msg.chat.id, text, keyboard);

    }

    else if(msg.text.toLowerCase().indexOf('programs') != -1){

        var text = 'Sharing Knoledge is always Fun. Let us know what Program details you looking for';
        var keyboardStr1 = JSON.stringify({
            inline_keyboard: [
                [
                    {text:'KeyNotes',callback_data:'KeyNotes'},
                    {text:'Sessions',callback_data:'Sessions'},
                    {text:'Home',callback_data:'Home'},
                ]
            ]
        });

        var keyboard1 = {reply_markup: JSON.parse(keyboardStr1)};


        bot.sendMessage(msg.chat.id,text,keyboard1);
    }

    else if(msg.text.toLowerCase().indexOf('schedule') != -1 ){
        var text = 'Schedule';
        var keyboardStrsch = JSON.stringify({
            inline_keyboard: [
                [
                    {text:'Day 1',callback_data:'day1'},
                    {text:'Day 2',callback_data:'day2'},
                    {text:'Day 3',callback_data:'day3'},
                    {text:'Home',callback_data:'Home'},
                ]
            ]
        });

        var keyboardsch = {reply_markup: JSON.parse(keyboardStrsch)};


        bot.sendMessage(msg.chat.id,text,keyboardsch);
    }

    else if(msg.text.toLowerCase().indexOf('location') != -1 ){
        var keyboardStrsch = JSON.stringify({
            inline_keyboard: [
                [

                    {text:'Home',callback_data:'Home'},
                ]
            ]
        });
        var text = 'Phoenix Convention Center\n' +
            '100 N. 3rd Street \n' +
            'Phoenix, AZ 85004 \n' +
            '(602) 262-6225';
        var keyboardsch = {reply_markup: JSON.parse(keyboardStrsch)};


        bot.sendLocation(msg.chat.id,33.4490958, -112.0688753);
        bot.sendMessage(msg.chat.id,text,keyboardsch);
    }

    else if(msg.text.toLowerCase().indexOf('sponsor') != -1){
        var text = 'Sponsor';

        const urlspon = teleurl+'/images/sponsor1.png';

        const photospon = request(urlspon);


        bot.sendPhoto(msg.chat.id, photospon, {
            caption: "sponsors"
        });

        var keyboardStrsch = JSON.stringify({
            inline_keyboard: [
                [

                    {text:'Home',callback_data:'Home'},
                ]
            ]
        });

        var keyboardsch = {reply_markup: JSON.parse(keyboardStrsch)};



        bot.sendMessage(msg.chat.id,text,keyboardsch);
    }

    else if(msg.text.toLowerCase().indexOf('keynotes') !=-1 ){
        var text = 'Keynotes';
        var keyboardStr1 = JSON.stringify({
            inline_keyboard: [
                [
                    {text:'David Heinemeier Hansson',callback_data:'david'},
                    {text:'Pamela Pavliscak',callback_data:'Pamela'},
                    {text:'Programs',callback_data:'Programs'},
                    {text:'Home',callback_data:'Home'}

                ]
            ]
        });

        var keyboard1 = {reply_markup: JSON.parse(keyboardStr1)};


        bot.sendMessage(msg.chat.id,text,keyboard1);
    }

    else if(msg.text.toLowerCase().indexOf('sessions') !=-1 ){

        var text = 'Sessions';
        var keyboardStr1 = JSON.stringify({
            inline_keyboard: [
                [
                    {text:'Machine Learning',callback_data:'Machine'},
                    {text:'Open Source Deep Dive',callback_data:'DeepDive'},
                    {text:'Home',callback_data:'Home'}

                ]
            ]
        });

        var keyboard1 = {reply_markup: JSON.parse(keyboardStr1)};


        bot.sendMessage(msg.chat.id,text,keyboard1);
    }



    else if(msg.text.toLowerCase().indexOf('machine') !=-1){

        var text = 'Syntax Isn\'t Everything: NLP for Rubyists\n' +
            '\n' +
            'Natural Language Processing is an interesting field of computing. The way humans use language is nuanced and deeply context sensitive. For example, the word work can be both a noun and a verb. This talk will give an introduction to the field of NLP using Ruby. There will be demonstrations of how computers fail and succeed at human language. You\'ll leave the presentation with an understanding of both the challenges and the possibilities of NLP and some tools for getting started with it. ';
        var keyboardStr1 = JSON.stringify({
            inline_keyboard: [
                [
                    {text:'Sessions',callback_data:'Sessions'},
                    {text:'Programs',callback_data:'Programs'},
                    {text:'Home',callback_data:'Home'}

                ]
            ]
        });

        var keyboard1 = {reply_markup: JSON.parse(keyboardStr1)};


        bot.sendMessage(msg.chat.id,text,keyboard1);
    }

    else if(msg.text.toLowerCase().indexOf('deep') !=-1){

        var text = 'Perusing the Rails Source Code - A Beginners Guide\n' +
            '\n' +
            'Open source projects like Rails are intimidating, especially as a beginner. It’s hard to look at the code and know what it does. But Ruby on Rails is more than just code. Written into it are years of research, discussions, and motivations. Also written into it are bugs, typos, and all of the pieces that make the code human. This talk outlines steps you can take to explore the inner workings of Rails and gain context on its design. Understanding how Rails works will allow you to write better Rails applications and better Ruby code. You will leave with many resources and tips on perusing Rails.';
        var keyboardStr1 = JSON.stringify({
            inline_keyboard: [
                [
                    {text:'Sessions',callback_data:'Sessions'},
                    {text:'Programs',callback_data:'Programs'},
                    {text:'Home',callback_data:'Home'}

                ]
            ]
        });

        var keyboard1 = {reply_markup: JSON.parse(keyboardStr1)};

        bot.sendMessage(msg.chat.id,text,keyboard1);
    }

    else if(msg.text.toLowerCase().indexOf('david') !=-1){

        const url = 'https://railsconf.com/assets/speakers/DHH-2362286c66f1263cd08c874383c404612f612bd6431152fb53f6ed42b8d4ba89.jpg';

        const photo = request(url);
        bot.sendPhoto(msg.chat.id, photo, {
            caption: "David Heinemeier Hansson"
        });

        var text = 'David is the creator of Ruby on Rails, founder & CTO at Basecamp (formerly 37signals), best-selling author, Le Mans class-winning racing driver, public speaker, hobbyist photographer, and family man.';
        var keyboardStr1 = JSON.stringify({
            inline_keyboard: [
                [
                    {text:'KeyNotes',callback_data:'KeyNotes'},
                    {text:'Programs',callback_data:'Programs'},
                    {text:'Home',callback_data:'Home'}

                ]
            ]
        });

        var keyboard1 = {reply_markup: JSON.parse(keyboardStr1)};


        bot.sendMessage(msg.chat.id,text,keyboard1);
    }


    else if(msg.text.toLowerCase().indexOf('pamela') !=-1){
        var text = 'Pamela Pavliscak studies our emotional, sometimes irrational, relationship with technology. Whether hosting awkward dinner parties for friends and their algorithms or collecting sketches of favorite apps or analyzing audio diaries for sentiment, Pamela\'s work is about revealing the unspoken truths of our digital lives. Pamela is founder and CEO of Change Sciences, a research and strategy firm, and faculty at The Pratt Institute. Her forthcoming book, Designing for Happiness (O\'Reilly, 2017), considers how to create rich emotional experiences that contribute to our well-being. ';

        const url1 = 'https://railsconf.com/assets/speakers/PamelaPavliscak-049ef12ebefa3d7e997af6cf02ef7fdfa403a474bb42dc4a065e6afd513140f2.jpg';

        const photo1 = request(url1);
        bot.sendPhoto(msg.chat.id, photo1, {
            caption: "Pamela Pavliscak"
        });



        var keyboardStr1 = JSON.stringify({
            inline_keyboard: [
                [
                    {text:'KeyNotes',callback_data:'KeyNotes'},
                    {text:'Programs',callback_data:'Programs'},
                    {text:'Home',callback_data:'Home'}

                ]
            ]
        });

        var keyboard1 = {reply_markup: JSON.parse(keyboardStr1)};


        bot.sendMessage(msg.chat.id,text,keyboard1);
    }

    else if(msg.text.toLowerCase().indexOf('day1') !=-1){
        var text = teleurl+'/images/day1.png';
        var keyboardStr1 = JSON.stringify({
            inline_keyboard: [
                [
                    {text:'Schedule',callback_data:'Schedule'},

                    {text:'Home',callback_data:'Home'}

                ]
            ]
        });

        var keyboard1 = {reply_markup: JSON.parse(keyboardStr1)};


        bot.sendMessage(msg.chat.id,text,keyboard1);
    }

    else if(msg.text.toLowerCase().indexOf('day2') !=-1){
        var text = teleurl+'/images/day2.png';
        var keyboardStr1 = JSON.stringify({
            inline_keyboard: [
                [
                    {text:'Schedule',callback_data:'Schedule'},

                    {text:'Home',callback_data:'Home'}

                ]
            ]
        });

        var keyboard1 = {reply_markup: JSON.parse(keyboardStr1)};


        bot.sendMessage(msg.chat.id,text,keyboard1);
    }

    else if(msg.text.toLowerCase().indexOf('day3') !=-1){
        var text = teleurl+'/images/day3.png';
        var keyboardStr1 = JSON.stringify({
            inline_keyboard: [
                [
                    {text:'Schedule',callback_data:'Schedule'},

                    {text:'Home',callback_data:'Home'}

                ]
            ]
        });

        var keyboard1 = {reply_markup: JSON.parse(keyboardStr1)};


        bot.sendMessage(msg.chat.id,text,keyboard1);
    }

    else{
        bot.sendMessage(msg.chat.id,"Please Enter Correct Values");
    }

});


bot.on('callback_query', function (msg) {

    var replyData = msg.data;


    switch(replyData){
        case "Programs":

            var text = 'Sharing Knoledge is always Fun. Let us know what Program details you looking for';
            var keyboardStr1 = JSON.stringify({
                inline_keyboard: [
                    [
                        {text:'KeyNotes',callback_data:'KeyNotes'},
                        {text:'Sessions',callback_data:'Sessions'},
                        {text:'Home',callback_data:'Home'},
                    ]
                ]
            });

            var keyboard1 = {reply_markup: JSON.parse(keyboardStr1)};

            bot.sendMessage(msg.message.chat.id,text,keyboard1);
            //do something
            break;

        case "Schedule":

            var text = 'Schedule';
            var keyboardStrsch = JSON.stringify({
                inline_keyboard: [
                    [
                        {text:'Day 1',callback_data:'day1'},
                        {text:'Day 2',callback_data:'day2'},
                        {text:'Day 3',callback_data:'day3'},
                        {text:'Home',callback_data:'Home'},
                    ]
                ]
            });

            var keyboardsch = {reply_markup: JSON.parse(keyboardStrsch)};


            bot.sendMessage(msg.message.chat.id,text,keyboardsch);
            //do something
            break;


        case "Location":


            var keyboardStrsch = JSON.stringify({
                inline_keyboard: [
                    [

                        {text:'Home',callback_data:'Home'},
                    ]
                ]
            });
            var text = 'Phoenix Convention Center\n' +
                '100 N. 3rd Street \n' +
                'Phoenix, AZ 85004 \n' +
                '(602) 262-6225';
            var keyboardsch = {reply_markup: JSON.parse(keyboardStrsch)};

            bot.sendLocation(msg.message.chat.id,33.4490958, -112.0688753);
            bot.sendMessage(msg.message.chat.id,text,keyboardsch);
            //do something
            break;
        case "Sponsor":

            var text = 'Sponsor';

            const urlspon = teleurl+'/images/sponsor1.png';

            const photospon = request(urlspon);
            bot.sendPhoto(msg.message.chat.id, photospon, {
                caption: "sponsor"
            });




            var keyboardStrsch = JSON.stringify({
                inline_keyboard: [
                    [

                        {text:'Home',callback_data:'Home'},
                    ]
                ]
            });

            var keyboardsch = {reply_markup: JSON.parse(keyboardStrsch)};


            bot.sendMessage(msg.message.chat.id,text,keyboardsch);
            //do something
            break;

        case "About":

            var text = 'RailsConf is brought to you by the team at Ruby Central, as well as a small but dedicated corps of volunteers. While we depend on the awesomeness of the whole Ruby community to contribute to a terrific experience every year, there are a few individuals that work especially hard to produce RailsConf.';
            var keyboardStrsch = JSON.stringify({
                inline_keyboard: [
                    [

                        {text:'Home',callback_data:'Home'},
                    ]
                ]
            });

            var keyboardsch = {reply_markup: JSON.parse(keyboardStrsch)};


            bot.sendMessage(msg.message.chat.id,text,keyboardsch);
            //do something
            break;

    }

    bot.answerCallbackQuery(msg.id, '', false);
});

bot.on('callback_query', function (msg) {

    var replyData1 = msg.data;


    switch(replyData1){
        case "KeyNotes":

            var text = 'Keynotes';
            var keyboardStr1 = JSON.stringify({
                inline_keyboard: [
                    [
                        {text:'David Heinemeier Hansson',callback_data:'david'},
                        {text:'Pamela Pavliscak',callback_data:'Pamela'},
                        {text:'Programs',callback_data:'Programs'},
                        {text:'Home',callback_data:'Home'}

                    ]
                ]
            });

            var keyboard1 = {reply_markup: JSON.parse(keyboardStr1)};


            bot.sendMessage(msg.message.chat.id,text,keyboard1);
            //do something
            break;
        case "Sessions":

            var text = 'Sessions';
            var keyboardStr1 = JSON.stringify({
                inline_keyboard: [
                    [
                        {text:'Machine Learning',callback_data:'Machine'},
                        {text:'Open Source Deep Dive',callback_data:'DeepDive'},
                        {text:'Home',callback_data:'Home'}

                    ]
                ]
            });

            var keyboard1 = {reply_markup: JSON.parse(keyboardStr1)};


            bot.sendMessage(msg.message.chat.id,text,keyboard1);
            //do something
            break;
        case "Home":

            var text = 'RailsConf 2017 is coming to beautiful Phoenix, Arizona! We’ll be at the Phoenix Convention Center this Spring, so come join us to talk all things Rails with other developers and enthusiasts.\n' +
                '\n' +
                'RailsConf is our annual gathering of Ruby on Rails enthusiasts, practitioners, and companies. It\'s not only the largest, but the oldest as well -- 2017 marks our 12th year! The conference has only grown more robust and exciting from year to year, which is a testament to the incredible Rails community. Whether you\'re just hearing about how welcoming our community is or you\'re one of our #RubyFriends selfie experts. RailsConf is an experience that you just can\'t miss!';

            var keyboardStr1 = JSON.stringify({
                inline_keyboard: [
                    [
                        {text:'Programs',callback_data:'Programs'},
                        {text:'Schedule',callback_data:'Schedule'},
                        {text:'Location',callback_data:'Location'},
                        {text:'Sponsor',callback_data:'Sponsor'},
                        {text:'About',callback_data:'About'}
                    ]
                ]
            });

            var keyboard1 = {reply_markup: JSON.parse(keyboardStr1)};


            bot.sendMessage(msg.message.chat.id,text,keyboard1);
            //do something
            break;

    }

    bot.answerCallbackQuery(msg.id, '', false);
});

bot.on('callback_query', function (msg) {

    var replyData2 = msg.data;


    switch(replyData2){
        case "Machine":
            var text = 'Syntax Isn\'t Everything: NLP for Rubyists\n' +
                '\n' +
                'Natural Language Processing is an interesting field of computing. The way humans use language is nuanced and deeply context sensitive. For example, the word work can be both a noun and a verb. This talk will give an introduction to the field of NLP using Ruby. There will be demonstrations of how computers fail and succeed at human language. You\'ll leave the presentation with an understanding of both the challenges and the possibilities of NLP and some tools for getting started with it. ';
            var keyboardStr1 = JSON.stringify({
                inline_keyboard: [
                    [
                        {text:'Sessions',callback_data:'Sessions'},
                        {text:'Programs',callback_data:'Programs'},
                        {text:'Home',callback_data:'Home'}

                    ]
                ]
            });

            var keyboard1 = {reply_markup: JSON.parse(keyboardStr1)};


            bot.sendMessage(msg.message.chat.id,text,keyboard1);

            break;

        case "DeepDive":
            var text = 'Perusing the Rails Source Code - A Beginners Guide\n' +
                '\n' +
                'Open source projects like Rails are intimidating, especially as a beginner. It’s hard to look at the code and know what it does. But Ruby on Rails is more than just code. Written into it are years of research, discussions, and motivations. Also written into it are bugs, typos, and all of the pieces that make the code human. This talk outlines steps you can take to explore the inner workings of Rails and gain context on its design. Understanding how Rails works will allow you to write better Rails applications and better Ruby code. You will leave with many resources and tips on perusing Rails.';
            var keyboardStr1 = JSON.stringify({
                inline_keyboard: [
                    [
                        {text:'Sessions',callback_data:'Sessions'},
                        {text:'Programs',callback_data:'Programs'},
                        {text:'Home',callback_data:'Home'}

                    ]
                ]
            });

            var keyboard1 = {reply_markup: JSON.parse(keyboardStr1)};


            bot.sendMessage(msg.message.chat.id,text,keyboard1);
            //do something
            break;
    }

    bot.answerCallbackQuery(msg.id, '', false);
});



bot.on('callback_query', function (msg) {

    var replyData2 = msg.data;


    switch(replyData2){
        case "david":
            var text = 'David is the creator of Ruby on Rails, founder & CTO at Basecamp (formerly 37signals), best-selling author, Le Mans class-winning racing driver, public speaker, hobbyist photographer, and family man. ';

            const url = 'https://railsconf.com/assets/speakers/DHH-2362286c66f1263cd08c874383c404612f612bd6431152fb53f6ed42b8d4ba89.jpg';

            const photo = request(url);
            bot.sendPhoto(msg.message.chat.id, photo, {
                caption: "David Heinemeier Hansson"
            });

            var keyboardStr1 = JSON.stringify({
                inline_keyboard: [
                    [
                        {text:'KeyNotes',callback_data:'KeyNotes'},
                        {text:'Programs',callback_data:'Programs'},
                        {text:'Home',callback_data:'Home'}

                    ]
                ]
            });

            var keyboard1 = {reply_markup: JSON.parse(keyboardStr1)};
            bot.sendMessage(msg.message.chat.id,text,keyboard1);
            //do something
            break;

        case "Pamela":
            var text = 'Pamela Pavliscak studies our emotional, sometimes irrational, relationship with technology. Whether hosting awkward dinner parties for friends and their algorithms or collecting sketches of favorite apps or analyzing audio diaries for sentiment, Pamela\'s work is about revealing the unspoken truths of our digital lives. Pamela is founder and CEO of Change Sciences, a research and strategy firm, and faculty at The Pratt Institute. Her forthcoming book, Designing for Happiness (O\'Reilly, 2017), considers how to create rich emotional experiences that contribute to our well-being.';

            const url1 = 'https://railsconf.com/assets/speakers/PamelaPavliscak-049ef12ebefa3d7e997af6cf02ef7fdfa403a474bb42dc4a065e6afd513140f2.jpg';

            const photo1 = request(url1);
            bot.sendPhoto(msg.message.chat.id, photo1, {
                caption: "Pamela Pavliscak"
            });



            var keyboardStr1 = JSON.stringify({
                inline_keyboard: [
                    [
                        {text:'KeyNotes',callback_data:'KeyNotes'},
                        {text:'Programs',callback_data:'Programs'},
                        {text:'Home',callback_data:'Home'}

                    ]
                ]
            });

            var keyboard1 = {reply_markup: JSON.parse(keyboardStr1)};


            bot.sendMessage(msg.message.chat.id,text,keyboard1
            );
            //do something
            break;
    }

    bot.answerCallbackQuery(msg.id, '', false);
});
bot.on('callback_query', function (msg) {

    var replyData3 = msg.data;


    switch(replyData3){
        case "day1":

            const url2 = teleurl+'/images/day1.png';

            const photo2 = request(url2);
            bot.sendPhoto(msg.message.chat.id, photo2, {
                caption: "DAY1"
            });
            // var text = '';
            var keyboardStr1 = JSON.stringify({
                inline_keyboard: [
                    [
                        {text:'Schedule',callback_data:'Schedule'},

                        {text:'Home',callback_data:'Home'}

                    ]
                ]
            });

            var keyboard1 = {reply_markup: JSON.parse(keyboardStr1)};


            bot.sendMessage(msg.message.chat.id,keyboard1);
            //do something
            break;
        case "day2":



            const url3 = teleurl+'/images/day2.png';

            const photo3 = request(url3);
            bot.sendPhoto(msg.message.chat.id, photo3, {
                caption: "DAY2"
            });

            var keyboardStr1 = JSON.stringify({
                inline_keyboard: [
                    [
                        {text:'Schedule',callback_data:'Schedule'},

                        {text:'Home',callback_data:'Home'}

                    ]
                ]
            });

            var keyboard1 = {reply_markup: JSON.parse(keyboardStr1)};


            bot.sendMessage(msg.message.chat.id,keyboard1);
            //do something
            break;
        case "day3":


            const url4 = teleurl+'/images/day3.png';

            const photo4 = request(url4);
            bot.sendPhoto(msg.message.chat.id, photo4, {
                caption: "DAY3"
            });


            var keyboardStr1 = JSON.stringify({
                inline_keyboard: [
                    [
                        {text:'Schedule',callback_data:'Schedule'},

                        {text:'Home',callback_data:'Home'}

                    ]
                ]
            });

            var keyboard1 = {reply_markup: JSON.parse(keyboardStr1)};


            bot.sendMessage(msg.message.chat.id,keyboard1);

            break;

    }

    bot.answerCallbackQuery(msg.id, '', false);
});



app.listen(3000);
console.log('Server running at 3000');
