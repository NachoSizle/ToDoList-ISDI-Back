import { model, Schema } from "mongoose";

export interface ToDo {
  title: string;
  completed: boolean;
}

const toDoSchema = new Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

export default model<ToDo>("ToDo", toDoSchema);