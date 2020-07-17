function packages() {
    this.packageType = 0;
    this.packageWeight = 0,
    this.packageNumber = 0;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

var newpackage = new packages();

function plzwork() {
    newpackage.packageType = getRandomInt(2);
    console.log(newpackage.packageType);
    newpackage.packageWeight = getRandomInt(200);
    console.log(newpackage.packageWeight);
    if((newpackage.packageType != 3) && (newpackage.packageWeight<100)) {
        var hunds = getRandomInt(7);
        var ones = getRandomInt(4);
        var total = (hunds * 100) + ones;
        if(total<100){
            total = total+100;
        }
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

    if((newpackage.packageNumber<200) && (newpackage.packageNumber>=100)){
        document.getElementById('first').style.visibility = "visible";
    }
    else {
        document.getElementById('first').style.visibility = "hidden";

    }


   if ((newpackage.packageNumber<300) && (newpackage.packageNumber>=200)){
        document.getElementById('second').style.visibility = "visible";

    }
    else{
        document.getElementById('second').style.visibility = "hidden";

    }

    if((newpackage.packageNumber<400) && (newpackage.packageNumber>=300)){
        document.getElementById('third').style.visibility = "visible";
    }
    else{
        document.getElementById('third').style.visibility = "hidden";

    }

    if((newpackage.packageNumber<500) && (newpackage.packageNumber>=400)){
        document.getElementById('fourth').style.visibility = "visible";
    }
    else{
        document.getElementById('fourth').style.visibility = "hidden";

    }
    if((newpackage.packageNumber<600) && (newpackage.packageNumber>=500)){
        document.getElementById('fifth').style.visibility = "visible";
    }
    else{
        document.getElementById('fifth').style.visibility = "hidden";

    }
    if((newpackage.packageNumber<700) && (newpackage.packageNumber>=600)){
        document.getElementById('sixth').style.visibility = "visible";
    }
    else{
        document.getElementById('sixth').style.visibility = "hidden";

    }

    if((newpackage.packageNumber<800) && (newpackage.packageNumber>=700)){
        document.getElementById('seventh').style.visibility = "visible";
    }
    else{
        document.getElementById('seventh').style.visibility = "hidden";

    }
    if(newpackage.packageNumber>=800){
        document.getElementById('eighth').style.visibility = "visible";
    }
    else{
        document.getElementById('eighth').style.visibility = "hidden";

    }

    if(newpackage.packageType = 0){
        console.log("Envolope with a weight of " + newpackage.packageWeight+ " with an ID Number of " +  + newpackage.packageNumber);
    }
    else if(newpackage.packageType = 1){
    console.log("Regular sized package " + newpackage.packageWeight + " with an ID Number of " +  + newpackage.packageNumber);
    }
    else {
        console.log("Irregular sized package " + newpackage.packageWeight+ " with an ID Number of " +  + newpackage.packageNumber)
    }
}