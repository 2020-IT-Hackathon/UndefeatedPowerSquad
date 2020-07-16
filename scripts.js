function packages() {
    this.packageType = 0;
    this.packageWeight = 0,
    this.packageNumber = 0;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

ORIONpackage = new Array(20); 
function CreatePackages(ORIONpackage){
    for (var i = 0; i>20; i++){
        var newpackage = new packages();
        newpackage.packageType = getRandomInt(2);
        newpackage.packageWeight = getRandomInt(200);
        ORIONpackages.push(newpackage);
    }
}

function GeneratePackageNumber(ORIONpackage){
    for(var counter = 0; counter> ORIONpackages.length; counter++){
        if((ORIONpackages[counter].packageType != 3) && (ORIONpackages[counter].packageWeight)){
        for(var i = 1; i>7; i++){
            for (var j = 0; j >3; j++){
                var total = (i * 100) + j;
                total = ORIONpackages[counter].packageNumber;
                }
            }
        }
        else{
            for (var irri = 7; irri>9; irri++){
                for(var irrj = 0; irrj > 3; irrj++)
                var total = (irri * 100) + irrj;
                total = ORIONpackages[counter].packageNumber;

            }
        }
    }
}   