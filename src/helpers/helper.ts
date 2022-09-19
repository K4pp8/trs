import { Facing, Place } from "src/models/model";

export const getTableRows = (maxSize: number) => {
  let tableRows: Place[][] = [];
  for (let yIndex = maxSize - 1; yIndex >= 0; yIndex--) {
    let squars: Place[] = [];
    for (let xIndex = 0; xIndex < maxSize; xIndex++) {
      squars.push({ x: xIndex, y: yIndex });
    }

    tableRows.push(squars);
  }

  return tableRows
}

export const getFacingAfterRotaing = (currentFacing: Facing, clockwiseDirection = true): Facing => {

  const facingClockwise = {
    "NORTH": "EAST",
    "EAST": "SOUTH",
    "SOUTH": "WEST",
    "WEST": "NORTH"
  };

  const facingNotClockwise = {
    "NORTH": "WEST",
    "EAST": "NORTH",
    "SOUTH": "EAST",
    "WEST": "SOUTH"
  };

  return (clockwiseDirection ? facingClockwise[currentFacing] : facingNotClockwise[currentFacing]) as Facing;
}

export const getCurrentPositionAfterMoved = (currentPosition: Place, currentFacing: Facing, tableSize: number) => {
  switch (currentFacing) {
    case 'NORTH':
      currentPosition.y = currentPosition.y < tableSize - 1 ? currentPosition.y + 1 : currentPosition.y;
      break;

    case 'EAST':
      currentPosition.x = currentPosition.x < tableSize - 1 ? currentPosition.x + 1 : currentPosition.x;
      break;

    case 'SOUTH':
      currentPosition.y = currentPosition.y > 0 ? currentPosition.y - 1 : currentPosition.y;
      break;

    case 'WEST':
      currentPosition.x = currentPosition.x > 0 ? currentPosition.x - 1 : currentPosition.x;
      break;
    default:
      break;
  }

  return currentPosition;
}
