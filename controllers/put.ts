import { Request, Response } from 'express'
import ToDoModel from '../models/mongo';

const update = async (req: Request, res: Response) => {
  const { params: { id }, body } = req;
  const result = await ToDoModel.findByIdAndUpdate(id, body, { new: true });
  result ? res.json(result) : res.status(404).send();
}

export default {
  update,
}