// app.js
import { Student } from "./Student.js";
import { StudentRepo } from "./student-repository.js";
import { EventHandler } from "./event-handler.js";

let studentRepository = new StudentRepo();

let eventHandler = new EventHandler();
eventHandler.eventRegist();

export { studentRepository };
