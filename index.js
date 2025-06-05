// Code your solution in this file!

function distanceFromHqInBlocks(block) {
    return Math.abs(block - 42);
}

distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);


function distanceFromHqInFeet(block) {
    return Math.abs(block - 42) * 264;
}

distanceFromHqInFeet(43);
distanceFromHqInFeet(50);

function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
}

distanceTravelledInFeet(43, 48);
distanceTravelledInFeet(50, 60);


function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet (start, destination);
  if (distance < 400) {
    return 0;
  } else if (distance > 400 && distance <2000) {
    return (distance - 400) * 0.02
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else if (distance > 2500) {
    return 'cannot travel that far';
  }
}

calculatesFarePrice(43, 44)