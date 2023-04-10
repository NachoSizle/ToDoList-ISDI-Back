import { Document, Model } from "mongoose";

export interface IToDo {
  title: string;
  completed: boolean;
}

export interface IToDoModel extends Model<ToDoDocument> {
  findCompleted(): Promise<ToDoDocument[]>;
}

export interface ToDoDocument extends IToDo, Document {
  markAsCompleted(): Promise<ToDoDocument>;
}