type Position = { x: number; y: number };

export default class Rover {
  position: Position;

  constructor(position: Position) {
    this.position = position;
  }
}
