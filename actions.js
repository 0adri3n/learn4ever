
document.getElementById("how2use").style.display = "none";

const storage = require('electron-json-storage');
const path = require('path');
const notifier = require('node-notifier');
const { NONAME } = require('dns');

const dbPath = path.join(__dirname, '/db/');
storage.setDataPath(dbPath);

const iconPath = path.join(__dirname, 'assets', 'icon.png');

document.getElementById("addtodb").onclick = addToDatabase;

function addToDatabase(){

    let memoid = document.getElementById("memoid").value;

    if(!memoid){
      const NOTIFICATION_TITLE = 'Alert';
      const NOTIFICATION_BODY = "Memo's ID can't be empty!";
      notifier.notify({
        title: NOTIFICATION_TITLE,
        message: NOTIFICATION_BODY,
        icon: iconPath,
        appID: "learn4ever",
      });
    }
    else{
      let newmemo = {
        title: document.getElementById("titlenotif").value,
        memo: document.getElementById("memo").value,
      };
      storage.set(memoid, newmemo, function(error) {
        if (error) throw error;
      });
      document.getElementById("form").reset();
      const NOTIFICATION_TITLE = 'New Memo has been added.';
      const NOTIFICATION_BODY = 'Memo ID: ' + memoid + ".";
      notifier.notify({
        title: NOTIFICATION_TITLE,
        message: NOTIFICATION_BODY,
        icon: iconPath,
        appID: "learn4ever",
      });
    }
};

function showuse() {
  var x = document.getElementById("how2use");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}