type Position = { x: number; y: number };

export type CardinalPoints = "N" | "S" | "E" | "W";

export default class Rover {
  position: Position;
  direction: string;

  constructor(position: Position, direction: CardinalPoints) {
    this.position = position;
    this.direction = direction;
  }

  receiveCommand(commands: string[]): boolean {
    if (this.#isValidCommands(commands)) return false;

    if (commands[0] === "f") {
      this.#moveForward();
    }

    return true;
  }

  #isValidCommands = (commands: string[]): boolean => {
    return (
      !Array.isArray(commands) ||
      !commands.every((command) => typeof command === "string")
    );
  };

  #moveForward = (): void => {
    if (this.direction === "N") {
      this.position.y++;
    }

    if (this.direction === "S") {
      this.position.y--;
    }

    if (this.direction === "E") {
      this.position.x++;
    }

    if (this.direction === "W") {
      this.position.x--;
    }
  };
}
