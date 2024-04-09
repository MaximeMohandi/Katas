type Position = { x: number; y: number };

export type CardinalPoints = "N" | "S" | "E" | "W";

export default class Rover {
  position: Position;
  direction: string;

  constructor(position: Position, direction: CardinalPoints = "N") {
    this.position = position;
    this.direction = direction;
  }
}
