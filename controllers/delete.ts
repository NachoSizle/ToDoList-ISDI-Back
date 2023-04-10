import { Request, Response } from 'express'
import { ToDoModel } from '../models/ToDo';

const deleteById = async (req: Request, res: Response) => {
  const { params: { id }} = req;
  const result = await ToDoModel.findByIdAndDelete(id);
  result ? res.json(result) : res.status(404).send();
}

export default {
  deleteById,
}