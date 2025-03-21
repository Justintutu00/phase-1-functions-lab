
// Scuber HQ is on 42nd Street
const headquarters = 42;

// Returns the number of blocks from Scuber HQ
function distanceFromHqInBlocks(pickupLocation) {
  return Math.abs(pickupLocation - headquarters);
}

// Returns the number of feet from Scuber HQ (each block = 264 feet)
function distanceFromHqInFeet(pickupLocation) {
  return distanceFromHqInBlocks(pickupLocation) * 264;
}

// Returns the number of feet traveled between start and destination
function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264;
}

// Calculates the fare price based on the distance traveled
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0; // First 400 feet are free
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02; // 2 cents per foot after 400 feet
  } else if (distance > 2000 && distance <= 2500) {
    return 25; // Flat fare of $25 for distances over 2000 feet but under 2500 feet
  } else {
    return 'cannot travel that far'; // Over 2500 feet is not allowed
  }
}

// Export functions for testing
module.exports = {
  distanceFromHqInBlocks,
  distanceFromHqInFeet,
  distanceTravelledInFeet,
  calculatesFarePrice
};
