import { getCurrentPositionAfterMoved, getFacingAfterRotaing, getTableRows } from "./helper";

describe('Helpers', () => {

  it('should create the right number of squares', () => {
    const tableRows = getTableRows(5)
    expect(tableRows.length).toBe(5);
    expect(tableRows[0].length).toBe(5);
  });

  it('should create return the right facing - clockwise', () => {
    const facingClockwise = getFacingAfterRotaing('NORTH', true)
    const facingNotClockwise = getFacingAfterRotaing('NORTH', false)
    expect(facingClockwise).toBe("EAST");
    expect(facingNotClockwise).toBe("WEST");
  });

  it('should create move the robot in correct way', () => {

    const maxSize = 5;
    const startPosition = { x: 2, y: 2 };

    let newPosition = getCurrentPositionAfterMoved(startPosition, 'NORTH', maxSize);
    expect(newPosition).toEqual({ x: 2, y: 3 });

    newPosition = getCurrentPositionAfterMoved(startPosition, 'SOUTH', maxSize);
    expect(newPosition).toEqual({ x: 2, y: 2 });

    newPosition = getCurrentPositionAfterMoved(startPosition, 'EAST', maxSize);
    expect(newPosition).toEqual({ x: 3, y: 2 });

    newPosition = getCurrentPositionAfterMoved(startPosition, 'WEST', maxSize);
    expect(newPosition).toEqual({ x: 2, y: 2 });

  });

});