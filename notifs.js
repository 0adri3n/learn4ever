function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  };

notifier.notify({
  title: "Welcome !",
  message: "learn4ever is running ! U'll soon receive notifications.",
  icon: 'assets/icon.png',
  appID: "learn4ever",
  wait: true
});

const path = require('path');
const dbPath = path.join(__dirname, 'db');
const iconPath = path.join(__dirname, 'assets', 'icon.png');
const { time } = require('console');
var fs = require('fs');
var files = fs.readdirSync(dbPath);
let allmemos = [];

for (var f of files){
    let newLength = allmemos.push(f);
}


async function memoPush() {
  var ok = 1
  while(ok == 1){
  
      var timesleep = Math.floor(Math.random() * (1200000 - 600000) + 600000);
      await sleep(timesleep);
    
      var randomindex = Math.floor(Math.random() * ((allmemos.length) - 0) + 0);
      var choosenfile = allmemos[randomindex];

      storage.get(choosenfile, function(error, data) {
        if (error) throw error;
      
        const NOTIFICATION_TITLE = data["title"];
        const NOTIFICATION_BODY = data["memo"];

        notifier.notify({
          title: NOTIFICATION_TITLE,
          message: NOTIFICATION_BODY,
          icon: iconPath,
          appID: "learn4ever",
          wait: true
        });

      });

  }
};

memoPush();