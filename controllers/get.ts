import { Request, Response } from 'express'
import ToDoModel from '../models/mongo';

const getAll = async (req: Request, res: Response) => {
  res.json(await ToDoModel.find());
}

const getById = async (req: Request, res: Response) => {
  const result = await ToDoModel.findById(req.params.id);
  result ? res.json(result) : res.status(404).send();
}

export default {
  getAll,
  getById,
}