
function distanceFromHqInBlocks(blocksNo){
    const hqBlock = 42
    return Math.abs(blocksNo - hqBlock);
  }
  
function distanceFromHqInFeet(blocksNo) {
    const blockInFeet = 264;
    const distanceInBlocks = Math.abs(blocksNo - 42);
    return distanceInBlocks * blockInFeet;
  }

function distanceTravelledInFeet(startB, endB) {
    const distanceInBlocks = Math.abs(startB - endB);
    const distanceInFeet = distanceInBlocks * 264;
    return distanceInFeet;
  }
  
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
      
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else if(distance > 2500){
        return 'cannot travel that far'
    }}