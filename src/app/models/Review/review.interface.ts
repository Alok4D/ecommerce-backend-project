import { Types } from "mongoose";

export interface IReview {
  _id?: string;
  reviewer: Types.ObjectId;
  design: Types.ObjectId;
  rating: number;
  comment?: string;
}
