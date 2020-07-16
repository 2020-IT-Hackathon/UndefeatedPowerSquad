
function packages() {
    this.packageType = 0;
    this.packageWeight = 0,
    this.packageNumber = 0;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

var newpackage = new packages();
/*function pleasewrk(){*/
    newpackage.packageType = getRandomInt(2);
    console.log(newpackage.packageType);
    newpackage.packageWeight = getRandomInt(200);
    console.log(newpackage.packageWeight);
if((newpackage.packageType != 3) && (newpackage.packageWeight<100)) {
        var hunds = getRandomInt(6);
        var ones = getRandomInt(4);
        var total = (hunds * 100) + ones;
        newpackage.packageNumber = total; 
        console.log(newpackage.packageNumber);
    }
else {
    var hunds = getRandomInt(2);
        var ones = getRandomInt(4);
        var total = ((hunds+7) * 100) + ones;
        newpackage.packageNumber = total; 

    console.log(newpackage.packageNumber);
    } 

    if (newpackage.packageNumber>700){
        console.log("Bottom of the truck ")
    }
    else{
        console.log("Normal package")
    }
/*}*/

if(newpackage.packageNumber<100){
    var elem = document.getElementById('first');
    elem.visibility = true;
}


