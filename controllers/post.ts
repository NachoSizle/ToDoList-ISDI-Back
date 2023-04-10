import { Request, Response } from 'express'
import ToDoModel from '../models/mongo';

const create = async (req: Request, res: Response) => {
  const todo = new ToDoModel(req.body);
  await todo.save();
  res.status(201).json(todo);
}

export default {
  create,
}