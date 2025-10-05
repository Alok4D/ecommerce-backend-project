import { Types } from "mongoose";

export interface IPurchase {
  _id?: string;
  customer: Types.ObjectId;
  design: Types.ObjectId;
  selectedPricingPlan: Types.ObjectId;
  paymentStatus: "Pending" | "Paid" | "Cancelled";
  purchaseDate?: Date;
}
