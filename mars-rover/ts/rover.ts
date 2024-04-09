type Position = { x: number; y: number };

export default class Rover {
  position: Position;
  direction: string;

  constructor(position: Position, direction: string = "N") {
    if (!["N", "S", "E", "W"].includes(direction)) {
      throw new Error("Invalid direction");
    }
    this.position = position;
    this.direction = direction;
  }
}
