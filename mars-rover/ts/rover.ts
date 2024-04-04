type Position = { x: number; y: number };

export default class Rover {
  position: Position;
  direction: string;

  constructor(position: Position, direction: string = "N") {
    this.position = position;
    this.direction = direction;
  }
}
