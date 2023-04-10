/**
 * En este fichero determinamos el modelo de datos a utilizar cuando recuperamos dichos datos
 * de la base de datos en cuestión. Para este proyecto, se va a utilizar MongoDB.
 */
import { model, Schema } from "mongoose";
import { ToDoDocument } from "./mongo";

const toDoSchema = new Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

export const ToDoModel = model<ToDoDocument>("ToDo", toDoSchema);