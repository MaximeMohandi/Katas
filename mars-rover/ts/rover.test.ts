/*
You are given the initial starting point (x,y) of a rover and the direction (N,S,E,W) it is facing

 * The rover start at given position 
* The rover start at given direction
 */

import Rover, { CardinalPoints } from "./rover";

type TestCaseType = {
  position: { x: number; y: number };
  direction: CardinalPoints;
};
const testCases: TestCaseType[] = [
  { position: { x: 0, y: 0 }, direction: "N" },
  { position: { x: 1, y: 2 }, direction: "S" },
  { position: { x: 2, y: 1 }, direction: "E" },
  { position: { x: 3, y: 3 }, direction: "W" },
];

describe("rover initial state", () => {
  test.each(testCases)(
    "should start at a given position %p and direction %p",
    ({ position, direction }) => {
      const rover = new Rover(position, direction);

      expect(rover.position).toEqual(position);
      expect(rover.direction).toBe(direction);
    }
  );
});

describe("rover command reception", () => {
  test("should receive a command as string array", () => {
    const rover = new Rover({ x: 0, y: 0 }, "N");

    expect(rover.receiveCommand(["t", "e", "s", "t"])).toBe(true);
  });

  test("should return false if command is not an array", () => {
    const rover = new Rover({ x: 0, y: 0 }, "N");

    expect(rover.receiveCommand("test" as any)).toBe(false);
  });
});
