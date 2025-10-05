import { model, Schema } from "mongoose";
import { IPurchase } from "./purchase.interface";

const purchaseSchema = new Schema<IPurchase>(
  {
    customer: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Customer is required"],
    },
    design: {
      type: Schema.Types.ObjectId,
      ref: "Design",
      required: [true, "Design reference is required"],
    },
    selectedPricingPlan: {
      type: Schema.Types.ObjectId,
      ref: "PricingPlan",
      required: [true, "Pricing Plan reference is required"],
    },
    paymentStatus: {
      type: String,
      enum: ["Pending", "Paid", "Cancelled"],
      default: "Pending",
    },
    purchaseDate: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export const PurchaseModel = model<IPurchase>("Purchase", purchaseSchema);
