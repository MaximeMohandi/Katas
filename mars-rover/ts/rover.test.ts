/*
You are given the initial starting point (x,y) of a rover and the direction (N,S,E,W) it is facing

 * The rover start at given position 
* The rover start at given direction
 */

import Rover from "./rover";

describe("rover initial state", () => {
  test.each([
    [{ x: 0, y: 0 }, "N"],
    [{ x: 10, y: -4 }, "S"],
    [{ x: -9, y: 0 }, "E"],
    [{ x: 0, y: 0 }, "W"],
  ])(
    "should start at a given position %p and direction %p",
    (position, direction) => {
      const rover = new Rover(position, direction);

      expect(rover.position).toEqual(position);
      expect(rover.direction).toBe(direction);
    }
  );
});
