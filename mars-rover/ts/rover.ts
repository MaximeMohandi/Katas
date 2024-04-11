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

    if (commands[0] === "f" && this.direction === "S") {
      this.position.y--;
    } else if (commands[0] === "f" && this.direction === "E") {
      this.position.x++;
    } else if (commands[0] === "f" && this.direction === "W") {
      this.position.x--;
    } else {
      this.position.y++;
    }

    return true;
  }

  #isValidCommands = (commands: string[]): boolean => {
    return (
      !Array.isArray(commands) ||
      !commands.every((command) => typeof command === "string")
    );
  };
}
