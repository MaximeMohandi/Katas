/*
You are given the initial starting point (x,y) of a rover and the direction (N,S,E,W) it is facing

 * The rover start at given position 
* The rover start at given direction
 */

import Rover from "./rover";

describe("rover initial state", () => {
  it("should start at a given position and direction", () => {
    const rover = new Rover({ x: 0, y: 0 }, "N");

    expect(rover.position).toEqual({ x: 0, y: 0 });
    expect(rover.direction).toBe("N");
  });
});
