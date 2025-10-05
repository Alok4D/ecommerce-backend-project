import { model, Schema } from "mongoose";
import { IPricingPlan } from "./pricingPlan.interface";

const pricingPlanSchema = new Schema<IPricingPlan>(
  {
    name: {
      type: String,
      required: [true, "Pricing plan name is required"],
      trim: true,
      unique: true,
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price cannot be negative"],
    },
    features: {
      type: [String],
      default: [],
      validate: {
        validator: (arr: string[]) => arr.every(f => typeof f === "string"),
        message: "Each feature must be a string",
      },
    },
    duration: {
      type: String,
      required: [true, "Duration is required"],
      trim: true,
    },
  },
);

export const PricingPlanModel = model<IPricingPlan>("PricingPlan", pricingPlanSchema);
