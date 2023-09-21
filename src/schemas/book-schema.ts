import joi from "joi";
import { CreateBook } from "../protocols/book";
import Joi from "joi";

export const bookSchema = joi.object<CreateBook>({
  title: joi.string().required(),
  cover: Joi.string().uri().required(),
  author: joi.string().required(),
  publisher: joi.string().required(),
  purchaseDate: joi.date().required()
});