import { model, Schema } from "mongoose";
import { IReview } from "./review.interface";

const reviewSchema = new Schema<IReview>(
  {
    reviewer: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Reviewer is required"],
    },
    design: {
      type: Schema.Types.ObjectId,
      ref: "Design",
      required: [true, "Design reference is required"],
    },
    rating: {
      type: Number,
      required: [true, "Rating is required"],
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
      default: "",
    },
  }
);

export const ReviewModel = model<IReview>("Review", reviewSchema);
