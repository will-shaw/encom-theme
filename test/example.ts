import { EventEmitter } from "node:events";

const SOME_CONSTANT = "Hello";

/**
 * Multi line comment
 */
export class Test extends EventEmitter {
  // Single line comment

  constructor() {
    super();
  }

  private cases: string[] = [];

  private unusedVariable: Boolean = false;

  get case() {
    return this.cases[0];
  }

  toString() {
    for (let i = 0; i < 10; i++) {
      console.log(i + 2);
    }

    return this.cases.map((str) => str);
  }
}
