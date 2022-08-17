
const scuberHeadquarters=42;
function distanceFromHqInBlocks(pickuplocation)
{
 return pickuplocation>scuberHeadquarters?pickuplocation-scuberHeadquarters:scuberHeadquarters-pickuplocation;
}

function distanceFromHqInFeet(pickuplocation){
    let distanceInBlocks=distanceFromHqInBlocks(pickuplocation);
    return distanceInBlocks*264;
}
function distanceTravelledInFeet(startingblock,endingblock){
    let distanceTravelled=endingblock>startingblock?(endingblock-startingblock)*264:(startingblock-endingblock)*264;
    return distanceTravelled;
}
function calculatesFarePrice(startingblock,endingblock){
    let distanceInFeet=distanceTravelledInFeet(startingblock,endingblock)
    if(distanceInFeet<400){
    return 0
}
else if(distanceInFeet>400 && distanceInFeet<2000){
return(distanceInFeet-400)*0.02;
}
else if(distanceInFeet>2000 && distanceInFeet<2500 ){
return 25; 
}
else if(distanceInFeet>2500){
return "cannot travel that far"

}

  
} 


