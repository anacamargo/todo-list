import { PRIORITY, STATUS } from "./constants";

export class Todo {
  constructor({ title, description, dueDate, notes, priority, status }) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.notes = notes;
    this.priority = this.#validate(priority, PRIORITY, "priority");
    this.status = this.#validate(status, STATUS, "status");
  }

  #validate(value, allowedValues, fieldName) {
    if (!Object.values(allowedValues).includes(value)) {
      throw new Error(`Invalid ${fieldName}: ${value}`);
    }
    return value;
  }
}
